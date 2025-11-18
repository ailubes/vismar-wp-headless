import { MetadataRoute } from 'next';
import { getClient } from '@/lib/wordpress/client';
import {
  GET_ALL_PAGES,
  GET_ALL_POSTS,
  GET_ALL_SERVICES,
  GET_ALL_SOFTWARE,
  GET_ALL_PROJECTS,
  GET_ALL_SPECIES,
  GET_ALL_CATEGORIES,
} from '@/lib/wordpress/queries';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: {
    languages?: {
      [locale: string]: string;
    };
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = getClient();
  const entries: SitemapEntry[] = [];

  try {
    // Homepage - highest priority
    entries.push(
      {
        url: `${SITE_URL}/en`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
        alternates: {
          languages: {
            en: `${SITE_URL}/en`,
            uk: `${SITE_URL}/ua`,
          },
        },
      },
      {
        url: `${SITE_URL}/ua`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
        alternates: {
          languages: {
            en: `${SITE_URL}/en`,
            uk: `${SITE_URL}/ua`,
          },
        },
      }
    );

    // Main pages (About, Contact, Services listing, etc.)
    const mainPages = [
      { en: 'about', ua: 'about' },
      { en: 'contact', ua: 'contact' },
      { en: 'services', ua: 'services' },
      { en: 'projects', ua: 'projects' },
      { en: 'software', ua: 'software' },
      { en: 'species', ua: 'species' },
      { en: 'blog', ua: 'blog' },
    ];

    mainPages.forEach((page) => {
      entries.push(
        {
          url: `${SITE_URL}/en/${page.en}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
          alternates: {
            languages: {
              en: `${SITE_URL}/en/${page.en}`,
              uk: `${SITE_URL}/ua/${page.ua}`,
            },
          },
        },
        {
          url: `${SITE_URL}/ua/${page.ua}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
          alternates: {
            languages: {
              en: `${SITE_URL}/en/${page.en}`,
              uk: `${SITE_URL}/ua/${page.ua}`,
            },
          },
        }
      );
    });

    // Fetch and add all services
    try {
      const [servicesEN, servicesUA] = await Promise.all([
        client.query({ query: GET_ALL_SERVICES, variables: { language: 'EN' } }),
        client.query({ query: GET_ALL_SERVICES, variables: { language: 'UK' } }),
      ]);

      const servicesEnNodes = servicesEN.data?.services?.nodes || [];
      const servicesUaNodes = servicesUA.data?.services?.nodes || [];

      // Create a map for matching translations
      const serviceMap = new Map();

      servicesEnNodes.forEach((service: any) => {
        const slug = service.slug;
        if (!serviceMap.has(slug)) {
          serviceMap.set(slug, { en: service, ua: null });
        } else {
          serviceMap.get(slug).en = service;
        }
      });

      servicesUaNodes.forEach((service: any) => {
        const slug = service.slug;
        if (!serviceMap.has(slug)) {
          serviceMap.set(slug, { en: null, ua: service });
        } else {
          serviceMap.get(slug).ua = service;
        }
      });

      serviceMap.forEach((services, slug) => {
        if (services.en) {
          entries.push({
            url: `${SITE_URL}/en/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/services/${slug}`,
                uk: `${SITE_URL}/ua/services/${slug}`,
              },
            },
          });
        }
        if (services.ua) {
          entries.push({
            url: `${SITE_URL}/ua/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/services/${slug}`,
                uk: `${SITE_URL}/ua/services/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching services for sitemap:', error);
    }

    // Fetch and add all projects
    try {
      const [projectsEN, projectsUA] = await Promise.all([
        client.query({ query: GET_ALL_PROJECTS, variables: { language: 'EN' } }),
        client.query({ query: GET_ALL_PROJECTS, variables: { language: 'UK' } }),
      ]);

      const projectsEnNodes = projectsEN.data?.projects?.nodes || [];
      const projectsUaNodes = projectsUA.data?.projects?.nodes || [];

      const projectMap = new Map();

      projectsEnNodes.forEach((project: any) => {
        const slug = project.slug;
        if (!projectMap.has(slug)) {
          projectMap.set(slug, { en: project, ua: null });
        } else {
          projectMap.get(slug).en = project;
        }
      });

      projectsUaNodes.forEach((project: any) => {
        const slug = project.slug;
        if (!projectMap.has(slug)) {
          projectMap.set(slug, { en: null, ua: project });
        } else {
          projectMap.get(slug).ua = project;
        }
      });

      projectMap.forEach((projects, slug) => {
        if (projects.en) {
          entries.push({
            url: `${SITE_URL}/en/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/projects/${slug}`,
                uk: `${SITE_URL}/ua/projects/${slug}`,
              },
            },
          });
        }
        if (projects.ua) {
          entries.push({
            url: `${SITE_URL}/ua/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/projects/${slug}`,
                uk: `${SITE_URL}/ua/projects/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching projects for sitemap:', error);
    }

    // Fetch and add all software solutions
    try {
      const [softwareEN, softwareUA] = await Promise.all([
        client.query({ query: GET_ALL_SOFTWARE, variables: { language: 'EN' } }),
        client.query({ query: GET_ALL_SOFTWARE, variables: { language: 'UK' } }),
      ]);

      const softwareEnNodes = softwareEN.data?.softwareSolutions?.nodes || [];
      const softwareUaNodes = softwareUA.data?.softwareSolutions?.nodes || [];

      const softwareMap = new Map();

      softwareEnNodes.forEach((software: any) => {
        const slug = software.slug;
        if (!softwareMap.has(slug)) {
          softwareMap.set(slug, { en: software, ua: null });
        } else {
          softwareMap.get(slug).en = software;
        }
      });

      softwareUaNodes.forEach((software: any) => {
        const slug = software.slug;
        if (!softwareMap.has(slug)) {
          softwareMap.set(slug, { en: null, ua: software });
        } else {
          softwareMap.get(slug).ua = software;
        }
      });

      softwareMap.forEach((software, slug) => {
        if (software.en) {
          entries.push({
            url: `${SITE_URL}/en/software/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/software/${slug}`,
                uk: `${SITE_URL}/ua/software/${slug}`,
              },
            },
          });
        }
        if (software.ua) {
          entries.push({
            url: `${SITE_URL}/ua/software/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/software/${slug}`,
                uk: `${SITE_URL}/ua/software/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching software for sitemap:', error);
    }

    // Fetch and add all species
    try {
      const [speciesEN, speciesUA] = await Promise.all([
        client.query({ query: GET_ALL_SPECIES, variables: { language: 'EN' } }),
        client.query({ query: GET_ALL_SPECIES, variables: { language: 'UK' } }),
      ]);

      const speciesEnNodes = speciesEN.data?.speciesTypes?.nodes || [];
      const speciesUaNodes = speciesUA.data?.speciesTypes?.nodes || [];

      const speciesMap = new Map();

      speciesEnNodes.forEach((species: any) => {
        const slug = species.slug;
        if (!speciesMap.has(slug)) {
          speciesMap.set(slug, { en: species, ua: null });
        } else {
          speciesMap.get(slug).en = species;
        }
      });

      speciesUaNodes.forEach((species: any) => {
        const slug = species.slug;
        if (!speciesMap.has(slug)) {
          speciesMap.set(slug, { en: null, ua: species });
        } else {
          speciesMap.get(slug).ua = species;
        }
      });

      speciesMap.forEach((species, slug) => {
        if (species.en) {
          entries.push({
            url: `${SITE_URL}/en/species/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/species/${slug}`,
                uk: `${SITE_URL}/ua/species/${slug}`,
              },
            },
          });
        }
        if (species.ua) {
          entries.push({
            url: `${SITE_URL}/ua/species/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/species/${slug}`,
                uk: `${SITE_URL}/ua/species/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching species for sitemap:', error);
    }

    // Fetch and add all blog posts
    try {
      const [postsEN, postsUA] = await Promise.all([
        client.query({ query: GET_ALL_POSTS, variables: { language: 'EN', first: 100 } }),
        client.query({ query: GET_ALL_POSTS, variables: { language: 'UK', first: 100 } }),
      ]);

      const postsEnNodes = postsEN.data?.posts?.nodes || [];
      const postsUaNodes = postsUA.data?.posts?.nodes || [];

      const postMap = new Map();

      postsEnNodes.forEach((post: any) => {
        const slug = post.slug;
        if (!postMap.has(slug)) {
          postMap.set(slug, { en: post, ua: null });
        } else {
          postMap.get(slug).en = post;
        }
      });

      postsUaNodes.forEach((post: any) => {
        const slug = post.slug;
        if (!postMap.has(slug)) {
          postMap.set(slug, { en: null, ua: post });
        } else {
          postMap.get(slug).ua = post;
        }
      });

      postMap.forEach((posts, slug) => {
        if (posts.en) {
          entries.push({
            url: `${SITE_URL}/en/blog/${slug}`,
            lastModified: posts.en.date ? new Date(posts.en.date) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/blog/${slug}`,
                uk: `${SITE_URL}/ua/blog/${slug}`,
              },
            },
          });
        }
        if (posts.ua) {
          entries.push({
            url: `${SITE_URL}/ua/blog/${slug}`,
            lastModified: posts.ua.date ? new Date(posts.ua.date) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/blog/${slug}`,
                uk: `${SITE_URL}/ua/blog/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching posts for sitemap:', error);
    }

    // Fetch and add blog categories
    try {
      const [categoriesEN, categoriesUA] = await Promise.all([
        client.query({ query: GET_ALL_CATEGORIES, variables: { language: 'EN' } }),
        client.query({ query: GET_ALL_CATEGORIES, variables: { language: 'UK' } }),
      ]);

      const categoriesEnNodes = categoriesEN.data?.categories?.nodes || [];
      const categoriesUaNodes = categoriesUA.data?.categories?.nodes || [];

      const categoryMap = new Map();

      categoriesEnNodes.forEach((category: any) => {
        const slug = category.slug;
        if (category.count > 0) {
          if (!categoryMap.has(slug)) {
            categoryMap.set(slug, { en: category, ua: null });
          } else {
            categoryMap.get(slug).en = category;
          }
        }
      });

      categoriesUaNodes.forEach((category: any) => {
        const slug = category.slug;
        if (category.count > 0) {
          if (!categoryMap.has(slug)) {
            categoryMap.set(slug, { en: null, ua: category });
          } else {
            categoryMap.get(slug).ua = category;
          }
        }
      });

      categoryMap.forEach((categories, slug) => {
        if (categories.en) {
          entries.push({
            url: `${SITE_URL}/en/blog/category/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/blog/category/${slug}`,
                uk: `${SITE_URL}/ua/blog/category/${slug}`,
              },
            },
          });
        }
        if (categories.ua) {
          entries.push({
            url: `${SITE_URL}/ua/blog/category/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            alternates: {
              languages: {
                en: `${SITE_URL}/en/blog/category/${slug}`,
                uk: `${SITE_URL}/ua/blog/category/${slug}`,
              },
            },
          });
        }
      });
    } catch (error) {
      console.error('Error fetching categories for sitemap:', error);
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return entries;
}
