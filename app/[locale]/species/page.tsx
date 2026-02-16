import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SPECIES, GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import { Fish, Thermometer, TrendingUp, Settings } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

// Static species data as fallback
const STATIC_SPECIES = [
  {
    id: 'tilapia',
    slug: 'tilapia',
    title: {
      en: 'Tilapia',
      uk: 'Тиляпія'
    },
    scientificName: 'Oreochromis spp.',
    commonNames: {
      en: 'Tilapia',
      uk: 'Тиляпія'
    },
    description: {
      en: 'Popular warm-water fish species, highly adaptable and easy to farm in various systems. Excellent for commercial production.',
      uk: 'Популярний вид теплолюбних риб, дуже адаптивний і легкий у вирощуванні в різних системах. Відмінно підходить для комерційного виробництва.'
    },
    optimalTemp: '26-30°C',
    growthRate: {
      en: 'Fast',
      uk: 'Швидкий'
    },
    systems: {
      en: 'RAS, Ponds, Cages',
      uk: 'RAS, Ставки, Садки'
    }
  },
  {
    id: 'salmon',
    slug: 'salmon',
    title: {
      en: 'Atlantic Salmon',
      uk: 'Атлантичний лосось'
    },
    scientificName: 'Salmo salar',
    commonNames: {
      en: 'Salmon',
      uk: 'Лосось'
    },
    description: {
      en: 'Premium cold-water species with high market value. Requires specialized RAS systems with precise temperature control.',
      uk: 'Преміум вид холодолюбних риб з високою ринковою вартістю. Потребує спеціалізованих RAS систем з точним контролем температури.'
    },
    optimalTemp: '8-14°C',
    growthRate: {
      en: 'Moderate',
      uk: 'Помірний'
    },
    systems: {
      en: 'RAS, Flow-Through',
      uk: 'RAS, Прямоточні'
    }
  },
  {
    id: 'trout',
    slug: 'trout',
    title: {
      en: 'Rainbow Trout',
      uk: 'Райдужна форель'
    },
    scientificName: 'Oncorhynchus mykiss',
    commonNames: {
      en: 'Trout',
      uk: 'Форель'
    },
    description: {
      en: 'Cold-water species highly popular in RAS systems. Excellent growth rates and well-established farming practices.',
      uk: 'Холодолюбний вид, дуже популярний у RAS системах. Відмінні темпи росту та добре налагоджені практики вирощування.'
    },
    optimalTemp: '10-16°C',
    growthRate: {
      en: 'Fast',
      uk: 'Швидкий'
    },
    systems: {
      en: 'RAS, Flow-Through, Raceways',
      uk: 'RAS, Прямоточні, Лотки'
    }
  },
  {
    id: 'catfish',
    slug: 'catfish',
    title: {
      en: 'African Catfish',
      uk: 'Африканський сом'
    },
    scientificName: 'Clarias gariepinus',
    commonNames: {
      en: 'Catfish',
      uk: 'Сом'
    },
    description: {
      en: 'Hardy species suitable for various production systems. Tolerant to varying water quality and high stocking densities.',
      uk: 'Витривалий вид, придатний для різних виробничих систем. Толерантний до різної якості води та високої щільності посадки.'
    },
    optimalTemp: '25-30°C',
    growthRate: {
      en: 'Very Fast',
      uk: 'Дуже швидкий'
    },
    systems: {
      en: 'RAS, Ponds, Flow-Through',
      uk: 'RAS, Ставки, Прямоточні'
    }
  },
  {
    id: 'shrimp',
    slug: 'shrimp',
    title: {
      en: 'Whiteleg Shrimp',
      uk: 'Біла креветка'
    },
    scientificName: 'Litopenaeus vannamei',
    commonNames: {
      en: 'Pacific White Shrimp',
      uk: 'Тихоокеанська біла креветка'
    },
    description: {
      en: 'High-value crustacean with strong market demand. Requires specialized biofloc or RAS systems with careful water management.',
      uk: 'Високовартісний ракоподібний з сильним ринковим попитом. Потребує спеціалізованих біофлок або RAS систем з ретельним управлінням водою.'
    },
    optimalTemp: '26-32°C',
    growthRate: {
      en: 'Fast',
      uk: 'Швидкий'
    },
    systems: {
      en: 'RAS, Biofloc, Ponds',
      uk: 'RAS, Біофлок, Ставки'
    }
  },
  {
    id: 'sturgeon',
    slug: 'sturgeon',
    title: {
      en: 'Siberian Sturgeon',
      uk: 'Сибірський осетер'
    },
    scientificName: 'Acipenser baerii',
    commonNames: {
      en: 'Sturgeon',
      uk: 'Осетер'
    },
    description: {
      en: 'Premium species for caviar production. Long-term investment with high returns. Requires clean water and specialized systems.',
      uk: 'Преміум вид для виробництва ікри. Довгострокова інвестиція з високою віддачею. Потребує чистої води та спеціалізованих систем.'
    },
    optimalTemp: '15-20°C',
    growthRate: {
      en: 'Slow to Moderate',
      uk: 'Повільний до помірного'
    },
    systems: {
      en: 'RAS, Flow-Through',
      uk: 'RAS, Прямоточні'
    }
  },
  {
    id: 'carp',
    slug: 'carp',
    title: {
      en: 'Common Carp',
      uk: 'Звичайний короп'
    },
    scientificName: 'Cyprinus carpio',
    commonNames: {
      en: 'Carp',
      uk: 'Короп'
    },
    description: {
      en: 'Traditional pond species with proven farming methods. Highly adaptable and suitable for extensive and semi-intensive systems.',
      uk: 'Традиційний ставковий вид з перевіреними методами вирощування. Дуже адаптивний і підходить для екстенсивних та напівінтенсивних систем.'
    },
    optimalTemp: '20-28°C',
    growthRate: {
      en: 'Moderate to Fast',
      uk: 'Помірний до швидкого'
    },
    systems: {
      en: 'Ponds, Cages, RAS',
      uk: 'Ставки, Садки, RAS'
    }
  },
  {
    id: 'barramundi',
    slug: 'barramundi',
    title: {
      en: 'Barramundi',
      uk: 'Барамунді'
    },
    scientificName: 'Lates calcarifer',
    commonNames: {
      en: 'Asian Seabass',
      uk: 'Азіатський морський окунь'
    },
    description: {
      en: 'Tropical species with growing global demand. Excellent for RAS systems with high market prices and fast growth.',
      uk: 'Тропічний вид зі зростаючим світовим попитом. Відмінно підходить для RAS систем з високими ринковими цінами та швидким ростом.'
    },
    optimalTemp: '26-32°C',
    growthRate: {
      en: 'Fast',
      uk: 'Швидкий'
    },
    systems: {
      en: 'RAS, Cages, Ponds',
      uk: 'RAS, Садки, Ставки'
    }
  },
  {
    id: 'perch',
    slug: 'perch',
    title: {
      en: 'European Perch',
      uk: 'Європейський окунь'
    },
    scientificName: 'Perca fluviatilis',
    commonNames: {
      en: 'Perch',
      uk: 'Окунь'
    },
    description: {
      en: 'European freshwater species with premium market positioning. Requires advanced RAS technology for optimal production.',
      uk: 'Європейський прісноводний вид з преміум ринковим позиціонуванням. Потребує передової RAS технології для оптимального виробництва.'
    },
    optimalTemp: '18-24°C',
    growthRate: {
      en: 'Moderate',
      uk: 'Помірний'
    },
    systems: {
      en: 'RAS, Flow-Through',
      uk: 'RAS, Прямоточні'
    }
  },
  {
    id: 'bass',
    slug: 'bass',
    title: {
      en: 'European Sea Bass',
      uk: 'Європейський морський окунь'
    },
    scientificName: 'Dicentrarchus labrax',
    commonNames: {
      en: 'Sea Bass',
      uk: 'Морський окунь'
    },
    description: {
      en: 'High-value marine species suitable for brackish and saltwater systems. Premium market prices with established farming techniques.',
      uk: 'Високовартісний морський вид, придатний для солонуватоводних та морських систем. Преміум ринкові ціни зі встановленими техніками вирощування.'
    },
    optimalTemp: '20-28°C',
    growthRate: {
      en: 'Moderate',
      uk: 'Помірний'
    },
    systems: {
      en: 'RAS, Cages, Flow-Through',
      uk: 'RAS, Садки, Прямоточні'
    }
  }
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'species' },
    });

    const page = data?.page;

    return {
      title: page?.seo?.title || page?.title || (locale === 'en' ? 'Aquaculture Species' : 'Види аквакультури'),
      description: page?.seo?.metaDesc || (locale === 'en'
        ? 'Expert knowledge in cultivating diverse aquatic species for sustainable aquaculture'
        : 'Експертні знання у вирощуванні різноманітних водних видів для сталої аквакультури'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Aquaculture Species' : 'Види аквакультури',
    };
  }
}

export default async function SpeciesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let speciesData: any = null;
  let pageData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch species
    const speciesResult = await client.query({
      query: GET_ALL_SPECIES,
      variables: { language: languageCode },
    });
    speciesData = speciesResult.data;

    // Try to fetch page content for species page
    try {
      const pageResult = await client.query({
        query: GET_PAGE_BY_SLUG,
        variables: { slug: 'species' },
      });
      pageData = pageResult.data;
    } catch (pageError) {
      console.log('Species page content not found, using default content');
    }
  } catch (error) {
    console.error('Error fetching species data:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load species. Please try again later.'
      : 'Не вдалося завантажити види. Будь ласка, спробуйте пізніше.';
  }

  const wordpressSpecies = speciesData?.speciesTypes?.nodes || [];
  const page = pageData?.page;

  // Use static species as fallback when WordPress returns empty
  const species = wordpressSpecies.length > 0 ? wordpressSpecies : STATIC_SPECIES.map(sp => ({
    id: sp.id,
    slug: sp.slug,
    title: sp.title[locale as 'en' | 'uk'],
    speciesDetails: {
      speciesScientificName: sp.scientificName,
      speciesCommonNames: sp.commonNames[locale as 'en' | 'uk'],
      speciesOptimalTemp: sp.optimalTemp,
      speciesGrowthRate: sp.growthRate[locale as 'en' | 'uk'],
      speciesSystems: sp.systems[locale as 'en' | 'uk']
    },
    excerpt: sp.description[locale as 'en' | 'uk'],
    featuredImage: null
  }));

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-bold">
            {page?.title || (locale === 'en' ? 'Aquaculture Species' : 'Види аквакультури')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Expert knowledge in cultivating diverse aquatic species for sustainable and profitable aquaculture operations'
              : 'Експертні знання у вирощуванні різноманітних водних видів для сталих та прибуткових аквакультурних операцій'}
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1: Species Expertise */}
            <div className="text-center">
              <Fish className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {species.length}+
              </div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Species Expertise' : 'Видів'}
              </div>
            </div>

            {/* Stat 2: System Types */}
            <div className="text-center">
              <Settings className="w-10 h-10 mx-auto mb-3 text-cyan-600" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">4+</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'System Types' : 'Типів систем'}
              </div>
            </div>

            {/* Stat 3: Temperature Range */}
            <div className="text-center">
              <Thermometer className="w-10 h-10 mx-auto mb-3 text-orange-600" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">5-35°C</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Temp Range' : 'Діапазон температур'}
              </div>
            </div>

            {/* Stat 4: Growth Optimization */}
            <div className="text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-green-600" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Optimized Growth' : 'Оптимізація росту'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content (if exists) */}
      {page?.content && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div
              className="prose prose-lg prose-primary max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}

      {/* Species Grid */}
      <section className="section">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Our Species Portfolio' : 'Наш портфель видів'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Comprehensive expertise across a wide range of aquaculture species, from traditional favorites to innovative new cultivars'
                : 'Комплексна експертиза у широкому спектрі видів аквакультури, від традиційних до інноваційних нових культур'}
            </p>
          </div>

          {/* Species Cards Grid */}
          {species.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {species.map((sp: any) => (
                <div
                  key={sp.id}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Species Image or Icon */}
                    {sp.featuredImage?.node?.sourceUrl ? (
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <img
                          src={sp.featuredImage.node.sourceUrl}
                          alt={sp.featuredImage.node.altText || sp.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                        <Fish className="w-24 h-24 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Common Name Badge */}
                      {sp.speciesDetails?.speciesCommonNames && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                          {sp.speciesDetails.speciesCommonNames}
                        </span>
                      )}

                      {/* Species Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {sp.title}
                      </h3>

                      {/* Scientific Name */}
                      {sp.speciesDetails?.speciesScientificName && (
                        <p className="text-sm italic text-gray-500 mb-3">
                          {sp.speciesDetails.speciesScientificName}
                        </p>
                      )}

                      {/* Excerpt */}
                      {sp.excerpt && (
                        <p className="text-sm text-gray-700 mb-4 line-clamp-3 flex-1">
                          {sp.excerpt.replace(/<[^>]*>/g, '')}
                        </p>
                      )}

                      {/* Species Metadata */}
                      <div className="space-y-2 mb-4">
                        {/* Optimal Temperature */}
                        {sp.speciesDetails?.speciesOptimalTemp && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Thermometer className="w-4 h-4 mr-2 text-orange-500" />
                            <span className="font-medium mr-1">
                              {locale === 'en' ? 'Temp:' : 'Темп:'}
                            </span>
                            <span>{sp.speciesDetails.speciesOptimalTemp}</span>
                          </div>
                        )}

                        {/* Growth Rate */}
                        {sp.speciesDetails?.speciesGrowthRate && (
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                            <span className="font-medium mr-1">
                              {locale === 'en' ? 'Growth:' : 'Ріст:'}
                            </span>
                            <span>{sp.speciesDetails.speciesGrowthRate}</span>
                          </div>
                        )}

                        {/* Systems */}
                        {sp.speciesDetails?.speciesSystems && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Settings className="w-4 h-4 mr-2 text-blue-500" />
                            <span className="font-medium mr-1">
                              {locale === 'en' ? 'Systems:' : 'Системи:'}
                            </span>
                            <span className="line-clamp-1">{sp.speciesDetails.speciesSystems}</span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Fish className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-neutral-600 text-lg">
                {locale === 'en' ? 'No species available at the moment.' : 'На даний момент види відсутні.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* System Types Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {locale === 'en' ? 'Suitable Cultivation Systems' : 'Підходящі системи вирощування'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'We design and implement various aquaculture systems optimized for different species and production goals'
                : 'Ми проектуємо та впроваджуємо різні аквакультурні системи, оптимізовані для різних видів та цілей виробництва'}
            </p>
          </div>

          {/* System Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* RAS */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {locale === 'en' ? 'RAS Systems' : 'Системи RAS'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Recirculating aquaculture systems for intensive production'
                  : 'Рециркуляційні системи для інтенсивного виробництва'}
              </p>
            </div>

            {/* Flow-Through */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {locale === 'en' ? 'Flow-Through' : 'Прямоточні'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Traditional systems with continuous fresh water supply'
                  : 'Традиційні системи з безперервним постачанням свіжої води'}
              </p>
            </div>

            {/* Pond Systems */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {locale === 'en' ? 'Pond Systems' : 'Ставкові системи'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Outdoor pond cultivation for extensive production'
                  : 'Зовнішнє ставкове вирощування для екстенсивного виробництва'}
              </p>
            </div>

            {/* Hybrid Systems */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {locale === 'en' ? 'Hybrid Systems' : 'Гібридні системи'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Combined approaches for optimal efficiency'
                  : 'Комбіновані підходи для оптимальної ефективності'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              {locale === 'en'
                ? 'Ready to Cultivate These Species?'
                : 'Готові вирощувати ці види?'}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              {locale === 'en'
                ? 'Contact us to discuss which species and systems are right for your aquaculture operation.'
                : "Зв'яжіться з нами, щоб обговорити, які види та системи підходять для вашої аквакультурної операції."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/contact`} className="btn-primary text-lg px-8 py-4">
                {t('getQuote')}
              </a>
              <a
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
              >
                {locale === 'en' ? 'View Our Services' : 'Наші послуги'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
