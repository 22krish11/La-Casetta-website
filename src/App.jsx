import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock, Instagram, ShoppingBag, Calendar, Plus, ChevronRight, Info, CheckCircle2 } from 'lucide-react';

const Navbar = ({ cartCount, onOpenReservation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-casetta-cream border-b border-casetta-espresso/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-casetta-espresso uppercase tracking-tighter">
              La Casetta
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-casetta-espresso hover:text-casetta-terracotta transition-colors font-medium">Home</a>
            <a href="#about" className="text-casetta-espresso hover:text-casetta-terracotta transition-colors font-medium">Our Story</a>
            <a href="#menu" className="text-casetta-espresso hover:text-casetta-terracotta transition-colors font-medium">Menu</a>
            <a href="#location" className="text-casetta-espresso hover:text-casetta-terracotta transition-colors font-medium">Location</a>
            <div className="relative cursor-pointer group">
              <ShoppingBag size={20} className="text-casetta-espresso group-hover:text-casetta-terracotta transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-casetta-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button 
                onClick={onOpenReservation}
                className="bg-casetta-olive text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-casetta-olive/90 transition-all shadow-md font-bold"
            >
              <Calendar size={18} />
              Reservations
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative">
              <ShoppingBag size={24} className="text-casetta-espresso" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-casetta-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-casetta-espresso">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-casetta-cream border-t border-casetta-espresso/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a href="#home" className="block text-lg text-casetta-espresso font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block text-lg text-casetta-espresso font-medium" onClick={() => setIsOpen(false)}>Our Story</a>
            <a href="#menu" className="block text-lg text-casetta-espresso font-medium" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#location" className="block text-lg text-casetta-espresso font-medium" onClick={() => setIsOpen(false)}>Location</a>
            <button 
                onClick={() => { onOpenReservation(); setIsOpen(false); }}
                className="w-full bg-casetta-olive text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg"
            >
              <Calendar size={18} />
              Reservations
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-[90vh] flex items-center justify-center bg-casetta-espresso overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="/assets/bungalow-vibe.png" 
        alt="La Casetta Bungalow Ambiance" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-casetta-espresso/40 via-casetta-espresso/20 to-casetta-espresso/90"></div>
    </div>
    <div className="relative text-center px-4 max-w-4xl z-10">
      <span className="text-casetta-cream/80 font-bold tracking-[0.4em] uppercase text-sm mb-6 block animate-fade-in-up">Est. 2024 • Pune</span>
      <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight animate-fade-in-up delay-100">Soulful Italian in a <br/><span className="italic text-casetta-terracotta">Historic Bungalow</span></h1>
      <p className="text-xl md:text-2xl text-casetta-cream/90 mb-12 font-sans max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">Where authentic wood-fired flavors meet the charm of Deccan Gymkhana's quiet lanes.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
        <a href="#menu" className="bg-casetta-terracotta text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-casetta-terracotta/90 transition-all shadow-2xl hover:-translate-y-1">
          Explore Menu
        </a>
        <button className="bg-white text-casetta-espresso px-12 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1">
          <ShoppingBag size={22} />
          Order Online
        </button>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
    </div>
  </section>
);

const About = () => (
    <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src="/assets/bungalow-vibe.png" alt="Our Bungalow" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-casetta-olive text-white p-10 rounded-[2rem] shadow-2xl max-w-xs hidden md:block">
                        <h4 className="font-serif text-2xl mb-4 italic text-casetta-cream">The Soul of Pune</h4>
                        <p className="text-sm leading-relaxed opacity-90 font-sans">"We've preserved every brick of this 80-year-old bungalow to give you a dining experience that feels like coming home to Italy."</p>
                    </div>
                </div>
                <div>
                    <span className="text-casetta-terracotta font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-casetta-espresso mb-8 leading-tight">Authenticity in <br/>Every Corner</h2>
                    <p className="text-lg text-casetta-espresso/70 mb-8 leading-relaxed font-sans">
                        La Casetta ("The Little House") was born from a passion for simple, soulful Italian cooking. Nestled in a converted bungalow in the historic Deccan Gymkhana area, we offer a peaceful escape from the city's bustle.
                    </p>
                    <p className="text-lg text-casetta-espresso/70 mb-10 leading-relaxed font-sans">
                        From our hand-built wood-fired oven to our family-recipe pastas, every dish is prepared with the finest ingredients and a lot of heart. Join us in our garden or the cozy indoor lounge for a taste of true Italian hospitality.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-3xl font-serif text-casetta-terracotta mb-2">400°C</h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-casetta-espresso/50">Oven Temperature</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-serif text-casetta-terracotta mb-2">100%</h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-casetta-espresso/50">Handmade Pasta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const MenuSection = ({ onAddToCart }) => {
  const categories = [
    { 
      name: 'Soups', 
      items: [
        { 
          id: 's1',
          name: 'Roasted Butternut Soup', 
          price: 450, 
          desc: 'Velvety, slow-roasted butternut squash infused with fresh sage and nutmeg. Served with house sourdough.',
          image: '/assets/roasted-butternut-soup.png'
        },
        { 
          id: 's2',
          name: 'Classic Minestrone', 
          price: 425, 
          desc: 'Hearty seasonal vegetable soup with cannellini beans, ditalini pasta, and a touch of pesto.'
        }
      ] 
    },
    { 
      name: 'Handmade Pasta', 
      items: [
        { 
          id: 'p1',
          name: 'Spaghetti Pomodoro', 
          price: 650, 
          desc: 'Soulful San Marzano tomato sauce, fresh basil, and premium EVOO. Simple and classic.' 
        },
        { 
          id: 'p2',
          name: 'Fettuccine Alfredo', 
          price: 695, 
          desc: 'Rich parmesan and butter sauce with a hint of garlic. Silky and comforting.' 
        },
        { 
          id: 'p3',
          name: 'Penne Arrabbiata', 
          price: 645, 
          desc: 'Spicy tomato sauce with garlic and dried red chili peppers. For those who like a kick.' 
        }
      ] 
    },
    { 
      name: 'Wood-Fired Pizza', 
      items: [
        { 
          id: 'z1',
          name: 'Margherita', 
          price: 750, 
          desc: 'Fired at 400°C. Creamy mozzarella, tangy tomato sauce, and fresh basil leaves on our signature crust.',
          image: '/assets/wood-fired-pizza.png'
        },
        { 
          id: 'z2',
          name: 'Quattro Formaggi', 
          price: 895, 
          desc: 'Mozzarella, Gorgonzola, Parmesan, and Scamorza. A cheese lover\'s dream.' 
        },
        { 
          id: 'z3',
          name: 'Diavola', 
          price: 845, 
          desc: 'Spicy pepperoni, mozzarella, tomato sauce, and a drizzle of hot honey.' 
        }
      ] 
    },
    { 
      name: 'Dolce & Beverages', 
      items: [
        { 
          id: 'd1',
          name: 'Signature Tiramisu', 
          price: 550, 
          desc: 'Mascarpone cream layered with espresso-soaked ladyfingers and dark cocoa.' 
        },
        { 
          id: 'd2',
          name: 'Vanilla Panna Cotta', 
          price: 495, 
          desc: 'Silky vanilla bean cream served with a fresh berry compote.' 
        },
        { 
          id: 'b1',
          name: 'Iced Peach Tea', 
          price: 245, 
          desc: 'House-brewed black tea infused with fresh peach puree and mint.' 
        },
        { 
            id: 'b2',
            name: 'Italian Roast Coffee', 
            price: 195, 
            desc: 'Strong, aromatic dark roast served black or with frothed milk.' 
        },
        { 
            id: 'b3',
            name: 'Fresh Lime Soda', 
            price: 185, 
            desc: 'Classic and refreshing. Choice of sweet, salted, or mixed.' 
        }
      ] 
    },
  ];

  return (
    <section id="menu" className="py-24 bg-casetta-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-casetta-terracotta font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Crafted with Soul</span>
          <h2 className="text-4xl md:text-6xl font-serif text-casetta-espresso mb-8 leading-tight">La Carta</h2>
          <div className="w-32 h-1.5 bg-casetta-terracotta mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-28">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-2xl md:text-3xl font-serif text-casetta-olive border-b border-casetta-espresso/10 pb-5 mb-12 uppercase tracking-widest flex justify-between items-center">
                {cat.name}
                <ChevronRight size={24} className="text-casetta-terracotta/40" />
              </h3>
              <div className="space-y-16">
                {cat.items.map((item) => (
                  <div key={item.id} className="group relative">
                    {item.image && (
                      <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      </div>
                    )}
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-2xl font-bold text-casetta-espresso group-hover:text-casetta-terracotta transition-colors duration-300">{item.name}</h4>
                            {item.id.startsWith('z') && <span className="bg-casetta-terracotta/10 text-casetta-terracotta text-[10px] font-bold px-2 py-0.5 rounded uppercase">Wood-Fired</span>}
                        </div>
                        <p className="text-casetta-espresso/60 italic text-base leading-relaxed mb-6 max-w-md">{item.desc}</p>
                        <button 
                          onClick={() => onAddToCart(item)}
                          className="group/btn relative overflow-hidden bg-casetta-espresso text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:bg-casetta-terracotta shadow-md hover:shadow-xl active:scale-95"
                        >
                          <span className="flex items-center gap-2">
                            <Plus size={14} />
                            Add to Order
                          </span>
                        </button>
                      </div>
                      <span className="text-2xl font-serif font-bold text-casetta-terracotta bg-white px-4 py-1 rounded-lg shadow-sm">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center bg-white p-12 rounded-[3rem] shadow-xl border-2 border-casetta-cream">
            <Info className="mx-auto mb-6 text-casetta-terracotta" size={40} />
            <h3 className="text-2xl font-serif mb-4 text-casetta-espresso">Dietary Preferences?</h3>
            <p className="text-casetta-espresso/60 max-w-xl mx-auto mb-8">Most of our dishes can be prepared vegan or gluten-free. Please inform your server about any allergies before ordering.</p>
            <button className="text-casetta-terracotta font-bold border-b-2 border-casetta-terracotta hover:text-casetta-espresso hover:border-casetta-espresso transition-all">Download Full PDF Menu</button>
        </div>
      </div>
    </section>
  );
};

const Location = () => (
  <section id="location" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-casetta-terracotta font-bold tracking-[0.3em] uppercase text-sm mb-4 block text-center lg:text-left">Find Us</span>
          <h2 className="text-4xl md:text-6xl font-serif text-casetta-espresso mb-12 leading-tight text-center lg:text-left">Visit Our Hidden <br/><span className="text-casetta-olive italic">Italian Oasis</span></h2>
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="bg-casetta-cream p-4 rounded-2xl text-casetta-terracotta group-hover:bg-casetta-terracotta group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin size={28} />
              </div>
              <div>
                <p className="font-bold text-xl mb-1 text-casetta-espresso">The Bungalow</p>
                <p className="text-casetta-espresso/80 leading-relaxed text-lg">Manohar More Path, Deccan Gymkhana, Pune, <br/>Maharashtra 411004</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="bg-casetta-cream p-4 rounded-2xl text-casetta-terracotta group-hover:bg-casetta-terracotta group-hover:text-white transition-all duration-300 shadow-sm">
                <Clock size={28} />
              </div>
              <div>
                <p className="font-bold text-xl mb-1 text-casetta-espresso">Hours of Soul</p>
                <p className="text-casetta-espresso/70 text-lg">Tue - Sun: 12:30 PM - 11:00 PM</p>
                <p className="text-casetta-terracotta/60 font-bold text-xs uppercase tracking-widest mt-2">Mondays for Rest & Inspiration</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="bg-casetta-cream p-4 rounded-2xl text-casetta-terracotta group-hover:bg-casetta-terracotta group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone size={28} />
              </div>
              <div>
                <p className="font-bold text-xl mb-1 text-casetta-espresso">Say Hello</p>
                <p className="text-casetta-espresso/70 text-lg">+919270447327</p>
                <p className="text-casetta-terracotta font-medium mt-1">hello@lacasetta.in</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 justify-center lg:justify-start">
            <a 
              href="https://instagram.com/lacasetta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-casetta-espresso hover:text-casetta-terracotta font-bold transition-all text-lg group"
            >
              <Instagram size={32} className="group-hover:rotate-12 transition-transform" />
              <span className="border-b-2 border-casetta-terracotta/20 group-hover:border-casetta-terracotta pb-1">@lacasetta</span>
            </a>
          </div>
        </div>
        <div className="relative group">
            <div className="absolute -inset-4 bg-casetta-cream rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="h-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.24838612662!2d73.8407421!3d18.5176461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0792d47371d%3A0x53b032d651480600!2sDeccan%20Gymkhana%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719245000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="La Casetta Location"
            ></iframe>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-casetta-espresso text-casetta-cream pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-serif mb-8 uppercase tracking-tighter">La Casetta</h2>
          <p className="opacity-70 text-lg leading-relaxed max-w-md font-sans">
            A piece of Italy in a historic Pune bungalow. We believe in the magic of simple ingredients, warm hospitality, and the crackle of a wood-fired oven.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-casetta-terracotta">Links</h4>
          <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
            <li><a href="#home" className="hover:text-casetta-terracotta transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-casetta-terracotta transition-colors">Story</a></li>
            <li><a href="#menu" className="hover:text-casetta-terracotta transition-colors">Menu</a></li>
            <li><a href="#location" className="hover:text-casetta-terracotta transition-colors">Find Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-casetta-terracotta">Join Us</h4>
          <p className="text-sm opacity-60 mb-8 font-sans">Be the first to hear about our seasonal specials and bungalow events.</p>
          <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-white/10 border border-white/20 rounded-full px-6 py-2 text-sm w-full focus:outline-none focus:border-casetta-terracotta transition-colors" />
              <button className="bg-casetta-terracotta text-white p-3 rounded-full hover:scale-105 transition-transform"><Plus size={18} /></button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs opacity-40 font-bold uppercase tracking-widest">© 2026 La Casetta Restaurant • Designed with Soul</p>
        <div className="flex gap-10 opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const ReservationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [step, setStep] = useState(1);
    
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-casetta-espresso/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-casetta-cream w-full max-w-lg rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-300">
                <button onClick={onClose} className="absolute top-6 right-6 text-casetta-espresso/40 hover:text-casetta-espresso transition-colors">
                    <X size={32} />
                </button>
                
                <div className="p-12">
                    {step === 1 ? (
                        <>
                            <h2 className="text-4xl font-serif text-casetta-espresso mb-4">Book Your Table</h2>
                            <p className="text-casetta-espresso/60 mb-8">Join us for an unforgettable Italian evening.</p>
                            
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-casetta-terracotta ml-2">Date</label>
                                        <input type="date" required className="w-full bg-white border border-casetta-espresso/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-casetta-terracotta transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-casetta-terracotta ml-2">Time</label>
                                        <select className="w-full bg-white border border-casetta-espresso/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-casetta-terracotta transition-colors appearance-none">
                                            <option>12:30 PM</option>
                                            <option>1:30 PM</option>
                                            <option>7:00 PM</option>
                                            <option>8:30 PM</option>
                                            <option>9:30 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-casetta-terracotta ml-2">Guests</label>
                                    <select className="w-full bg-white border border-casetta-espresso/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-casetta-terracotta transition-colors appearance-none">
                                        <option>2 People</option>
                                        <option>4 People</option>
                                        <option>6 People</option>
                                        <option>8+ People</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-casetta-terracotta ml-2">Full Name</label>
                                    <input type="text" placeholder="Gaurav Sharma" required className="w-full bg-white border border-casetta-espresso/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-casetta-terracotta transition-colors" />
                                </div>
                                <button type="submit" className="w-full bg-casetta-terracotta text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-casetta-terracotta/20 hover:scale-[1.02] transition-transform">Confirm Reservation</button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                            <div className="bg-casetta-olive/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-casetta-olive">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-4xl font-serif text-casetta-espresso mb-4">A Presto!</h2>
                            <p className="text-casetta-espresso/60 mb-10 leading-relaxed">Your table at the bungalow is reserved. We'll send a confirmation to your phone shortly.</p>
                            <button onClick={onClose} className="bg-casetta-espresso text-white px-10 py-4 rounded-full font-bold">Great, thanks!</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

function App() {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [lastItem, setLastItem] = useState('');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setLastItem(item.name);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="min-h-screen bg-casetta-cream font-sans selection:bg-casetta-terracotta selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar cartCount={cart.length} onOpenReservation={() => setIsReservationOpen(true)} />
      <Hero />
      <About />
      <MenuSection onAddToCart={addToCart} />
      <Location />
      <Footer />

      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* Cart Notification Toast */}
      {showToast && (
        <div className="fixed bottom-10 right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 bg-casetta-espresso text-white px-8 py-5 rounded-[2rem] shadow-2xl flex items-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-500 z-[100] border-2 border-casetta-terracotta/20 backdrop-blur-md">
          <div className="bg-casetta-terracotta p-3 rounded-full animate-bounce shadow-lg shadow-casetta-terracotta/30">
            <ShoppingBag size={24} />
          </div>
          <div>
            <p className="font-serif text-lg text-casetta-cream">Added to your feast!</p>
            <p className="text-xs font-bold uppercase tracking-widest text-casetta-terracotta">{lastItem}</p>
          </div>
          <button className="ml-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" onClick={() => setShowToast(false)}>
            <X size={16} />
          </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </div>
  );
}

export default App;