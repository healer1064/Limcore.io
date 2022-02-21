import tableGreenIcon from '@icons/tableGreenIcon.svg'
import tableGreenTwoIcon from '@icons/tableGreenTwoIcon.svg'
import tableFireIcon from '@icons/tableFireIcon.svg'

export interface Coin {
  id: number
  icon: string
  name: string
  suffix: string
  cost: number
  balance: number
  sum: number
  cryptoPurse: boolean
  union: boolean
  earning: {
    percentage: number
    actually: number
  }
}

export const coins: Coin[] = [
  {
    id: 1,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 2,
    icon: tableGreenTwoIcon,
    name: 'Flax',
    suffix: 'XFX',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: false,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 3,
    icon: tableFireIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: false,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 4,
    icon: tableGreenTwoIcon,
    name: 'Flax',
    suffix: 'XFX',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: false,
    union: false,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 6,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 7,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 8,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 9,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
  {
    id: 10,
    icon: tableGreenIcon,
    name: 'Chia',
    suffix: 'XCH',
    cost: 2,
    balance: 3.78456983,
    sum: 384,
    cryptoPurse: true,
    union: true,
    earning: {
      percentage: 0.002,
      actually: 0.02,
    },
  },
]
