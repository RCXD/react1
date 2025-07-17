import { useState } from 'react'

function Editor({board, setBoard, boardIdx, newBoard, setNewBoard, ishidden, setIshidden}) {
  console.log(ishidden)
  return (
    <div className={`editor ${ishidden?'hidden':'revealed'}`}>
      <input type='text' placeholder='제목을 입력하세요.' style={{width:'90vw'}} value={newBoard.title} onChange={(e) => {
        newBoard.title = e.target.value
        setNewBoard({ ...newBoard })
      }} /><br />
      <textarea style={{width:'90vw', height:'300px'}} value={newBoard.content} onChange={(e) => {
        newBoard.content = e.target.value
        // console.log(e.target.value)
        // console.log(newBoard.content)
        setNewBoard({ ...newBoard })
        // console.log('!!', newBoard.content)
      }} onKeyDown={(e)=>{
        // console.log(e.keyCode)
        if(e.keyCode===13){
          alert('엔터 누름')
        }
      }}></textarea><br />
      <button style={{display:'inline'}} onClick={() => {
        if (newBoard.title === '') {
          alert('제목을 입력하세요.')
          return
        }
        if (newBoard.content === '') {
          alert('내용을 입력하세요.')
          return
        }

        let getDate = () => {
          let today = new Date();
          let date_str = today.toUTCString()
          date_str = date_str.replaceAll('. ', '-')
          date_str = date_str.slice(0, date_str.length - 1)
          return date_str
        }
        newBoard.date = getDate()

        newBoard.likes = 0
        setNewBoard({ ...newBoard })
        // console.log('newBoard2:', newBoard)
        //뉴보드에서 인덱스를 포함시키도록 수정해야 하겠다
        // board.push(newBoard)
        // board.unshift(newBoard)
        let _board = [...board]
        _board[boardIdx]=newBoard
        // console.log('board:', _board)
        setBoard(_board)

        // let _newBoard = { ...newBoard } //랜더링 setter 호출타이밍은 만만하지 않음...
        // _newBoard.title = ''
        // _newBoard.content = ''
        // _newBoard.date = ''
        // setNewBoard(_newBoard)
        // setIshidden(true)
      }}>적용?</button>
      <button style={{display:'inline'}} onClick={() => {
        if (newBoard.title === '') {
          alert('제목을 입력하세요.')
          return
        }
        if (newBoard.content === '') {
          alert('내용을 입력하세요.')
          return
        }

        let getDate = () => {
          let today = new Date();
          let date_str = today.toUTCString()
          date_str = date_str.replaceAll('. ', '-')
          date_str = date_str.slice(0, date_str.length - 1)
          return date_str
        }
        newBoard.date = getDate()

        newBoard.likes = 0
        // console.log('newBoard1:', newBoard)
        setNewBoard({ ...newBoard })
        // console.log('newBoard2:', newBoard)
        // board.push(newBoard)
        // board.unshift(newBoard)
        let _board = [...board, newBoard]
        // console.log('board:', _board)
        setBoard(_board)

        let _newBoard = { ...newBoard } //랜더링 setter 호출타이밍은 만만하지 않음...
        _newBoard.title = ''
        _newBoard.content = ''
        _newBoard.date = ''
        setNewBoard(_newBoard)
      }}>게시??</button>
    </div>
  )
}
export default Editor