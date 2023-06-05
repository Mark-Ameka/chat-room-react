import { useQuery } from '@tanstack/react-query';
import api from '../utils/axiosInstance'

const queryFn = async () => {
    const res = await api.get('/users')
    return res.data.user
}

export const useUser = (config) => {
    return useQuery(['user'], () => queryFn(), { ...config })
}