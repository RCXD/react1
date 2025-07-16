import boardTitle from './App.jsx'

function Detail() {
  console.log(boardTitle)
  return (
    <div className="detail">
      <h4>게시글 제목</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}
export default Detail