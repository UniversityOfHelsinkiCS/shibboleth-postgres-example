export interface User {
  id: string
  username: string
  language?: string
  email?: string
  iamGroups: string[]
  isAdmin: boolean
}
