import Link from 'next/link';

interface SoftwareDetails {
  softwareTagline?: string;
  softwareDescriptionShort?: string;
}

interface Software {
  id: string;
  title: string;
  excerpt?: string;
  uri: string;
  softwareDetails?: SoftwareDetails;
}

interface SoftwareCardProps {
  software: Software;
  learnMoreText?: string;
}

export default function SoftwareCard({ software, learnMoreText = 'Learn More' }: SoftwareCardProps) {
  const tagline = software.softwareDetails?.softwareTagline;
  const description = software.softwareDetails?.softwareDescriptionShort || software.excerpt;
  const cleanDescription = description?.replace(/<[^>]*>/g, '').trim() || '';

  return (
    <div className="card p-6 card-lift shadow-transition-md group border-2 border-transparent hover:border-secondary/30 border-glow">
      <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-secondary-200 color-transition icon-rotate-parent">
        <div className="w-8 h-8 bg-secondary-500 rounded icon-rotate group-hover:bg-secondary-600 color-transition"></div>
      </div>

      <h3 className="text-2xl mb-2 font-semibold">{software.title}</h3>

      {tagline && (
        <p className="text-secondary-600 font-medium mb-3">{tagline}</p>
      )}

      {cleanDescription && (
        <p className="text-neutral-600 mb-4 line-clamp-4">
          {cleanDescription}
        </p>
      )}

      <Link
        href={software.uri}
        className="text-secondary-500 hover:text-secondary-600 font-medium inline-flex items-center arrow-slide-parent"
      >
        {learnMoreText}
        <svg className="w-4 h-4 ml-2 arrow-slide" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
