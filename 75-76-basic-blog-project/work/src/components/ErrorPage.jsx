import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  const isDevelopment = import.meta.env.VITE_ENV === "development"

  return (
    <div>
      <h1>出错了！</h1>
      {isDevelopment ? (
        <>
          <h2>详细错误信息：</h2>
          <p>{error.message}</p>
          <pre>{error.stack}</pre>
        </>
      ) : (
        <p>抱歉，出现了一个问题。请稍后再试，或者联系我们的支持团队。</p>
      )}
    </div>
  )
}
