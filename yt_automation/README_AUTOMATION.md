# YouTube Shorts Automation Guide (Faceless Channel)

This guide explains how to automate the process of creating YouTube Shorts from existing videos (like IShowSpeed's clips) by downloading, removing old captions, and adding new ones.

## 🚀 Automated Workflow with Python

We have provided a script `processor.py` that handles the core pipeline.

### Prerequisites
1. **Python 3.x** installed.
2. **FFmpeg** installed (usually handled by `imageio_ffmpeg`).
3. **Dependencies**:
   ```bash
   pip install yt-dlp moviepy openai-whisper torch
   ```

### How to use `processor.py`
Run the script with a YouTube URL:
```bash
python processor.py "https://www.youtube.com/watch?v=EXAMPLE"
```

**What it does:**
1. **Downloads** the highest quality MP4 available.
2. **Crops** the video to a 9:16 aspect ratio (ideal for Shorts).
3. **Removes Captions**: It crops the bottom 20% of the video to remove hardcoded captions.
4. **Transcribes**: Uses OpenAI's Whisper model to accurately transcribe the speech.
5. **Add Captions**: Generates an SRT file and "burns" it into the video using FFmpeg.

---

## 🛠️ Free Online Tools (No Coding Required)

If you prefer using websites, here are the best free options for each step:

### 1. Download Clips
- **SnapTik / SaveFrom.net**: Good for TikTok/Reels without watermarks.
- **Cobalt.tools**: Excellent, clean, and open-source tool for downloading from YouTube, Twitter, and Instagram.

### 2. Remove Existing Captions
- **CapCut (Desktop/Mobile)**: Use the "Crop" tool to zoom in slightly and hide the bottom area where captions usually are.
- **Online Video Cutter**: Simple browser-based cropping.

### 3. Auto-Captioning
- **CapCut**: The "Auto Captions" feature is free and very accurate. You can choose "Speed" style templates.
- **Submagic / Zeemo**: These have "Shorts" styles but usually have a watermark on the free tier.
- **Veed.io**: Great editor with auto-captions (free tier limited).

---

## 💡 Tips for iShowSpeed Shorts
- **High Energy**: Only clip the parts where something funny or loud happens.
- **Split Screens**: Add a "satisfying" video (like Minecraft parkour or GTA ramp jumps) at the bottom to keep viewers engaged. CapCut makes this very easy.
- **Engagement**: Use bright, large, "moving" captions. The `processor.py` script uses standard subtitles; for "Viral" styles, CapCut's templates are superior.
- **Copyright**: Always give credit to @IShowSpeed in the description to reduce the risk of strikes.
