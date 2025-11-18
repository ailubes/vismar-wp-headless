import Link from 'next/link';
import { Droplet, LineChart, Lightbulb, Users, LucideIcon } from 'lucide-react';

interface ServiceDetails {
  serviceTagline?: string;
  serviceDescriptionShort?: string;
  serviceCtaText?: string;
  serviceCtaLink?: string;
}

interface Service {
  id: string;
  title: string;
  excerpt?: string;
  uri: string;
  slug: string;
  serviceDetails?: ServiceDetails;
}

interface ServiceCardProps {
  service: Service;
  learnMoreText?: string;
  index?: number; // For icon selection
}

// Icon mapping for different service types
const serviceIcons: LucideIcon[] = [Droplet, LineChart, Lightbulb, Users];

export default function ServiceCard({
  service,
  learnMoreText = 'Learn More',
  index = 0
}: ServiceCardProps) {
  const tagline = service.serviceDetails?.serviceTagline;
  const description = service.serviceDetails?.serviceDescriptionShort || service.excerpt;
  const ctaText = service.serviceDetails?.serviceCtaText || learnMoreText;

  // Strip HTML tags from excerpt if needed
  const cleanDescription = description?.replace(/<[^>]*>/g, '').trim() || '';

  // Determine which icon to use based on index
  const Icon = serviceIcons[index % serviceIcons.length];

  return (
    <div className="card p-8 md:p-10 card-lift shadow-transition-md group relative border-2 border-transparent hover:border-primary/30 border-glow">
      {/* Icon container with enhanced micro-interaction */}
      <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 color-transition icon-scale-parent">
        <Icon className="w-8 h-8 text-primary icon-scale" />
      </div>

      <h3 className="text-2xl font-bold mb-2 relative z-10">{service.title}</h3>

      {tagline && (
        <p className="text-primary-600 font-medium mb-3">{tagline}</p>
      )}

      {cleanDescription && (
        <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
          {cleanDescription}
        </p>
      )}

      <Link
        href={service.uri}
        className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center arrow-slide-parent group/link"
      >
        {ctaText}
        <svg className="w-4 h-4 ml-2 arrow-slide" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
