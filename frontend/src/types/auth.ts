export type Role = 'admin' | 'host' | 'user'

export interface UserProfile {
  id: number
  username: string
  role: Role
  created_at: string
}

export interface AuthPayload {
  access_token: string
  token_type: string
  user: UserProfile
}
