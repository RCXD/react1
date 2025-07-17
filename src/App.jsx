import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail.jsx'
import Editor from './Editor.jsx'
import { flushSync } from 'react-dom'

// let i=0
function App() {
  //state 선언 방법. use****같은 react hook (react 내장 함수)들이 많이 있다.
  // const [변수명, 변경함수]=useState(초기값);
  const [board, setBoard] = useState([
    {
      title: 'React',
      date: '2025-07-16',
      content: 'React is...',
      likes: 0,
    },
    {
      title: 'HTML',
      date: '2025-07-16',
      content: 'HTML is...',
      likes: 10,
    },
    {
      title: 'CSS',
      date: '2025-07-16',
      content: 'CSS is...',
      likes: 100,
    },
  ])
  const [showDetail, setShowDetail] = useState([false, false, false])
  const [showEditor, setShowEditor] = useState([false, false, false])
  const [showWriter, setShowWriter] = useState(false)
  const [boardIdx, setBoardIdx] = useState(0)
  const [newBoard, setNewBoard] = useState({
    title: '',
    date: '',
    content: '',
    likes: '',
  })
  const [ishidden, setIshidden] = useState(true) //ref로 해야하나?

  function resetFlags(arrayFlags){
    let flags=[...arrayFlags] //will be deprecated if works without it
    flags.map((_, i)=>{
      flags[i]=false
    })
    return flags
  }
  function switchFlags(arrayFlags, idx){
    let flags=[...arrayFlags] //will be deprecated if works without it
    let isAnyOpen=false
    flags.map((_, i)=>{
      isAnyOpen|=flags[i]
      flags[i]=false //reset the original
    })
    if(!isAnyOpen){
      flags[idx]=true
    }
    return flags
  }

  return (
    <div className='App'>
      <nav>
        <h3 className="게시판">게시판</h3>
      </nav>
      {
        board.map((_, i) => {
          return (
            <div key={i}>
              <div className="list">
                <h4 onClick={() => {
                  setIshidden(!ishidden)
                  setShowWriter(false)
                  let sflags=switchFlags(showDetail, i)
                  setShowDetail(sflags)
                  let rflags=resetFlags(showEditor)
                  setShowEditor(rflags)
                  setBoardIdx(i)
                }}>{board[i].title}</h4>
                <div className='like'>
                  <button onClick={(e) => {
                    e.stopPropagation()
                    board[i].likes += 1
                    setBoard([...board])
                  }}>{board[i].likes}👍</button>
                </div>
                <p>2025-07-16</p>
                <button className="modify" onClick={() => {
                  setIshidden(!ishidden)
                  setBoardIdx(i)
                  setShowWriter(false)
                  let rflags=resetFlags(showDetail)
                  setShowDetail(rflags)
                  let sflags=switchFlags(showEditor, i)
                  // console.log(i)
                  setShowDetail(sflags)
                  setShowEditor(sflags)
                  newBoard.title=board[i].title
                  newBoard.content=board[i].content
                }}>수정</button>
                <button className="erase" onClick={() => {
                  // setBoardIdx(i)
                  board.splice(i, 1)
                  setShowWriter(false)
                  let rflags=resetFlags(showDetail)
                  setShowDetail(rflags)
                  setShowEditor(rflags)
                  setBoard([...board])
                  setIshidden(true)
                }}>삭제</button>
              </div>
              <div className='editorWriter'>
                {showDetail[i] ? <Detail
                  boardIdx={boardIdx}
                  board={board}
                  ishidden={ishidden}
                /> : null}
                {showEditor[i] ? <Editor
                  board={board}
                  setBoard={setBoard}
                  boardIdx={boardIdx}
                  newBoard={newBoard}
                  setNewBoard={setNewBoard}
                  ishidden={ishidden}
                  setIshidden={setIshidden}
                /> : null}
              </div>
            </div>
          )
        })
      }
      {!showWriter?
      <button onClick={(e)=>{
        setIshidden(!ishidden)
        let rflags=resetFlags(showEditor)
        setShowDetail(rflags)
        setShowEditor(rflags)
        setShowWriter(true)
        setNewBoard({
          title:'',
          date:'',
          content:'',
          likes:0,
        })
      }}>게시글 작성하기*</button>
      :''
      }
      <div className='writer'>
        {showWriter?
          <Editor 
            board={board}
            setBoard={setBoard}
            boardIdx={boardIdx}
            newBoard={newBoard}
            setNewBoard={setNewBoard}
            ishidden={ishidden}
            setIshidden={setIshidden}
          />:''
        }
        {showWriter?
        <button style={{display:'inline'}} onClick={()=>{
          setShowWriter(false)
        }}>취소</button>:''
        }
      </div>
    </div>
  )
}
export default App