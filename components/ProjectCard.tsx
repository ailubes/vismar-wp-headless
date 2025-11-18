import Link from 'next/link';

interface ProjectDetails {
  projectClient?: string;
  projectLocation?: string;
  projectYear?: string;
  projectSize?: string;
  projectFeatured?: boolean;
}

interface Project {
  id: string;
  title: string;
  excerpt?: string;
  uri: string;
  projectDetails?: ProjectDetails;
}

interface ProjectCardProps {
  project: Project;
  readMoreText?: string;
}

export default function ProjectCard({ project, readMoreText = 'Read More' }: ProjectCardProps) {
  const details = project.projectDetails;
  const excerpt = project.excerpt?.replace(/<[^>]*>/g, '').trim() || '';

  return (
    <div className="card overflow-hidden card-lift-subtle shadow-transition-md group">
      <div className="aspect-video bg-gradient-aqua relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-8">
        <h3 className="text-3xl mb-4 font-bold">{project.title}</h3>

        {details && (
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            {details.projectClient && (
              <div>
                <span className="text-neutral-500">Client:</span>
                <p className="font-medium">{details.projectClient}</p>
              </div>
            )}
            {details.projectLocation && (
              <div>
                <span className="text-neutral-500">Location:</span>
                <p className="font-medium">{details.projectLocation}</p>
              </div>
            )}
            {details.projectYear && (
              <div>
                <span className="text-neutral-500">Year:</span>
                <p className="font-medium">{details.projectYear}</p>
              </div>
            )}
            {details.projectSize && (
              <div>
                <span className="text-neutral-500">Size:</span>
                <p className="font-medium">{details.projectSize}</p>
              </div>
            )}
          </div>
        )}

        {excerpt && (
          <p className="text-neutral-600 mb-6 line-clamp-3">{excerpt}</p>
        )}

        <Link href={project.uri} className="btn-primary button-lift">
          {readMoreText}
        </Link>
      </div>
    </div>
  );
}
