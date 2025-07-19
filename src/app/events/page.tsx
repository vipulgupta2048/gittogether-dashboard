'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
  status: 'upcoming' | 'completed';
  description: string;
  topics: string[];
  speakers: string[];
  rating?: number | null;
  registrationLink?: string;
  highlights?: string[];
}

const events: Event[] = [
  {
    id: 1,
    title: 'GitTogether Delhi NCR: One Year Anniversary Meetup',
    date: 'July 19, 2025',
    time: '10:00 AM IST',
    location: 'Microsoft Gurugram, Gurugram',
    attendees: 48,
    maxAttendees: 100,
    status: 'upcoming',
    description: 'Join us for our first anniversary celebration with incredible lineup of sessions, workshops, surprises, and networking opportunities.',
    topics: ['Community Celebration', 'Workshops', 'Networking', 'Surprises'],
    speakers: ['Vipul Gupta', 'Special Guests'],
    rating: null,
    registrationLink: 'https://gh.io/delhi'
  },
  {
    id: 2,
    title: 'GitTogether Delhi NCR: August Meetup',
    date: 'August 23, 2025',
    time: '9:45 AM IST',
    location: 'TBD',
    attendees: 2,
    maxAttendees: 150,
    status: 'upcoming',
    description: 'Our monthly community meetup featuring technical talks, community discussions, and networking.',
    topics: ['Technical Talks', 'Community Updates', 'Open Source'],
    speakers: ['TBA'],
    rating: null,
    registrationLink: '#'
  },
  {
    id: 3,
    title: 'GitTogether Delhi NCR: June Meetup',
    date: 'June 21, 2025',
    time: '10:00 AM IST',
    location: 'Community Venue',
    attendees: 377,
    maxAttendees: 400,
    status: 'completed',
    description: 'A fantastic meetup with record attendance, featuring diverse speakers and engaging technical discussions.',
    topics: ['AI & ML', 'Web Development', 'Open Source', 'Career Growth'],
    speakers: ['Mona', 'Chhavi Garg', 'Shivay Lamba', 'Vipul Gupta'],
    rating: 4.8,
    highlights: ['Record attendance', 'First-time speakers', 'Interactive workshops']
  },
  {
    id: 4,
    title: 'GitHub Copilot Workshop - December 2024',
    date: 'December 2024',
    time: '10:00 AM IST',
    location: 'Various Venues',
    attendees: 350,
    maxAttendees: 350,
    status: 'completed',
    description: 'Hands-on workshop exploring GitHub Copilot for enhanced developer productivity and AI-assisted coding.',
    topics: ['GitHub Copilot', 'AI-Assisted Development', 'Productivity Tools'],
    speakers: ['GitHub Team', 'Product Managers'],
    rating: 4.9,
    highlights: ['Hands-on learning', 'Product manager sessions', 'AI tools deep dive']
  },
  {
    id: 5,
    title: 'GitHub Universe Recap 2024',
    date: 'November 2024',
    time: '2:00 PM IST',
    location: 'Community Center',
    attendees: 280,
    maxAttendees: 300,
    status: 'completed',
    description: 'Comprehensive recap of GitHub Universe 2024 announcements, new features, and future roadmap.',
    topics: ['GitHub Universe', 'Platform Updates', 'Future Roadmap'],
    speakers: ['GitHub Team', 'Community Leaders'],
    rating: 4.7,
    highlights: ['Universe insights', 'Platform updates', 'Community feedback']
  },
  {
    id: 6,
    title: 'AI Governance Workshop',
    date: 'October 2024',
    time: '11:00 AM IST',
    location: 'Tech Hub Delhi',
    attendees: 200,
    maxAttendees: 250,
    status: 'completed',
    description: 'Deep dive into AI governance, safety, and ethical considerations with expert speakers.',
    topics: ['AI Governance', 'Ethics', 'Safety', 'Policy'],
    speakers: ['Soumya Batra (Meta)', 'Vibhav Mithal (IIT Madras)'],
    rating: 4.8,
    highlights: ['Expert speakers', 'Ethical AI', 'Policy discussions']
  },
  {
    id: 7,
    title: 'First GitTogether Meetup',
    date: 'July 6, 2024',
    time: '10:00 AM IST',
    location: 'Microsoft Noida',
    attendees: 200,
    maxAttendees: 200,
    status: 'completed',
    description: 'Our inaugural event that started it all! Historic first meetup with electrifying energy and GitHub & Microsoft support.',
    topics: ['Community Launch', 'Open Source', 'GitHub Introduction'],
    speakers: ['Yashraj Nayak', 'MV Karan', 'Vipul Gupta'],
    rating: 4.6,
    highlights: ['Historic first event', 'GitHub partnership', 'Community foundation']
  }
];

const upcomingEvents = events.filter(e => e.status === 'upcoming');
const pastEvents = events.filter(e => e.status === 'completed').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Community Events
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our journey through 11+ successful events, from our first meetup in July 2024 
          to our upcoming anniversary celebration.
        </p>
      </motion.div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Past Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Past Events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Event Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mt-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Event Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">11+</div>
            <div className="text-gray-600 dark:text-gray-300">Total Events</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">1,400+</div>
            <div className="text-gray-600 dark:text-gray-300">Total Attendees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">45+</div>
            <div className="text-gray-600 dark:text-gray-300">Speakers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">4.7</div>
            <div className="text-gray-600 dark:text-gray-300">Avg Rating</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          event.status === 'upcoming' 
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
        }`}>
          {event.status}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {event.description}
      </p>
      
      <div className="space-y-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {event.date}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {event.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {event.location}
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {event.attendees} {event.maxAttendees && `/ ${event.maxAttendees}`} attendees
        </div>
        {event.rating && (
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            {event.rating}/5 rating
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {event.topics.map((topic: string) => (
            <span 
              key={topic}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {event.highlights && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Highlights:</h4>
          <div className="space-y-1">
            {event.highlights.map((highlight: string) => (
              <div key={highlight} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      )}

      {event.registrationLink && event.status === 'upcoming' && (
        <Link
          href={event.registrationLink}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Register Now
          <ExternalLink className="h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
}
