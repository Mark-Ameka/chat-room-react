import { useQuery } from '@tanstack/react-query';
import api from '../utils/axiosInstance'

const queryFn = async () => {
    const res = await api.get('/rooms')
    return res.data
}

export const useRooms = () => {
    return useQuery(['rooms'], () => queryFn())
}