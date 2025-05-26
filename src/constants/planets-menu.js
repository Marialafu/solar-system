import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const PLANETS_MENU = [
  {
    id: v4(),
    name: 'mercury',
    link: '/mercury',
    color: COLORS.mercury,
    size: 30
  },
  {
    id: v4(),
    name: 'venus',
    link: '/venus',
    color: COLORS.venus,
    size: 40
  },
  {
    id: v4(),
    name: 'earth',
    link: '/earth',
    color: COLORS.earth,
    size: 50
  },
  {
    id: v4(),
    name: 'mars',
    link: '/mars',
    color: COLORS.mars,
    size: 35
  },
  {
    id: v4(),
    name: 'jupiter',
    link: '/jupiter',
    color: COLORS.jupiter,
    size: 70
  },
  {
    id: v4(),
    name: 'saturn',
    link: '/saturn',
    color: COLORS.saturn,
    size: 70
  },
  {
    id: v4(),
    name: 'uranus',
    link: '/uranus',
    color: COLORS.uranus,
    size: 55
  },
  {
    id: v4(),
    name: 'neptune',
    link: '/neptune',
    color: COLORS.neptune,
    size: 60
  }
];
