// Verified against the supplied manuscript; the manuscript itself is not a public website asset.
export const ifacWc2026 = {
  path: '/research/ifac-wc-2026/',
  paper: 'https://hal.science/hal-05673211/',
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
  comparisonVideos: [
    {
      id: 'trust-no-rollback',
      title: 'Without rollback',
      source: '/media/video/ifac-wc-2026/trust-no-rollback.mp4',
      width: 1920,
      height: 1440,
      description: 'A silent platform recording without rollback. Updates accepted before the delayed trust decision remain in the observer state and provide the baseline for comparison.',
    },
    {
      id: 'trust-rollback',
      title: 'With finite-window rollback',
      source: '/media/video/ifac-wc-2026/trust-rollback.mp4',
      width: 1920,
      height: 1440,
      description: 'A silent platform recording with finite-window rollback, which returns to a stored checkpoint and replays recent observer updates after the unreliable source is identified.',
    },
  ],
  highlights: [
    'Behavioral trust evaluation',
    'Trust-adaptive observer weights',
    'Finite-window rollback',
    'QCar/LIMO validation',
  ],
  resultHighlights: [
    {
      value: '100%',
      title: 'Detection rate',
      description: 'All five tested attacks were detected in the local, global, and simultaneous-corruption configurations.',
    },
    {
      value: '80.64–98.44%',
      title: 'Source-zero rate',
      description: 'Share of attack-window samples in which the corrupted source received zero fusion weight, depending on corruption mode.',
    },
    {
      value: '75.2%',
      title: 'Position-error reduction',
      description: 'Reduction at the correction instant with rollback plus relative-pose anchoring in the reported platform test.',
    },
  ],
  aggregateResults: [
    { mode: 'Local', meanRmse: '0.643', standardDeviation: '0.586', maximumRmse: '2.058', trustDrop: '0.319', sourceZero: '80.64%', detectionTime: '10.088 s' },
    { mode: 'Global', meanRmse: '0.393', standardDeviation: '0.069', maximumRmse: '0.546', trustDrop: '0.460', sourceZero: '92.90%', detectionTime: '10.028 s' },
    { mode: 'Both', meanRmse: '0.567', standardDeviation: '0.796', maximumRmse: '3.856', trustDrop: '0.544', sourceZero: '98.44%', detectionTime: '10.030 s' },
  ],
  trajectoryResults: [
    { channel: 'Local-channel Case 2', noRollback: '0.983 m', rollback: '0.247 m', rollbackAnchoring: '0.042 m' },
    { channel: 'Global-channel Case 2', noRollback: '0.195 m', rollback: '0.141 m', rollbackAnchoring: '0.023 m' },
  ],
  controlResults: [
    { host: 'V1', detectionDelay: '0.093 s', caccGate: '0.227', attackedSourceWeight: '0.041', minimumSpacing: '0.681 m', gapRmse: '0.345 m' },
    { host: 'V2', detectionDelay: '0.090 s', caccGate: '0.894', attackedSourceWeight: '0.048', minimumSpacing: '0.637 m', gapRmse: '0.171 m' },
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
