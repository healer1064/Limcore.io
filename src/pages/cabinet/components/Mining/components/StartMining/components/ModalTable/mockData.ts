export interface TableItem {
  id: number
  date: string
  sum: number
  beforeStart: {
    passed: number
    all: number
  }
}

export const data: TableItem[] = [
  {
    id: 1,
    date: '21.05.21',
    sum: 120,
    beforeStart: {
      passed: 4,
      all: 60,
    },
  },
  {
    id: 2,
    date: '14.06.21',
    sum: 170,
    beforeStart: {
      passed: 23,
      all: 60,
    },
  },
  {
    id: 3,
    date: '21.07.21',
    sum: 100,
    beforeStart: {
      passed: 35,
      all: 60,
    },
  },
  {
    id: 4,
    date: '14.08.21',
    sum: 300,
    beforeStart: {
      passed: 18,
      all: 60,
    },
  },
]
