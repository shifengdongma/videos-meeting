import api from './client';
export const login = async (username, password) => {
    const { data } = await api.post('/auth/login', { username, password });
    return data;
};
export const register = async (username, password) => {
    const { data } = await api.post('/auth/register', { username, password });
    return data;
};
export const fetchMe = async () => {
    const { data } = await api.get('/auth/me');
    return data;
};
