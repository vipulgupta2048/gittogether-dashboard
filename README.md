# GitTogether Delhi - Community Dashboard

> **[Live Demo](https://vipulgupta2048.github.io/gittogether-dashboard/)**

A Next.js dashboard application built to visualize community metrics and growth data for the GitTogether Delhi developer community. This project demonstrates modern React patterns, TypeScript implementation, and static site deployment workflows.

## Project Overview

This dashboard displays real community data including member growth, event timelines, and organizer profiles. Built as a static site using Next.js App Router with TypeScript, it showcases data visualization techniques and responsive design patterns.

**Key Metrics Displayed:**
- 4,986+ community members
- 11+ events hosted
- 1,400+ total attendees
- 4.7/5 community rating

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.x | React framework with App Router |
| TypeScript | 5.x | Type safety and developer experience |
| Tailwind CSS | 3.x | Utility-first CSS framework |
| Framer Motion | 12.x | Animation library |
| Lucide React | 0.5x | Icon system |

## Features

### Dashboard Components
- **Community Statistics**: Animated metric cards with real-time data display
- **Growth Visualization**: Interactive charts showing member progression over time
- **Event Timeline**: Chronological listing of community events with details
- **Organizer Profiles**: Individual pages for community leaders
- **Photo Gallery**: Event documentation and community highlights
- **Presentation Mode**: Full-screen slide presentation of community journey

### Technical Features
- Static site generation for optimal performance
- Responsive design with mobile-first approach
- TypeScript integration for type safety
- Automated deployment pipeline with GitHub Actions
- SEO optimization with proper meta tags

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard homepage
│   ├── about/             # Community information
│   ├── events/            # Event timeline
│   ├── gallery/           # Photo galleries
│   ├── mission/           # Mission statement
│   ├── organizers/        # Organizer profiles
│   ├── presentation/      # Presentation mode
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── CommunityStats.tsx
│   ├── GrowthChart.tsx
│   ├── Navigation.tsx
│   └── ...
└── .github/workflows/     # CI/CD configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/vipulgupta2048/gittogether-dashboard.git
cd gittogether-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
npm run dev        # Development server with Turbopack
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run deploy     # Build for deployment
```

## Deployment

### GitHub Pages
This project is configured for GitHub Pages deployment:

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. Push changes to trigger deployment

### Other Platforms
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Import project and deploy with default settings

## Development

### Key Components

| Component | File | Description |
|-----------|------|-------------|
| Navigation | `Navigation.tsx` | Site navigation with mobile menu |
| Community Stats | `CommunityStats.tsx` | Animated metric cards |
| Growth Chart | `GrowthChart.tsx` | Member growth visualization |
| Recent Events | `RecentEvents.tsx` | Event timeline component |

### Data Structure
Community data is stored as static JSON structures within components, including:
- Member growth timeline
- Event details with dates and speakers
- Organizer information and achievements
- Photo gallery collections

### Styling
- Tailwind CSS for utility-first styling
- Responsive design with mobile-first approach
- Dark mode support through CSS variables
- Custom animations using Framer Motion

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Repository**: [github.com/vipulgupta2048/gittogether-dashboard](https://github.com/vipulgupta2048/gittogether-dashboard)
- **Community**: [GitTogether Delhi](https://gh.io/delhi)
- **Maintainer**: [@vipulgupta2048](https://github.com/vipulgupta2048)
