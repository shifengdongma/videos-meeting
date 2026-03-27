import api from './client';
export const fetchMeetingTemplates = async () => {
    const { data } = await api.get('/meeting-templates');
    return data;
};
export const fetchMeetingTemplate = async (templateId) => {
    const { data } = await api.get(`/meeting-templates/${templateId}`);
    return data;
};
export const createMeetingTemplate = async (payload) => {
    const { data } = await api.post('/meeting-templates', payload);
    return data;
};
export const updateMeetingTemplate = async (templateId, payload) => {
    const { data } = await api.put(`/meeting-templates/${templateId}`, payload);
    return data;
};
export const deleteMeetingTemplate = async (templateId) => {
    await api.delete(`/meeting-templates/${templateId}`);
};
export const useMeetingTemplate = async (templateId, payload) => {
    const { data } = await api.post(`/meeting-templates/${templateId}/use`, payload);
    return data;
};
