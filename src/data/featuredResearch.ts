import { cep2026 } from './cep2026';
import { ifacWc2026 } from './ifacWc2026';

interface FeaturedResearchImage {
  source: string;
  alt: string;
  width: number;
  height: number;
}

interface FeaturedResearchVideo {
  source: string;
  label: string;
  width: number;
  height: number;
}

export interface FeaturedResearchProject {
  id: string;
  venue: string;
  year: number;
  title: string;
  description: string;
  actionLabel: string;
  paperPath?: string;
  highlights: string[];
  path?: string;
  image?: FeaturedResearchImage;
  video?: FeaturedResearchVideo;
}

export const featuredResearchProjects: FeaturedResearchProject[] = [
  {
    id: 'cep-2026',
    venue: 'CEP',
    year: cep2026.year,
    title: cep2026.shortTitle,
    description: 'Distributed estimation and control for vehicle platoons, evaluated on smooth and wavy roads in QLabs.',
    actionLabel: 'Details',
    paperPath: cep2026.manuscript,
    highlights: cep2026.highlights,
    path: cep2026.path,
    image: cep2026.featuredImage,
  },
  {
    id: 'ifac-wc-2026',
    venue: ifacWc2026.venueShort,
    year: ifacWc2026.year,
    title: ifacWc2026.title,
    description: ifacWc2026.cardDescription,
    actionLabel: 'Details',
    paperPath: ifacWc2026.paper,
    highlights: ifacWc2026.highlights,
    path: ifacWc2026.path,
    video: {
      source: ifacWc2026.video.source,
      label: ifacWc2026.video.title,
      width: ifacWc2026.video.width,
      height: ifacWc2026.video.height,
    },
  },
];
