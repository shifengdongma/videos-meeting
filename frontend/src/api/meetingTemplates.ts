import api from './client'
import type { MeetingItem } from './meetings'
import type { MeetingTemplateItem, MeetingTemplatePayload, UseMeetingTemplatePayload } from '../types/meetingTemplate'

export const fetchMeetingTemplates = async () => {
  const { data } = await api.get<MeetingTemplateItem[]>('/meeting-templates')
  return data
}

export const fetchMeetingTemplate = async (templateId: number) => {
  const { data } = await api.get<MeetingTemplateItem>(`/meeting-templates/${templateId}`)
  return data
}

export const createMeetingTemplate = async (payload: MeetingTemplatePayload) => {
  const { data } = await api.post<MeetingTemplateItem>('/meeting-templates', payload)
  return data
}

export const updateMeetingTemplate = async (templateId: number, payload: MeetingTemplatePayload) => {
  const { data } = await api.put<MeetingTemplateItem>(`/meeting-templates/${templateId}`, payload)
  return data
}

export const deleteMeetingTemplate = async (templateId: number) => {
  await api.delete(`/meeting-templates/${templateId}`)
}

export const useMeetingTemplate = async (templateId: number, payload: UseMeetingTemplatePayload) => {
  const { data } = await api.post<MeetingItem>(`/meeting-templates/${templateId}/use`, payload)
  return data
}
