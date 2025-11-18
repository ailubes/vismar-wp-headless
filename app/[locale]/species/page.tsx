import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SPECIES } from '@/lib/wordpress/queries';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function SpeciesPage({ params }: Props) {
  const { locale } = await params;
  const client = getClient();
  const language = locale === 'en' ? 'EN' : 'UK';

  const { data } = await client.query({
    query: GET_ALL_SPECIES,
    variables: { language }
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Aquaculture Species</h1>
        <p className="text-xl text-gray-600">Expert knowledge in cultivating diverse aquatic species</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.speciesTypes?.nodes.map((species: any) => (
          <Link key={species.id} href={`/${locale}/species/${species.slug}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              {species.featuredImage && (
                <img src={species.featuredImage.node.sourceUrl} alt={species.featuredImage.node.altText} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{species.title}</h3>
                {species.speciesDetails?.speciesScientificName && (
                  <p className="text-sm italic text-gray-600 mb-2">{species.speciesDetails.speciesScientificName}</p>
                )}
                {species.speciesDetails?.speciesCommonNames && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">
                    {species.speciesDetails.speciesCommonNames}
                  </span>
                )}
                {species.excerpt && (
                  <p className="text-sm text-gray-700 mb-4">{species.excerpt.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
                )}
                <button className="text-blue-600 hover:underline">Learn More →</button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
