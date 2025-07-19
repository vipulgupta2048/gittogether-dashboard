'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GitBranch } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/organizers', label: 'Organizers' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/mission', label: 'Mission' },
    { href: '/presentation', label: 'Presentation' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <GitBranch className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                GitTogether Delhi
              </span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  pathname === href
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-300 dark:hover:text-gray-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
