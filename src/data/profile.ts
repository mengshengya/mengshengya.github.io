import { cep2026 } from './cep2026';

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis?: string;
  supervisors?: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  details: string;
  year: number;
  type: 'Journal' | 'Conference';
  projectPath?: string;
  manuscriptPath?: string;
}

export interface Manuscript {
  title: string;
  authors: string;
  venue: string;
  status: 'Prepared' | 'Submitted';
}

export interface AcademicVisit {
  title: string;
  institution: string;
  location: string;
  period: string;
  host: string;
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  period: string;
}

export interface Profile {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  email: string;
  linkedin: string;
  photo: string;
  summary: string[];
  researchInterests: ResearchInterest[];
  education: Education[];
  publications: Publication[];
  manuscripts: Manuscript[];
  service: { journals: string[]; conferences: string[] };
  visits: AcademicVisit[];
  awards: Award[];
}

// Personal facts come from the supplied CV. See docs/content-source.md.
export const profile: Profile = {
  name: 'Shengya Meng',
  role: 'PhD Candidate in Automatic Control',
  affiliation: 'University of Lorraine',
  location: 'France',
  email: 'shengya.meng@univ-lorraine.fr',
  linkedin: 'https://www.linkedin.com/in/shengya-meng-1b299a294',
  photo: '/images/profile/shengya-meng.jpg',
  summary: [
    'I am a PhD candidate in Automatic Control at the University of Lorraine, France, supervised by Ali Zemouche and Marouane Alma. My doctoral research focuses on advanced estimation algorithms for autonomous vehicles.',
    'My research interests include distributed observers, nonlinear systems, and vehicle applications. I work on state estimation and observer design for connected vehicles and vehicle platoons, including communication delays, sensor faults, and string stability.',
    'I received my master’s degree in Control Science and Engineering from Northeastern University in 2023 and my bachelor’s degree in Automation from Guizhou University in 2020.',
  ],
  researchInterests: [
    {
      title: 'Distributed observers',
      description:
        'Distributed state estimation and high-gain/LMI observer design for interconnected nonlinear systems.',
    },
    {
      title: 'Connected & autonomous vehicles',
      description:
        'Estimation and observer-controller design for vehicle platoons, with attention to communication delays, sensor faults, and string stability.',
    },
    {
      title: 'Nonlinear systems',
      description:
        'Observer design for nonlinear and generalized systems, including battery state-of-charge estimation.',
    },
  ],
  education: [
    {
      degree: 'PhD in Automatic Control (in progress)',
      institution: 'University of Lorraine',
      location: 'France',
      period: 'Sep 2023 – Present',
      thesis: 'Advanced Estimation Algorithm in the Application to Autonomous Vehicles',
      supervisors: ['Ali Zemouche', 'Marouane Alma'],
    },
    {
      degree: 'Master in Control Science and Engineering',
      institution: 'Northeastern University',
      location: 'Shenyang, China',
      period: '2020 – 2023',
      thesis: 'H∞ Observer Design for State of Charge in Battery Based on Generalized System',
      supervisors: ['Fanwei Meng'],
    },
    {
      degree: 'Bachelor in Automation',
      institution: 'Guizhou University',
      location: 'Guiyang, China',
      period: '2016 – 2020',
    },
  ],
  publications: [
    {
      title: cep2026.title,
      authors: 'S. Meng, A. Zemouche, M. Alma',
      venue: cep2026.venue,
      details: `Vol. ${cep2026.volume}, article ${cep2026.article}`,
      year: cep2026.year,
      type: 'Journal',
      projectPath: cep2026.path,
      manuscriptPath: cep2026.manuscript,
    },
    {
      title: 'Distributed Unknown Input Observer for Vehicle Platoons Under Sensor Faults',
      authors: 'S. Meng, Q. H. Nguyen, M. Alma, A. Zemouche, M. Haddad',
      venue: '23rd IFAC World Congress (IFAC WC 2026)',
      details: 'Busan · August 2026',
      year: 2026,
      type: 'Conference',
    },
    {
      title: 'Distributed High-Gain/LMI Observer for Triangular Nonlinear Systems with Application to Vehicles',
      authors: 'S. Meng, A. Zemouche, F. Meng',
      venue: '13th IFAC Symposium on Nonlinear Control Systems (NOLCOS 2025)',
      details: 'Iceland · July 2025',
      year: 2025,
      type: 'Conference',
    },
    {
      title: 'Observer Design Method for Nonlinear Generalized Systems with Nonlinear Algebraic Constraints with Applications',
      authors: 'S. Meng, F. Meng, F. Zhang, Q. Li, Y. Zhang, A. Zemouche',
      venue: 'Automatica',
      details: 'Vol. 162, article 111512',
      year: 2024,
      type: 'Journal',
    },
    {
      title: 'Nonlinear Observer Design for Vehicle Lateral Load Transfer Ratio Estimation',
      authors: 'S. Meng, F. Meng, F. Zhang, M. Alma, M. Haddad, A. Zemouche',
      venue: 'American Control Conference (ACC 2024)',
      details: 'Canada · July 2024',
      year: 2024,
      type: 'Conference',
    },
    {
      title: 'An H∞ Observer for State of Charge Estimation of Lithium-Ion Batteries Based on Nonlinear Descriptor System',
      authors: 'S. Meng, F. Meng, H. Chi, H. Chen',
      venue: 'Journal of the Franklin Institute',
      details: 'Vol. 360, no. 16, pp. 11397–11413 · November 2023',
      year: 2023,
      type: 'Journal',
    },
  ],
  manuscripts: [
    {
      title: 'Observer Design for Nonlinear Systems via I-EIOSS with Application to Target-Vehicle Estimation',
      authors: 'S. Meng, M. Alma, A. Zemouche',
      venue: 'IEEE Transactions on Automatic Control',
      status: 'Prepared',
    },
    {
      title: 'Distributed High-Gain/LMI State Estimation for Vehicle Platoons',
      authors: 'S. Meng, F. Meng, M. Alma, M. Haddad, A. Zemouche',
      venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems',
      status: 'Submitted',
    },
    {
      title: 'Trust-Aware Resilient Distributed Observer Design for Connected Vehicle Platoons',
      authors: 'Q. H. Nguyen, S. Meng, H. Rafaralahy, M. Haddad, A. Zemouche',
      venue: 'IEEE Transactions on Intelligent Transportation Systems',
      status: 'Submitted',
    },
    {
      title: 'State Estimation for Connected and Autonomous Vehicles under Unknown V2V Communication Delays',
      authors: 'S. Meng, Q. H. Nguyen, M. Haddad, M. Alma, A. Zemouche',
      venue: 'IEEE Transactions on Intelligent Transportation Systems',
      status: 'Submitted',
    },
  ],
  service: {
    journals: [
      'IEEE Transactions on Automatic Control',
      'Automatica',
      'Journal of the Franklin Institute',
      'IEEE Control Systems Letters (L-CSS)',
      'IEEE Systems Journal',
      'Systems & Control Letters',
      'IEEE Transactions on Intelligent Vehicles',
    ],
    conferences: [
      'Mediterranean Conference on Control and Automation (MED 2026)',
      'IEEE Conference on Decision and Control (CDC 2026)',
      'IFAC World Congress 2026',
      'American Control Conference (ACC 2025, ACC 2024)',
    ],
  },
  visits: [
    {
      title: 'Invited talk',
      institution: 'University of Groningen · Faculty of Science and Engineering',
      location: 'Groningen, The Netherlands',
      period: 'Apr 2–5, 2024',
      host: 'Dr. Saeed Ahmed',
      description: 'Observer Design Method for Nonlinear Generalized Systems with Nonlinear Algebraic Constraints with Applications',
    },
  ],
  awards: [
    {
      title: 'China Scholarship Council (CSC) Scholarship',
      organization: 'China Scholarship Council',
      period: '2023',
    },
    {
      title: 'First Prize Scholarship',
      organization: 'Northeastern University',
      period: '2020, 2021, 2022',
    },
    {
      title: 'Principal’s Scholarship',
      organization: 'Northeastern University',
      period: '2020',
    },
    {
      title: 'Outstanding Graduate',
      organization: 'Guizhou Province & Guizhou University',
      period: '2020',
    },
    {
      title: 'First Prize',
      organization: 'National College Students Mathematics Competition',
      period: '2017, 2018',
    },
  ],
};
