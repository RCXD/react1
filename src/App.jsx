import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail.jsx'

// let i=0
function App() {
  //state 선언 방법. use****같은 react hook (react 내장 함수)들이 많이 있다.
  // const [변수명, 변경함수]=useState(초기값);
  const [title, setTitle]=useState('상품목록')
  const [boardTitle, setBoardTitle]=useState(['React', 'HTML', 'CSS'])
  const [likes, setLikes]=useState(0)
  const [show, setShow]=useState(false)

  function changeHandler(){
    setLikes(likes+1)
  }
  // let title=`게시판` //서버에서 가져온 값으로 가정
  return (
    <div className='App'>
      <nav>
        <h3 className={title}>{title}</h3>
        <button onClick={()=>{
          setTitle('게시판')
        }}>제목 바꾸기</button>
      </nav>
      <div className='list'>
        <h4><span style={{cursor:'pointer'}} onClick={()=>{
          setShow(true)
        }}>{boardTitle[0]}</span><button onClick={changeHandler}>좋아요</button> {likes} </h4>
        <p>2025-07-16</p>
      </div>
      <div className='list'>
        {/* <h4>{boardTitle[1]}<button onClick={()=>{
          setLikes(++i)
        }}>좋아요</button> {likes} </h4> */}
        <h4 onClick={()=>{
          setShow(true)
        }}>{boardTitle[1]}<button onClick={changeHandler}>좋아요</button> {likes} </h4>
        {/* <h4>{boardTitle[1]}<button onClick={()=>{
          setLikes(likes+1)
        }}>좋아요</button> {likes} </h4> */}
        <p>2025-07-16</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          setShow(true)
        }}>{boardTitle[2]}<button onClick={changeHandler}>좋아요</button> {likes} </h4>
        <p>2025-07-16</p>
      </div>
      <button onClick={()=>{
        setBoardTitle(['jaaaaava', ...boardTitle.slice(1)])
      }}>첫번째 게시물 제목 바꾸기</button>

      {show? <Detail />:null}
      {/* {show && <Detail />} */} 
    </div>
  )
}
export default App