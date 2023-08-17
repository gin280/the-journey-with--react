import React, { useState, useTransition, Suspense } from "react"

const simulateLoadTime = (ms) => {
  const start = performance.now()
  while (performance.now() - start < ms);
}

const TabContent = React.lazy(() => {
  return new Promise((resolve) => {
    simulateLoadTime(3000) // 模拟1秒的加载时间
    resolve({
      default: ({ tab }) => (
        <div>
          {tab === "tab1" && <p>这是第一个标签页的内容</p>}
          {tab === "tab2" && <p>这是第二个标签页的内容</p>}
        </div>
      ),
    })
  })
})

export default function App() {
  const [tab, setTab] = useState("tab1")
  const [isPending, startTransition] = useTransition({ timeoutMs: 3000 })

  const handleClick = (newTab) => {
    setTab(newTab)
  }

  return (
    <div>
      <button onClick={() => handleClick("tab1")}>第一个标签页</button>
      <button onClick={() => handleClick("tab2")}>第二个标签页</button>
      <Suspense fallback={<p>加载中...</p>}>
        <TabContent tab={tab} />
      </Suspense>
      {isPending && <p>切换中...</p>}
    </div>
  )
}
