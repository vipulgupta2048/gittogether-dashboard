'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

const slides = [
  {
    id: 1,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: (
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">GitTogether Delhi</h1>
        <h2 className="text-3xl text-gray-200 mb-6">One Year Journey</h2>
        <p className="text-xl text-gray-300">From 0 to 4,986+ Developers Strong</p>
        <p className="text-lg text-gray-400 mt-4">July 2024 - July 2025</p>
      </div>
    )
  },
  {
    id: 2,
    background: '#1a202c',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <ul className="text-xl text-gray-300 space-y-4 max-w-4xl mx-auto">
          <li>🚀 Building the largest developer community in Delhi NCR</li>
          <li>🤝 Fostering collaboration and knowledge sharing</li>
          <li>💡 Empowering developers with cutting-edge technology</li>
          <li>🌟 Creating opportunities for career growth and innovation</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    background: '#2d3748',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">By The Numbers</h2>
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-blue-400">4,986+</h3>
            <p className="text-xl text-gray-300">Community Members</p>
          </div>
          <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-green-400">11+</h3>
            <p className="text-xl text-gray-300">Events Organized</p>
          </div>
          <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-purple-400">1,400+</h3>
            <p className="text-xl text-gray-300">Total Attendees</p>
          </div>
          <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-yellow-400">4.7/5</h3>
            <p className="text-xl text-gray-300">Community Rating</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    background: '#4a5568',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Growth Timeline</h2>
        <ul className="text-lg text-gray-300 space-y-4 max-w-4xl mx-auto">
          <li>📅 <strong>July 2024:</strong> Community launched with 0 members</li>
          <li>🎯 <strong>December 2024:</strong> Reached 2,500+ developers</li>
          <li>🚀 <strong>March 2025:</strong> Crossed 3,500+ milestone</li>
          <li>🎉 <strong>July 2025:</strong> Celebrating 4,986+ strong community</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    background: '#2b6cb0',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Organizers</h2>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-black bg-opacity-60 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400">Vipul Gupta</h3>
            <p className="text-sm text-gray-300">Lead Organizer & Community Builder</p>
          </div>
          <div className="text-center bg-black bg-opacity-60 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-400">Shivay Lamba</h3>
            <p className="text-sm text-gray-300">Technical Lead & Developer Advocate</p>
          </div>
          <div className="text-center bg-black bg-opacity-60 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-400">Chhavi Garg</h3>
            <p className="text-sm text-gray-300">Community Manager & Event Coordinator</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    background: '#805ad5',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Event Highlights</h2>
        <ul className="text-xl text-gray-200 space-y-4 max-w-4xl mx-auto">
          <li>🎊 GitTogether Delhi Kickoff Event</li>
          <li>💻 Open Source Workshops & Contributions</li>
          <li>🤖 AI/ML Deep Dive Sessions</li>
          <li>🚀 48-Hour Hackathon with ₹50,000 prizes</li>
        </ul>
      </div>
    )
  },
  {
    id: 7,
    background: '#38b2ac',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Community Impact</h2>
        <ul className="text-xl text-gray-200 space-y-4 max-w-4xl mx-auto">
          <li>💡 50+ job placements through our network</li>
          <li>🚀 30+ startups founded by members</li>
          <li>📚 100+ open source contributions</li>
          <li>🌍 Recognition as Delhi&apos;s fastest-growing tech community</li>
        </ul>
      </div>
    )
  },
  {
    id: 8,
    background: '#ed8936',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Member Testimonials</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <blockquote className="text-lg text-gray-200 bg-black bg-opacity-60 p-4 rounded-lg">
            &ldquo;GitTogether Delhi transformed my career. The networking opportunities are unmatched!&rdquo;
            <footer className="text-sm text-gray-400 mt-2">- Software Engineer at Microsoft</footer>
          </blockquote>
          <blockquote className="text-lg text-gray-200 bg-black bg-opacity-60 p-4 rounded-lg">
            &ldquo;Best tech community in Delhi. The workshops are incredibly practical and helpful.&rdquo;
            <footer className="text-sm text-gray-400 mt-2">- Full Stack Developer</footer>
          </blockquote>
        </div>
      </div>
    )
  },
  {
    id: 9,
    background: '#667eea',
    content: (
      <div className="text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Looking Ahead: 2025-2026</h2>
        <ul className="text-xl text-gray-200 space-y-4 max-w-4xl mx-auto">
          <li>🎯 Goal: 10,000+ community members</li>
          <li>🏢 Dedicated co-working space for members</li>
          <li>📚 Annual GitTogether Delhi conference</li>
          <li>🌍 Expansion to other Indian cities</li>
        </ul>
      </div>
    )
  },
  {
    id: 10,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: (
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Thank You!</h1>
        <h2 className="text-3xl text-gray-200 mb-8">GitTogether Delhi</h2>
        <div className="space-y-4">
          <p className="text-xl text-gray-300">Let&apos;s continue building the future together</p>
          <p className="text-lg text-gray-400">#GitTogetherDelhi #OneYearStrong</p>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>🌐 gittogether-delhi.dev | 📧 hello@gittogether-delhi.dev</p>
        </div>
      </div>
    )
  }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative h-screen overflow-hidden">
        {/* Current Slide */}
        <div 
          className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500"
          style={{
            background: slides[currentSlide].background,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 w-full max-w-6xl">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all disabled:opacity-30"
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all disabled:opacity-30"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
          Use ← → arrow keys or click dots to navigate
        </div>
      </div>
    </div>
  );
}
