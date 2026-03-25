import api from './client';
export const fetchMeetings = async () => {
    const { data } = await api.get('/meetings');
    return data;
};
export const createMeeting = async (payload) => {
    const { data } = await api.post('/meetings', payload);
    return data;
};
