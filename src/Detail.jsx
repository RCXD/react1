import { useState } from 'react'
// import boardTitle from './App.jsx'

function Detail({boardIdx, board, ishidden}){
  let curBoard=board[boardIdx]
  console.log(ishidden)
  return (
    <div className={`detail ${ishidden?'hidden':'revealed'}`}>
      {/* <button onClick={()=>{
        setBoardTitle([...curBoard.title.slice(0,boardIdx),'zzz', ...boardTitle.slice(titleIdx+1)])
      }}>제목 바꿔주는 버튼</button> */}
      {/* <button>수정?</button> */}
      {/* <button>삭제?</button> */}
      <h4>{curBoard.title}</h4>
      <p>{curBoard.date}</p>
      <p>{curBoard.content}</p>
    </div>
  )
}
export default Detail