import api from './client'

export interface LiveItem {
  id: number
  title: string
  host_id: number
  start_time: string
  room_code: string
  record_url?: string | null
}

export const fetchLiveStreams = async () => {
  const { data } = await api.get<LiveItem[]>('/live-streams')
  return data
}

export const createLiveStream = async (payload: { title: string; record_url?: string | null }) => {
  const { data } = await api.post<LiveItem>('/live-streams', payload)
  return data
}
