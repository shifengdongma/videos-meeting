import api from './client';
export const fetchLiveStreams = async () => {
    const { data } = await api.get('/live-streams');
    return data;
};
export const createLiveStream = async (payload) => {
    const { data } = await api.post('/live-streams', payload);
    return data;
};
