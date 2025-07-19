'use client';

import { motion } from 'framer-motion';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const growthData = [
  { month: 'Jul 2024', members: 200, events: 1 },
  { month: 'Aug 2024', members: 650, events: 2 },
  { month: 'Sep 2024', members: 1200, events: 3 },
  { month: 'Oct 2024', members: 1800, events: 4 },
  { month: 'Nov 2024', members: 2400, events: 5 },
  { month: 'Dec 2024', members: 3100, events: 7 },
  { month: 'Jan 2025', members: 3700, events: 8 },
  { month: 'Feb 2025', members: 4200, events: 9 },
  { month: 'Mar 2025', members: 4500, events: 10 },
  { month: 'Apr 2025', members: 4700, events: 10 },
  { month: 'May 2025', members: 4850, events: 11 },
  { month: 'Jun 2025', members: 4950, events: 11 },
  { month: 'Jul 2025', members: 4986, events: 11 }
];

export function GrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Community Growth Over Time
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Tracking our journey from the first meetup in July 2024 to today
        </p>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="memberGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              className="text-xs"
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="members"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#memberGradient)"
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4,986</div>
          <div className="text-sm text-blue-600 dark:text-blue-400">Current Members</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">2,386%</div>
          <div className="text-sm text-green-600 dark:text-green-400">Growth Rate</div>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">~380</div>
          <div className="text-sm text-purple-600 dark:text-purple-400">Monthly Growth</div>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1 Year</div>
          <div className="text-sm text-yellow-600 dark:text-yellow-400">Journey</div>
        </div>
      </div>
    </motion.div>
  );
}
