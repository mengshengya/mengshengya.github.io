// Verified against the supplied manuscript; the manuscript itself is not a public website asset.
export const ifacWc2026 = {
  path: '/research/ifac-wc-2026/',
  shortTitle: 'Trust-aware resilient vehicle platoons',
  title: 'Resilient Trust-Aware Distributed Observer Design for Connected Vehicle Platoons',
  authors: ['Quang Huy Nguyen', 'Shengya Meng', 'Madjid Haddad', 'Hugues Rafaralahy', 'Ali Zemouche'],
  affiliation: 'Université de Lorraine, CNRS, CRAN, France · SEGULA Engineering, France',
  venue: '23rd IFAC World Congress',
  venueShort: 'IFAC WC',
  location: 'Busan, South Korea',
  date: 'August 2026',
  year: 2026,
  summary: 'A trust-aware distributed observer for connected vehicle platoons that checks incoming V2V data, adapts observer weights to source reliability, preserves a local-observer anchor, and can replay a finite window after delayed trust decisions.',
  cardDescription: 'Trust-adaptive distributed state estimation with local anchoring and finite-window rollback for unreliable V2V information.',
  cover: {
    source: '/images/research/ifac-wc-2026/experimental-scheme.png',
    alt: 'Experimental scheme linking the QCar and LIMO platform, host vehicle stack, V2V exchange, trust-based observer, and validation outputs.',
    width: 3400,
    height: 1400,
  },
  video: {
    id: 'trust-rollback',
    title: 'Trust rollback demonstration',
    source: '/media/video/ifac-wc-2026/trust-rollback.mp4',
    width: 1920,
    height: 1440,
    description: 'A silent platform recording illustrating how finite-window rollback revises recent distributed-observer updates after a delayed trust decision.',
  },
  highlights: [
    'Behavioral trust evaluation',
    'Trust-adaptive observer weights',
    'Finite-window rollback',
    'QCar/LIMO validation',
  ],
  findings: [
    {
      title: 'Five-vehicle attack campaign',
      description: 'Position bias, intermittent position faults, speed bias, simultaneous position-speed corruption, and packet drops were evaluated across local and global communication channels.',
    },
    {
      title: 'Rollback under real packet timing',
      description: 'On the QCar/LIMO platform, rollback reduced the error left by packets accepted before a delayed trust decision; optional relative-pose anchoring improved recovery further in the reported tests.',
    },
    {
      title: 'Trust-gated platoon control check',
      description: 'The tested ACC/CACC implementation reduced reliance on the attacked source and maintained positive path-projected spacing for the reported attack schedule.',
    },
  ],
};

export const ifacWc2026Citation = `@inproceedings{nguyen2026resilient,
  title = {${ifacWc2026.title}},
  author = {Nguyen, Quang Huy and Meng, Shengya and Haddad, Madjid and Rafaralahy, Hugues and Zemouche, Ali},
  booktitle = {${ifacWc2026.venue}},
  address = {${ifacWc2026.location}},
  month = {August},
  year = {${ifacWc2026.year}},
  note = {HAL: hal-05673211}
}`;
