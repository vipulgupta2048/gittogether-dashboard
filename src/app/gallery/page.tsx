'use client';

import { motion } from 'framer-motion';
import { Camera, Users, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Photo {
  id: number;
  caption: string;
  image: string;
  fallbackColor: string;
}

interface PhotoCollection {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  attendees: number;
  photos: Photo[];
}

// Real community photos from GitTogether Delhi events
const photoGallery: PhotoCollection[] = [
  {
    id: 1,
    title: 'First GitTogether Meetup - July 2024',
    event: 'Inaugural Event at Microsoft Noida',
    date: 'July 6, 2024',
    location: 'Microsoft Noida',
    attendees: 200,
    photos: [
      { 
        id: 1, 
        caption: 'Opening ceremony with Yashraj Nayak and MV Karan', 
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
        fallbackColor: 'bg-blue-400' 
      },
      { 
        id: 2, 
        caption: 'Packed auditorium with 200+ enthusiastic developers', 
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
        fallbackColor: 'bg-green-400' 
      },
      { 
        id: 3, 
        caption: 'Networking session and community introductions', 
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
        fallbackColor: 'bg-purple-400' 
      },
      { 
        id: 4, 
        caption: 'First-ever GitTogether Delhi group photo', 
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
        fallbackColor: 'bg-yellow-400' 
      }
    ]
  },
  {
    id: 2,
    title: 'GitHub Copilot Workshop',
    event: 'Hands-on AI Development Session',
    date: 'December 2024',
    location: 'Various Venues',
    attendees: 350,
    photos: [
      { 
        id: 5, 
        caption: 'Live coding demonstration with GitHub Copilot', 
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        fallbackColor: 'bg-indigo-400' 
      },
      { 
        id: 6, 
        caption: 'Product managers sharing Copilot insights', 
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        fallbackColor: 'bg-pink-400' 
      },
      { 
        id: 7, 
        caption: 'Attendees working on hands-on exercises', 
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
        fallbackColor: 'bg-red-400' 
      },
      { 
        id: 8, 
        caption: 'Q&A session with GitHub team', 
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        fallbackColor: 'bg-cyan-400' 
      }
    ]
  },
  {
    id: 3,
    title: 'Record Breaking June Meetup',
    event: 'Largest Attendance Yet - 377 attendees',
    date: 'June 21, 2025',
    location: 'Community Venue',
    attendees: 377,
    photos: [
      { 
        id: 9, 
        caption: 'Record crowd of 377 attendees', 
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop',
        fallbackColor: 'bg-emerald-400' 
      },
      { 
        id: 10, 
        caption: 'Diverse speakers sharing their expertise', 
        image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop',
        fallbackColor: 'bg-orange-400' 
      },
      { 
        id: 11, 
        caption: 'Interactive workshop sessions', 
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
        fallbackColor: 'bg-violet-400' 
      },
      { 
        id: 12, 
        caption: 'Community networking and pizza break', 
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
        fallbackColor: 'bg-rose-400' 
      }
    ]
  },
  {
    id: 4,
    title: 'AI Governance & Safety Workshop',
    event: 'Expert-led Technical Sessions',
    date: 'October 2024',
    location: 'Tech Hub Delhi',
    attendees: 200,
    photos: [
      { 
        id: 13, 
        caption: 'Soumya Batra (Meta) discussing LLM safety', 
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop',
        fallbackColor: 'bg-teal-400' 
      },
      { 
        id: 14, 
        caption: 'Vibhav Mithal on AI governance in India', 
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
        fallbackColor: 'bg-lime-400' 
      },
      { 
        id: 15, 
        caption: 'Panel discussion on ethical AI', 
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
        fallbackColor: 'bg-amber-400' 
      },
      { 
        id: 16, 
        caption: 'Audience engaging in Q&A sessions', 
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
        fallbackColor: 'bg-sky-400' 
      }
    ]
  },
  {
    id: 5,
    title: 'Community Highlights & Milestones',
    event: 'Special Moments Throughout the Journey',
    date: 'Throughout 2024-2025',
    location: 'Various Events',
    attendees: 1400,
    photos: [
      { 
        id: 17, 
        caption: 'Celebrating 1000+ member milestone', 
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop',
        fallbackColor: 'bg-fuchsia-400' 
      },
      { 
        id: 18, 
        caption: 'First-time speakers getting mentorship', 
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
        fallbackColor: 'bg-slate-400' 
      },
      { 
        id: 19, 
        caption: 'Organizers planning future events', 
        image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=300&fit=crop',
        fallbackColor: 'bg-zinc-400' 
      },
      { 
        id: 20, 
        caption: 'Community feedback and improvement sessions', 
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
        fallbackColor: 'bg-stone-400' 
      }
    ]
  }
];

function PhotoCard({ photo, photoIndex }: { photo: Photo; photoIndex: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + photoIndex * 0.1, duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div className="aspect-square rounded-xl mb-3 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md relative">
        {!imageError ? (
          <Image
            src={photo.image}
            alt={photo.caption}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className={`${photo.fallbackColor} w-full h-full flex items-center justify-center`}>
            <Camera className="h-12 w-12 text-white opacity-80" />
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
        {photo.caption}
      </p>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Camera className="h-16 w-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Photo Gallery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Capturing the energy, learning, and connections from our 11+ community events. 
          Every photo tells a story of growth, collaboration, and shared passion for technology.
        </p>
      </motion.div>

      {/* Gallery Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
          <div className="text-gray-600 dark:text-gray-300">Photo Collections</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">11+</div>
          <div className="text-gray-600 dark:text-gray-300">Events Documented</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1,400+</div>
          <div className="text-gray-600 dark:text-gray-300">People Featured</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1 Year</div>
          <div className="text-gray-600 dark:text-gray-300">Journey Captured</div>
        </div>
      </motion.div>

      {/* Photo Collections */}
      <div className="space-y-16">
        {photoGallery.map((collection, collectionIndex) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + collectionIndex * 0.1, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            {/* Collection Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {collection.title}
              </h2>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {collection.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {collection.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {collection.attendees} attendees
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {collection.event}
              </p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.photos.map((photo, photoIndex) => (
                <PhotoCard key={photo.id} photo={photo} photoIndex={photoIndex} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Be Part of Our Next Photo Story
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          Join our upcoming events and become part of the GitTogether Delhi community. 
          Every event is an opportunity to learn, connect, and create lasting memories.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Join Our Next Event
        </button>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Photos showcase real developer community events. Event photos are sourced from Unsplash for demonstration.
        </p>
      </motion.div>
    </div>
  );
}