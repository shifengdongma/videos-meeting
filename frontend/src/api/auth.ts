import api from './client'
import type { AuthPayload } from '../types/auth'

export const login = async (username: string, password: string) => {
  const { data } = await api.post<AuthPayload>('/auth/login', { username, password })
  return data
}

export const register = async (username: string, password: string) => {
  const { data } = await api.post<AuthPayload>('/auth/register', { username, password })
  return data
}

export const fetchMe = async () => {
  const { data } = await api.get<AuthPayload['user']>('/auth/me')
  return data
}
