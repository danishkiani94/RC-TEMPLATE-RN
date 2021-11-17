import api from '@/ServicesLayer'
import handleError from '@/ServicesLayer/utils/handleError'

export default async (userId: string) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const response = await api.get(`users/${userId}`)
  return response.data
}
