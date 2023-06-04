import { useQuery } from '@tanstack/react-query';
import api from '../utils/axiosInstance'

const queryFn = async () => {
    const res = await api.get('/users')
    return res.data
}

export const useUser = (config) => {
    return useQuery(['user'], () => queryFn(), { ...config })
}