const baseURL = import.meta.env.VITE_API_URL

const customFetch = (endpoint, options = {}) => {
  // 将baseURL与端点组合以形成完整的URL
  const url = `${baseURL}${endpoint}`

  // 请求拦截器，你可以在此处添加自定义逻辑
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }

  return fetch(url, options)
    .then((response) => {
      // 响应拦截器
      if (!response.ok) {
        return Promise.reject("Something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      return data
    })
}

export default customFetch
