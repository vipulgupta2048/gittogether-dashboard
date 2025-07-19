'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const recentEvents = [
  {
    id: 1,
    title: 'GitTogether Delhi NCR: One Year Anniversary Meetup',
    date: 'July 19, 2025',
    time: '10:00 AM IST',
    location: 'Microsoft Gurugram',
    attendees: 48,
    status: 'upcoming',
    description: 'Celebrating one year of GitTogether Delhi with surprises, talks, and networking.'
  },
  {
    id: 2,
    title: 'GitTogether Delhi NCR: June Meetup',
    date: 'June 21, 2025',
    time: '10:00 AM IST',
    location: 'TBD',
    attendees: 377,
    status: 'completed',
    description: 'Community discussions and technical talks on latest development trends.'
  },
  {
    id: 3,
    title: 'GitHub Copilot Workshop',
    date: 'December 2024',
    time: '10:00 AM IST',
    location: 'Various Venues',
    attendees: 350,
    status: 'completed',
    description: 'Hands-on workshop exploring GitHub Copilot for enhanced productivity.'
  },
  {
    id: 4,
    title: 'GitHub Universe Recap 2024',
    date: 'November 2024',
    time: '2:00 PM IST',
    location: 'Community Center',
    attendees: 280,
    status: 'completed',
    description: 'Recap of GitHub Universe announcements and new features.'
  }
];

export function RecentEvents() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Recent Events
        </h2>
        <Link 
          href="/events"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {recentEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                {event.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.status === 'upcoming' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              }`}>
                {event.status}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {event.description}
            </p>
            
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {event.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {event.time}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {event.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {event.attendees} attendees
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
