import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { fetchMe, login, register } from '../api/auth'
import type { Role, UserProfile } from '../types/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('access_token') || '')
  const user = ref<UserProfile | null>(null)

  const isLoggedIn = computed(() => Boolean(token.value))
  const role = computed<Role | ''>(() => user.value?.role || '')

  const persist = (nextToken: string, nextUser: UserProfile) => {
    token.value = nextToken
    user.value = nextUser
    localStorage.setItem('access_token', nextToken)
    localStorage.setItem('user_profile', JSON.stringify(nextUser))
  }

  const restore = async () => {
    const cached = localStorage.getItem('user_profile')
    if (cached && !user.value) {
      user.value = JSON.parse(cached)
    }
    if (token.value && !user.value) {
      user.value = await fetchMe()
    }
  }

  const loginAction = async (username: string, password: string) => {
    const data = await login(username, password)
    persist(data.access_token, data.user)
  }

  const registerAction = async (username: string, password: string) => {
    const data = await register(username, password)
    persist(data.access_token, data.user)
  }

  const logout = () => {
    token.value = ''
    user.value = null
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_profile')
  }

  return { token, user, role, isLoggedIn, restore, loginAction, registerAction, logout }
})
