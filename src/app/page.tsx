import { CommunityStats } from '@/components/CommunityStats';
import { GrowthChart } from '@/components/GrowthChart';
import { RecentEvents } from '@/components/RecentEvents';
import { HeroSection } from '@/components/HeroSection';
import { CommunityHighlights } from '@/components/CommunityHighlights';
import { CommunityTestimonials } from '@/components/CommunityTestimonials';

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <CommunityStats />
        <GrowthChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentEvents />
          <CommunityHighlights />
        </div>
        <CommunityTestimonials />
      </div>
    </div>
  );
}
