import React from 'react'
import Vida from './Vida'
import Novus from './Novus'
import Nvd3 from './Nvd3'
import Swarm2048 from './Swarm2048'
import Tvrn from './Tvrn'
import VoxelDreams from './VoxelDreams'
import ETrade from './ETrade'
import Meditation from './Meditation'

var portfolioPages = {
  meditation: {
    page: <Meditation/>,
    name: 'Natural Meditation',
    previous: 'novus',
    next: 'vida'
  },
  vida: {
    page: <Vida/>,
    name: 'Vida / SolidX',
    previous: 'meditation',
    next: 'tvrn',
    lightText: true
  },
  voxeldreams: {
    page: <VoxelDreams/>,
    name: 'Voxel Dreams',
    previous: 'vida',
    next: 'tvrn',
    lightText: true
  },
  tvrn: {
    page: <Tvrn/>,
    name: 'TVRN',
    previous: 'vida',
    next: 'etrade',
    lightText: true
  },
  etrade: {
    page: <ETrade/>,
    name: 'E*Trade',
    previous: 'tvrn',
    next: 'nvd3'
  },
  swarm2048: {
    page: <Swarm2048/>,
    name: 'Swarm 2048',
    previous: 'etrade',
    next: 'nvd3',
    lightText: true
  },
  nvd3: {
    page: <Nvd3/>,
    name: 'nvd3',
    previous: 'etrade',
    next: 'novus',
    lightText: true
  },
  novus: {
    page: <Novus/>,
    name: 'Novus',
    previous: 'nvd3',
    next: 'meditation',
    lightText: true
  }
}

export default portfolioPages
