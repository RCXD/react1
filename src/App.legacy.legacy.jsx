import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail.jsx'

// let i=0
function App() {
  //state 선언 방법. use****같은 react hook (react 내장 함수)들이 많이 있다.
  // const [변수명, 변경함수]=useState(초기값);
  const [title, setTitle] = useState('상품목록')
  const [boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS'])
  const [boardContent, setBoardContent] = useState(['React is...', 'HTML is...', 'CSS is...'])
  const [like, setLike] = useState([0, 0, 0])
  const [show, setShow] = useState(false)
  const [titleIdx, setTitleIdx]=useState(0)
  const [newTitle, setNewTitle]=useState('')
  const [newContent, setNewContent]=useState('')
  //위 변수들을 객체로 만들어서 개선

  function showContent(idx){
    setShow(!show);
    setTitleIdx(idx)
  }
  // function changeHandler() {
  //   setLike(like + 1)
  // }
  function test(){
    console.log('test')
  }
  // let title=`게시판` //서버에서 가져온 값으로 가정
  return (
    <div className='App'>
      <nav>
        <h3 className={title}>{title}</h3>
      </nav>
      <button onClick={() => {
        setTitle('게시판')
      }}>제목 바꾸기</button>

      {
       //블럭문
        //배열을 map하면 값,인덱스 순으로 매개변수를 받을 수 있다...
        boardTitle.map((title, i) => {
          {/* console.log('??', title, i) */}
          return (
            <div className="list" key={i}>
            {/* key 속성은 React에서 반복되는 태그를 구분해줄 방법으로 이용한다. 
            이 부분이 없으면 에러가 나고 실행되지 않는다고 함.*/}
              <h4 onClick={() => {
                showContent(i)
              }}>{title}<button onClick={(e) => {
                //이벤트 객체를 받을 수 있다.
                e.stopPropagation()
                //버블링 차단
                // let _like = [...like]
                // _like[i] = _like[i] + 1
                // setLike(_like)
                setLike([...like.slice(0, i), like[i]+1, ...like.slice(i+1)])
              }}>좋아요</button> {like[i]} </h4>
              <p>2025-07-16</p>
              <button onClick={()=>{
                boardTitle.splice(i, 1)
                boardContent.splice(i, 1)
                like.splice(i, 1)
                setBoardTitle([...boardTitle])
                setLike([...like])
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* <button onClick={() => {
        setBoardTitle(['Java', ...boardTitle.slice(1)])
      }}>첫번째 게시물 제목 바꾸기</button> */}
      {/* <Detail 변수명=보낼값 /> 이렇게 자식으로 데이터를 보낼 수 있다. */}
      {/* {<Detail num={1}/>} */}
      
      {/* 컴포넌트 태그를 사용하면 부모자식관계 성립 */}
      {show ? <Detail
        boardTitle={boardTitle} 
        setBoardTitle={setBoardTitle}
        titleIdx={titleIdx} 
        color="grey"
        like={like}
        test={test}
        boardContent={boardContent}
      /> : null} 
      {/* {show && <Detail />} */}
      <br/>
      {/* 쓰자마자 반영되게 하고싶으면 onInput. 다 쓰고 포커스를 텍스트박스 밖으로 뺄 떼는 onChange */}
      {/* 아래는 되긴 되는데 다소 불편하네
      <input type='text' onFocus={(e)=>{
        e.target.value=''
      }} onBlur={(e)=>{
        console.log(e.target.value)
        setNewTitle(e.target.value)
      }}/><br/>
      <textarea></textarea><br/>
      <button onClick={()=>{
        if (newTitle===''){
          alert('제목을 입력하세요.')
          return
        }
        // boardTitle.unshift(newTitle) //앞에 추가
        // like.unshift(0)
        boardTitle.push(newTitle) //뒤에 추가
        like.push(0)
        setLike([...like])
        setBoardTitle([...boardTitle])
        setNewTitle('')
      }}>글작성</button> */}
      <input type='text' value={newTitle} onChange={(e)=>{
        setNewTitle(e.target.value)
      }}/><br/>
      <textarea value={newContent} onChange={(e)=>{
        setNewContent(e.target.value)
      }}></textarea><br/>
      <button onClick={()=>{
        if (newTitle===''){
          alert('제목을 입력하세요.')
          return
        }
        if (newContent===''){
          alert ('내용을 입력하세요.')
          return
        }
        // boardTitle.unshift(newTitle) //앞에 추가
        // like.unshift(0)
        boardTitle.push(newTitle) //뒤에 추가
        boardContent.push(newContent)
        like.push(0)
        setLike([...like])
        setBoardTitle([...boardTitle])
        setBoardContent([...boardContent])
        setNewTitle('')
        setNewContent('')
      }}>글작성</button>
    </div>
  )
}
export default App