import api from './client'

export interface MeetingItem {
  id: number
  title: string
  start_time: string
  end_time: string
  host_id: number
  status: 'scheduled' | 'ongoing' | 'ended'
  record_url?: string | null
}

export const fetchMeetings = async () => {
  const { data } = await api.get<MeetingItem[]>('/meetings')
  return data
}

export const createMeeting = async (payload: Omit<MeetingItem, 'id' | 'host_id' | 'status'>) => {
  const { data } = await api.post<MeetingItem>('/meetings', payload)
  return data
}
