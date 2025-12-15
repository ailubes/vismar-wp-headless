import Link from 'next/link';
import Image from 'next/image';
import { getOptimizedImageUrl } from '@/lib/image-url';
import { Card, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface Author {
  node: {
    name: string;
    avatar?: {
      url: string;
    };
  };
}

interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Post {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  uri: string;
  slug: string;
  date: string;
  author?: Author;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes: Category[];
  };
}

interface BlogCardProps {
  post: Post;
  locale: string;
  readTimeText?: string;
}

export default function BlogCard({ post, locale, readTimeText }: BlogCardProps) {
  // Decode HTML entities
  const decodeHtmlEntities = (text: string): string => {
    const textarea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
    if (textarea) {
      textarea.innerHTML = text;
      return textarea.value;
    }
    // Fallback for SSR - decode common entities manually
    return text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#8217;/g, '\u2019')  // Right single quotation mark
      .replace(/&#8216;/g, '\u2018')  // Left single quotation mark
      .replace(/&#8220;/g, '\u201C')  // Left double quotation mark
      .replace(/&#8221;/g, '\u201D')  // Right double quotation mark
      .replace(/&#8211;/g, '\u2013')  // En dash
      .replace(/&#8212;/g, '\u2014'); // Em dash
  };

  // Strip HTML tags from excerpt and decode entities
  const cleanExcerpt = post.excerpt
    ? decodeHtmlEntities(post.excerpt.replace(/<[^>]*>/g, '')).trim()
    : '';

  // Calculate read time (rough estimate: 200 words per minute)
  const calculateReadTime = (text: string) => {
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes;
  };

  const readTime = calculateReadTime(post.content || post.excerpt || '');
  const readTimeLabel = readTimeText || (locale === 'en' ? 'min read' : 'хв читання');

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get first category
  const primaryCategory = post.categories?.nodes?.[0];

  return (
    <Link href={post.uri} className="block h-full">
      <Card hoverable className="group overflow-hidden h-full flex flex-col" noPadding>
        {/* Featured Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {post.featuredImage?.node?.sourceUrl ? (
            <Image
              src={getOptimizedImageUrl(post.featuredImage.node.sourceUrl)}
              alt={post.featuredImage.node.altText || post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <svg className="w-16 h-16 text-muted-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          )}
        </div>

        <CardBody className="flex-1 flex flex-col p-6">
          {/* Category Badge */}
          {primaryCategory && (
            <div className="mb-3">
              <Badge variant="secondary" size="sm" className="uppercase">
                {primaryCategory.name}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {cleanExcerpt && (
            <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">
              {cleanExcerpt}
            </p>
          )}

          {/* Author Info */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
            {/* Avatar or Initials */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
              {post.author?.node?.avatar?.url ? (
                <Image
                  src={post.author.node.avatar.url}
                  alt={post.author.node.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              ) : post.author?.node?.name ? (
                <span className="text-sm font-semibold text-primary">
                  {post.author.node.name.charAt(0).toUpperCase()}
                </span>
              ) : (
                <svg className="w-5 h-5 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>

            {/* Author Name and Meta */}
            <div className="flex-1 min-w-0">
              {post.author?.node?.name && (
                <p className="font-medium text-sm text-foreground truncate">
                  {post.author.node.name}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{readTime} {readTimeLabel}</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
