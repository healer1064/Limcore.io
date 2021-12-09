import axios, { AxiosRequestConfig, Method } from 'axios'

const DEV = process.env.NODE_ENV !== 'production'

const { REACT_APP_API_DEV, REACT_APP_API_PROD } = process.env

export const API_BASE_URL = DEV ? REACT_APP_API_DEV : REACT_APP_API_PROD

const getURL = (path: string) => `${API_BASE_URL}${path}`

/**
 * возвращает header для запроса
 */
const getHeaders = (userToken: string | null) => {
  const headers = {
    Authorization: <string | undefined>undefined,
  }
  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`
  }
  return headers
}

/**
 * класс api
 */
export const api = {
  /**
   * токен юзера
   */
  userToken: <string | null>null,

  /**
   * проставить токен юзера
   * @param {String} token
   */
  setUserToken: (token: string | null) => {
    api.userToken = token
    // if (DEV) {
    //   console.info('[API] change token', getHeaders(token))
    // }
    return api
  },

  request: <T>(method: Method, path: string, params?: AxiosRequestConfig) => {
    const url = getURL(path)
    if (DEV) {
      // console.info('[API] ->', method, url, params || '')
    }
    const authHeaders = getHeaders(api.userToken)
    return axios
      .create({ headers: authHeaders })
      .request<T>({
        method,
        url,
        ...params,
      })
      .then((resp) => {
        if (DEV) {
          // console.info('[API] <- ok', method, url, resp.data)
        }
        return resp
      })
      .catch((err) => {
        if (DEV) {
          // console.error('[API] <- error', method, url, err)
        }
        throw err
      })
  },

  get: <T extends unknown>(path: string, params?: AxiosRequestConfig['params']) =>
    api.request<T>('GET', path, { params }),

  post: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('POST', path, { data }),

  put: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('PUT', path, { data }),

  patch: <T>(path: string, data: AxiosRequestConfig['data']) => api.request<T>('PATCH', path, { data }),

  delete: <T extends unknown = void>(path: string) => api.request<T>('DELETE', path),

  sendFile: <T>(path: string, data: AxiosRequestConfig['data'], method: AxiosRequestConfig['method']) =>
    api.request<T>(method, path, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data,
    }),
}
