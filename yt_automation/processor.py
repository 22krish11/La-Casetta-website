import os
import sys
import subprocess
import yt_dlp
from moviepy import VideoFileClip
import whisper
import torch
import shlex

def download_video(url, output_path='input_video.mp4'):
    print(f"Downloading {url}...")
    ydl_opts = {
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        'outtmpl': output_path,
        'quiet': True,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    return output_path

def transcribe_audio(video_path):
    print("Transcribing audio...")
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = whisper.load_model("base", device=device)
    result = model.transcribe(video_path)
    return result['segments']

def format_timestamp(seconds):
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    millis = int((seconds % 1) * 1000)
    return f"{hours:02}:{minutes:02}:{secs:02},{millis:03}"

def process_video_with_captions(input_path, output_path='final_short.mp4'):
    clip = VideoFileClip(input_path)
    w, h = clip.size

    # Target 9:16 aspect ratio
    target_ratio = 9/16

    # First, handle caption removal by cropping bottom 20%
    # This leaves us with a 80% height video.
    temp_h = h * 0.8
    clip_no_captions = clip.cropped(y1=0, y2=temp_h)

    # Now, adjust width to match 9:16 ratio for the new height
    # new_w / temp_h = 9 / 16  => new_w = temp_h * (9/16)
    new_w = temp_h * target_ratio

    if new_w <= w:
        # We can crop sides to get 9:16
        x1 = (w - new_w) / 2
        final_clip = clip_no_captions.cropped(x1=x1, x2=x1+new_w)
    else:
        # If new_w is larger than original w, we need to letterbox or crop top/bottom more
        # For simplicity, we'll just resize to the target width and accept some loss or padding
        final_clip = clip_no_captions.resized(width=new_w)

    segments = transcribe_audio(input_path)

    # Generate SRT content
    srt_content = ""
    for i, seg in enumerate(segments):
        start = seg['start']
        end = seg['end']
        text = seg['text'].strip()

        srt_content += f"{i+1}\n"
        srt_content += f"{format_timestamp(start)} --> {format_timestamp(end)}\n"
        srt_content += f"{text}\n\n"

    with open("captions.srt", "w") as f:
        f.write(srt_content)

    print("Captions generated in captions.srt")

    import imageio_ffmpeg
    ffmpeg_bin = imageio_ffmpeg.get_ffmpeg_exe()

    temp_no_caps = "temp_no_caps.mp4"
    final_clip.write_videofile(temp_no_caps, codec='libx264', audio_codec='aac')

    # Burn subtitles using ffmpeg with proper quoting
    # Using subprocess.run for safer execution
    cmd = [
        ffmpeg_bin, "-y",
        "-i", temp_no_caps,
        "-vf", "subtitles=captions.srt:force_style='FontSize=24,PrimaryColour=&H00FFFF,OutlineColour=&H000000,BorderStyle=1,Outline=2'",
        output_path
    ]

    print(f"Running ffmpeg to burn subtitles...")
    subprocess.run(cmd, check=True)

    # Cleanup temp files
    if os.path.exists(temp_no_caps):
        os.remove(temp_no_caps)

    print(f"Final video saved to {output_path}")
    return output_path

if __name__ == "__main__":
    if len(sys.argv) > 1:
        url = sys.argv[1]
        input_file = download_video(url)
        process_video_with_captions(input_file)
    else:
        print("Usage: python processor.py <youtube_url>")
