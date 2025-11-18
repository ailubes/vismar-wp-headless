import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_SPECIES_BY_SLUG, GET_ALL_SPECIES } from '@/lib/wordpress/queries';
import { generateSpeciesMetadata } from '@/lib/seo/metadata';
import { generateArticleSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_SPECIES_BY_SLUG,
      variables: { slug },
    });

    const species = data?.species;

    if (!species) {
      return {
        title: locale === 'en' ? 'Species Not Found' : 'Вид не знайдено',
      };
    }

    return generateSpeciesMetadata(locale, slug, species);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Species' : 'Вид',
    };
  }
}

export async function generateStaticParams({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const client = getClient();
  const language = locale === 'en' ? 'EN' : 'UK';
  const { data } = await client.query({
    query: GET_ALL_SPECIES,
    variables: { language }
  });
  return data?.speciesTypes?.nodes.map((species: any) => ({
    slug: species.slug,
  })) || [];
}

export default async function SpeciesDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const client = getClient();

  const { data } = await client.query({
    query: GET_SPECIES_BY_SLUG,
    variables: { slug }
  });

  if (!data?.species) notFound();

  const species = data.species;

  // Generate JSON-LD structured data
  const articleSchema = generateArticleSchema(locale, {
    title: species.title,
    slug,
    excerpt: species.excerpt,
    content: species.content,
    featuredImage: species.featuredImage?.node?.sourceUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Species' : 'Види', url: `/${locale}/species` },
    { name: species.title },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />
      <h1 className="text-4xl font-bold mb-2">{species.title}</h1>
      {species.speciesDetails?.speciesScientificName && (
        <p className="text-xl italic text-gray-600 mb-6">{species.speciesDetails.speciesScientificName}</p>
      )}

      {species.featuredImage && (
        <img src={species.featuredImage.node.sourceUrl} alt={species.featuredImage.node.altText} className="w-full h-96 object-cover rounded-lg mb-8" />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {species.speciesDetails?.speciesCommonNames && (
          <div>
            <h3 className="font-bold mb-2">Common Names</h3>
            <p>{species.speciesDetails.speciesCommonNames}</p>
          </div>
        )}
        {species.speciesDetails?.speciesOptimalTemp && (
          <div>
            <h3 className="font-bold mb-2">Optimal Temperature</h3>
            <p>{species.speciesDetails.speciesOptimalTemp}</p>
          </div>
        )}
        {species.speciesDetails?.speciesGrowthRate && (
          <div>
            <h3 className="font-bold mb-2">Growth Rate</h3>
            <p>{species.speciesDetails.speciesGrowthRate}</p>
          </div>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: species.content }} className="prose max-w-none mb-8" />

      {species.speciesDetails?.speciesFeeding && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Feeding</h2>
          <div dangerouslySetInnerHTML={{ __html: species.speciesDetails.speciesFeeding }} />
        </section>
      )}

      {species.speciesDetails?.speciesSystems && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Systems</h2>
          <div dangerouslySetInnerHTML={{ __html: species.speciesDetails.speciesSystems }} />
        </section>
      )}

      {species.speciesDetails?.speciesChallenges && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Challenges</h2>
          <div dangerouslySetInnerHTML={{ __html: species.speciesDetails.speciesChallenges }} />
        </section>
      )}
    </div>
  );
}
