import { useState, memo, useTransition, Suspense } from "react"
const Test = () => {
  const [tab, setTab] = useState("Post")
  const [isPending, startTransition] = useTransition()

  function setOpenTab(tab) {
    startTransition(() => setTab(tab))
  }
  return (
    <>
      <button className="button" onClick={() => setOpenTab("Post")}>
        View Post
      </button>
      <button className="button" onClick={() => setOpenTab("Comment")}>
        View Comment
      </button>
      <button className="button" onClick={() => setOpenTab("User")}>
        View User
      </button>
      {tab === "Post" ? <Post /> : tab === "Comment" ? <Comments /> : <User />}
    </>
  )
}

export default Test

function Comments() {
  return (
    <ul>
      {Array(250)
        .fill(null)
        .map((_, i) => (
          <li key={i}>
            <Comment number={i} />
          </li>
        ))}
    </ul>
  )
}

function Comment({ number }) {
  const start = performance.now()
  while (start > performance.now() - 100) {
    // Artificial delay -- do nothing for 2ms
  }
  return <div>Comment {number}</div>
}

// const Comment = memo(_Comment)

function Post() {
  console.log("render post")
  return <div>Post</div>
}

function User() {
  return <div>User</div>
}
