export interface TUsers {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: TUser[]
}

export type TUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}
