# GitTogether Delhi - Community Dashboard

A beautiful, developer-focused dashboard showcasing the growth and impact of the GitTogether Delhi community. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Community Analytics**: Interactive charts showing growth from 0 to 4,986+ members
- **Event Timeline**: Comprehensive overview of 11+ community events
- **Organizer Profiles**: Dedicated pages for community leaders
- **Photo Gallery**: Visual documentation of community events
- **Mission & About**: GitTogether's vision and GitHub alignment
- **Responsive Design**: Mobile-first, modern UI

## 📊 Community Stats

- **4,986+** Community Members
- **11+** Events Hosted
- **1,400+** Total Attendees
- **4.7/5** Community Rating (133 reviews)
- **45+** Speakers (Many first-time)
- **123** Talk Proposals Received

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏗️ Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About GitTogether
│   ├── events/         # Event listings and details
│   ├── gallery/        # Photo gallery
│   ├── mission/        # Mission and vision
│   ├── organizers/     # Organizer profiles
│   └── page.tsx        # Dashboard home
├── components/         # Reusable React components
│   ├── CommunityStats.tsx
│   ├── GrowthChart.tsx
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   ├── RecentEvents.tsx
│   └── CommunityHighlights.tsx
└── globals.css         # Global styles
```

## 🚀 Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🌐 Deployment

This dashboard is configured for easy deployment to GitHub Pages:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy GitTogether Delhi Dashboard"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - The site will automatically build and deploy

3. **Access your live site**:
   ```
   https://YOUR_USERNAME.github.io/gittogether-dashboard/
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📈 Dashboard Pages

### Home Dashboard
- Community statistics and KPIs
- Interactive growth chart
- Recent events and highlights

### About
- GitTogether mission and vision
- Core values and community focus
- Journey from inception to 4,986+ members

### Events
- Complete event timeline
- Upcoming and past events
- Event details, speakers, and topics

### Organizers
- Profiles of Vipul Gupta, Shivay Lamba, and Chhavi Garg
- Achievements and contributions
- Social media links and contact

### Gallery
- Event photo collections
- Visual documentation of community growth
- Memorable moments and milestones

### Mission
- Alignment with GitHub's global mission
- Community principles and values
- Vision for future growth

## 🎨 Design Principles

- **Developer-Focused**: GitHub-inspired design and color schemes
- **Modern & Clean**: Contemporary UI with smooth animations
- **Responsive**: Mobile-first design for all devices
- **Accessible**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized loading and minimal bundle size

## 🌟 Key Highlights

- One year journey from 0 to 4,986+ members
- Partnership with GitHub and Microsoft
- Diverse learning topics beyond conventional tech
- Strong focus on first-time speakers and inclusion
- Maintained 4.7/5 community rating throughout growth

## 📝 Data Sources

The dashboard displays real community metrics from:
- GitTogether Delhi Meetup.com group
- Event attendance records
- Community feedback and ratings
- Organizer insights and milestones

## 🤝 Contributing

This dashboard represents the GitTogether Delhi community. For questions or suggestions about the community, visit [https://gh.io/delhi](https://gh.io/delhi).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the GitTogether Delhi community by developers, for developers.
