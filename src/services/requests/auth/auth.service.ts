import postRequest from '@/services/base/post/post-request'
import { BaseResponse } from '@/services/base/requestBase.types'
import { getAPIRoute } from '@/services/base/routes'
import { ILoginPayload } from './auth.service.type'

const { auth } = getAPIRoute()

export const login = async (data: ILoginPayload) => {
  const { phoneNumber } = data
  const formData = new FormData()
  formData.append('phoneNumber', phoneNumber)

  const response = await postRequest<BaseResponse<unknown>, FormData>({
    url: auth.login.path,
    data: formData,
  })
  return response.data
}
