import api from './client'

export interface VoteOption {
  id: number
  content: string
}

export interface VoteItem {
  id: number
  meeting_id: number
  topic: string
  options: VoteOption[]
}

export const fetchVotes = async (meetingId: number) => {
  const { data } = await api.get<VoteItem[]>(`/votes/meeting/${meetingId}`)
  return data
}

export const createVote = async (payload: { meeting_id: number; topic: string; options: Array<{ content: string }> }) => {
  const { data } = await api.post<VoteItem>('/votes', payload)
  return data
}

export const submitVote = async (voteId: number, option_id: number) => {
  const { data } = await api.post(`/votes/${voteId}/submit`, { option_id })
  return data
}
