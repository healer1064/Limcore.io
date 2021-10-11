// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace apiTypes {
  export type DateTime = string

  export type Agreement = {
    name: string
    typeBusiness: string
    salesChannel: string
    availableCredit: string
    accountNumber: number
    region: string
  }

  export interface UserData {
    id: number
    name: string
    roles: UserRole[]
  }

  export type UserRole = {
    id: number
    name: string
  }

  export type RecommendedOrderItem = {
    id: number
    quantity: number
    code: string
    packages: string
    discount: string
    count: number
    shortName: string
    group: string
    price: number
    name: string
    tariff: string
    product: any
  }

  export interface Pagination {
    number: number
    size: number
    totalElements: number | null
    totalPages: number | null
  }

  export type DetailOrderAgreementRegions = {
    id: number | null
    name: string | null
  }

  export type DetailOrderAgreement = {
    id: number | null
    name: string | null
    regions: DetailOrderAgreementRegions[]
    territory: {
      id: number | null
      name: string | null
    }
    typeBusiness: string | null
    salesChannel: string | null
    status: string | null
    direction: string | null
    partner: {
      id: number | null
      name: string | null
      typePartner: string | null
      holding: {
        id: number | null
        name: string | null
      }
      ppoDealerId: string | null
      inn: string | null
      ogrn: string | null
      phone: string | null
    }
    kob: number | null
    ddate: string | null
  }

  export enum groupABC {
    A = 'A',
    B = 'B',
    C = 'C',
  }
}
