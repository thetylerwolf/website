import React from 'react'
import Vida from './Vida'
import Novus from './Novus'
import Nvd3 from './Nvd3'
import Swarm2048 from './Swarm2048'
import Tvrn from './Tvrn'
import VoxelDreams from './VoxelDreams'
import ETrade from './ETrade'

var portfolioPages = {
  vida: {
    page: <Vida/>,
    name: 'Vida / SolidX',
    previous: 'novus',
    next: 'voxeldreams',
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
    previous: 'voxeldreams',
    next: 'etrade'
  },
  etrade: {
    page: <ETrade/>,
    name: 'E*Trade',
    previous: 'tvrn',
    next: 'swarm2048'
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
    previous: 'swarm2048',
    next: 'novus',
    lightText: true
  },
  novus: {
    page: <Novus/>,
    name: 'Novus',
    previous: 'nvd3',
    next: 'vida',
    lightText: true
  }
}

export default portfolioPages
