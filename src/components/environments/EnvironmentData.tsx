import { Environment } from '@/types';

export const environments: Environment[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    description: 'Explore the iconic ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, India.',
    imageUrl: 'https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&w=1600',
    panoramaUrl: 'https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'historical',
    infoPoints: [
      {
        id: 'taj-history',
        title: 'History of the Taj Mahal',
        position: { x: 10, y: 0, z: -5 },
        query: 'Taj Mahal history and significance'
      },
      {
        id: 'taj-architecture',
        title: 'Architectural Features',
        position: { x: -10, y: 2, z: -2 },
        query: 'Taj Mahal architecture and design features'
      },
      {
        id: 'taj-construction',
        title: 'Construction and Materials',
        position: { x: 5, y: -3, z: -8 },
        query: 'Taj Mahal construction materials and techniques'
      }
    ]
  },
  {
    id: 'chemistry-lab',
    name: 'Chemistry Laboratory',
    description: 'Discover a state-of-the-art chemistry lab with interactive experiments and chemical demonstrations.',
    imageUrl: 'lovable-uploads/2491b14b-bb53-4970-8e4f-4b1d53a182dd.png',
    panoramaUrl: 'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'scientific',
    infoPoints: [
      {
        id: 'lab-safety',
        title: 'Laboratory Safety',
        position: { x: 8, y: 0, z: -7 },
        query: 'chemistry laboratory safety procedures and equipment'
      },
      {
        id: 'periodic-table',
        title: 'The Periodic Table',
        position: { x: -8, y: 1, z: -6 },
        query: 'periodic table of elements organization and patterns'
      },
      {
        id: 'chemical-reactions',
        title: 'Chemical Reactions',
        position: { x: 4, y: -2, z: -9 },
        query: 'types of chemical reactions and examples'
      }
    ]
  },
  {
    id: 'colosseum',
    name: 'Roman Colosseum',
    description: 'Step back in time and explore the ancient Roman Colosseum, one of the most iconic structures from antiquity.',
    imageUrl: 'lovable-uploads/27de464a-0945-4b24-b5fb-098f7a60a365.png',
    panoramaUrl: 'https://images.pexels.com/photos/3105004/pexels-photo-3105004.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'historical',
    infoPoints: [
      {
        id: 'colosseum-history',
        title: 'History of the Colosseum',
        position: { x: 12, y: 0, z: -3 },
        query: 'Roman Colosseum history and purpose'
      },
      {
        id: 'gladiatorial-games',
        title: 'Gladiatorial Games',
        position: { x: -7, y: 1, z: -8 },
        query: 'Roman gladiatorial games and spectacles at the Colosseum'
      },
      {
        id: 'colosseum-architecture',
        title: 'Architectural Features',
        position: { x: 3, y: -1, z: -12 },
        query: 'Colosseum architecture and engineering innovations'
      }
    ]
  },
  {
    id: 'physics-wave',
    name: 'Wave Motion Laboratory',
    description: 'Explore wave phenomena through interactive experiments and visualizations in this virtual physics lab.',
    imageUrl: 'lovable-uploads/db0a2dae-7a40-4833-91a9-a58533fbb942.png',
    panoramaUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'scientific',
    infoPoints: [
      {
        id: 'standing-waves',
        title: 'Standing Waves',
        position: { x: 8, y: 2, z: -5 },
        query: 'standing waves physics explanation and examples'
      },
      {
        id: 'wave-interference',
        title: 'Wave Interference',
        position: { x: -6, y: 0, z: -8 },
        query: 'wave interference constructive and destructive'
      },
      {
        id: 'wave-properties',
        title: 'Wave Properties',
        position: { x: 3, y: -2, z: -6 },
        query: 'wave properties amplitude frequency wavelength'
      }
    ]
  },
  {
    id: 'parthenon',
    name: 'The Parthenon',
    description: 'Visit the iconic symbol of Ancient Greece and classical architecture on the Athenian Acropolis.',
    imageUrl: 'lovable-uploads/56126c0e-a3f6-4574-96aa-5f6e88ed7b43.png',
    panoramaUrl: 'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'historical',
    infoPoints: [
      {
        id: 'parthenon-architecture',
        title: 'Classical Architecture',
        position: { x: 10, y: 1, z: -4 },
        query: 'Parthenon architecture and golden ratio'
      },
      {
        id: 'parthenon-history',
        title: 'Historical Significance',
        position: { x: -8, y: 0, z: -6 },
        query: 'Parthenon history and cultural importance'
      },
      {
        id: 'athena-temple',
        title: 'Temple of Athena',
        position: { x: 5, y: -1, z: -8 },
        query: 'Athena goddess and Parthenon temple purpose'
      }
    ]
  },
  {
    id: 'quantum-lab',
    name: 'Quantum Physics Lab',
    description: 'Discover the fascinating world of quantum mechanics through interactive demonstrations and experiments.',
    imageUrl: 'lovable-uploads/8fa16b63-a086-4000-924d-5ca801a7033c.png',
    panoramaUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'scientific',
    infoPoints: [
      {
        id: 'quantum-entanglement',
        title: 'Quantum Entanglement',
        position: { x: 7, y: 1, z: -6 },
        query: 'quantum entanglement explanation and applications'
      },
      {
        id: 'wave-particle',
        title: 'Wave-Particle Duality',
        position: { x: -5, y: 2, z: -7 },
        query: 'wave particle duality double slit experiment'
      },
      {
        id: 'quantum-tunneling',
        title: 'Quantum Tunneling',
        position: { x: 4, y: -1, z: -5 },
        query: 'quantum tunneling phenomenon explanation'
      }
    ]
  },
  {
    id: 'petra',
    name: 'Ancient City of Petra',
    description: 'Explore the rose-red city of Petra, an archaeological wonder carved into rock faces in southern Jordan.',
    imageUrl: 'lovable-uploads/9b771bde-0de1-4151-b602-ce84e9ffd2d7.png',
    panoramaUrl: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'historical',
    infoPoints: [
      {
        id: 'treasury',
        title: 'The Treasury',
        position: { x: 9, y: 0, z: -5 },
        query: 'Petra Treasury Al-Khazneh history and architecture'
      },
      {
        id: 'nabataean',
        title: 'Nabataean Civilization',
        position: { x: -7, y: 1, z: -6 },
        query: 'Nabataean civilization and culture Petra'
      },
      {
        id: 'water-system',
        title: 'Ancient Water System',
        position: { x: 4, y: -2, z: -7 },
        query: 'Petra ancient water conduit system engineering'
      }
    ]
  }
];
