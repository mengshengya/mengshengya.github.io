// Verified against the supplied manuscript and recordings; see docs/cep-2026-materials.md.
export const cep2026 = {
  path: '/research/cep-2026/',
  shortTitle: 'String-stable vehicle platoons',
  title: 'Distributed Observer-Controller Co-Design for String Stability in Vehicle Platoons',
  authors: ['Shengya Meng', 'Ali Zemouche', 'Marouane Alma'],
  affiliation: 'Université de Lorraine, CNRS, CRAN, France',
  venue: 'Control Engineering Practice',
  year: 2026,
  volume: '173',
  article: '107008',
  summary: 'A joint design of distributed observers and controllers for vehicle platoons. Local measurements and neighbor communication support platoon-level estimation, while a weighted H∞ objective combines estimation robustness and string stability. Evaluated in QLabs with four QCar2 digital twins.',
  cover: '/images/research/cep-2026/qcar-application.webp',
  coverAlt: 'String-stable vehicle platoon control architecture and QCar application overview.',
  featuredImage: {
    source: '/images/research/cep-2026/qcar-application.webp',
    alt: 'QCar2 application overview showing communication links among four simulated vehicles and an inset of a physical QCar2.',
    width: 1600,
    height: 839,
  },
  manuscript: '/files/papers/cep-2026/author-manuscript.pdf',
  videos: [
    {
      id: 'smooth-road',
      title: 'Smooth-road platooning',
      source: '/media/video/cep-2026/smooth-road.mp4',
      poster: '/media/posters/cep-2026/smooth-road.jpg',
      description: 'Four QCar2 digital twins travel along a smooth road. The recording shows the fleet controller, the platoon, and plots of vehicle states and distributed observer estimates during speed changes.',
    },
    {
      id: 'wave-road',
      title: 'Traversing a wavy road',
      source: '/media/video/cep-2026/wave-road.mp4',
      poster: '/media/posters/cep-2026/wave-road.jpg',
      description: 'The simulated platoon crosses a raised, wavy road section. Alongside the vehicle view, state and estimation plots show the response to road-induced disturbances as the vehicles enter and leave the section.',
    },
  ],
  figures: [
    {
      source: '/images/research/cep-2026/start-stop-estimation.png',
      title: 'Observer estimation errors',
      caption: 'Manuscript Figure 8. Position-related, velocity and acceleration estimation errors for distributed observer 1 during leader start–stop maneuvers. Shaded intervals mark the start–stop phases.',
      width: 1066,
      height: 1600,
    },
    {
      source: '/images/research/cep-2026/start-stop-states.png',
      title: 'Vehicle trajectories',
      caption: 'Manuscript Figure 9. Position, velocity and acceleration of the leader and three followers under two start–stop profiles. The acceleration responses show attenuation along the platoon in these tests.',
      width: 1279,
      height: 1600,
    },
  ],
};

export const cep2026Citation = `@article{meng2026platoons,
  title = {${cep2026.title}},
  author = {Meng, Shengya and Zemouche, Ali and Alma, Marouane},
  journal = {${cep2026.venue}},
  volume = {${cep2026.volume}},
  pages = {${cep2026.article}},
  year = {${cep2026.year}}
}`;
