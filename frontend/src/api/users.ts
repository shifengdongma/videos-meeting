import api from './client'
import type { UserProfile, Role } from '../types/auth'

export const fetchUsers = async () => {
  const { data } = await api.get<UserProfile[]>('/users')
  return data
}

export const updateUserRole = async (userId: number, role: Role) => {
  const { data } = await api.put<UserProfile>(`/users/${userId}/role`, { role })
  return data
}
