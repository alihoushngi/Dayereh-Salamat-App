import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'

import { IRequestOption, IResponse } from './requestBase.types'

export function successHandler<T>(response: IResponse<T>): IResponse<T> {
  return response
}

export function errorHandler(error: unknown): void {
  throw error
}

// T -> response type
// D -> payload type

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendRequest<T, D = any>({ headers, version = '', sendAuthorization = true, ...restOptions }: IRequestOption<D>): Promise<IResponse<T>> {
  const baseURL: string = `${process.env.BASE_URL}/${version}`

  const axiosInstance: AxiosInstance = axios.create({ baseURL })

  axiosInstance.interceptors.request.use((config) => {
    const access_token = Cookies.get('token')
    const defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    }
    if (access_token && sendAuthorization) {
      config.headers.set({
        authorization: `Bearer ${access_token}`,
        ...defaultHeaders,
      })
    } else {
      config.headers.set({
        ...defaultHeaders,
      })
    }

    return config
  })

  axiosInstance.interceptors.response.use(
    (res) => {
      // mitonim age 404 ya har chi joz 200 bod tost bde msln
      return res
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  try {
    const response: IResponse<T> = await axiosInstance({ ...restOptions })
    successHandler<T>(response)
    return response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    errorHandler(error)
    return error
  }
}
