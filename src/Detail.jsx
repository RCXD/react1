import boardTitle from './App.jsx'

// 부모로부터 받은 값을 받을 때, fundtion Detail(props) {}라고 매개변수를 활용한다.
//<매개변수 없이>
// function Detail() {
//<매개변수 한번에>
// function Detail(props) {
// const boardTitle=props.boardTitle
// const setBoardTitle=props.setBoardTitle
// const color=props.color
// const test=props.test
//<매개변수와 선언문 통합/Destructuring & allocation>
function Detail({boardTitle, setBoardTitle, titleIdx, color, test}){
// const [boardTitle, setBoardTitle]
  //  = useState(['React', 'HTML', 'CSS']);
  //변수만 받아올 경우 자식에서 직접 setter를 정의해줄 수 있다.
  //순환참조는 안되니 필요한 변수는 최상위 부모컴포넌트에서 정의하고 작업하는 것이 좋다
  //미리 고려하지 않으면 갈아엎는 일이 생길 수 있음>다만 공유를 도와주는 라이브러리가 있긴 함
  //자식>부모로 보낼 방법은 없다.


  return (
    <div className="detail" color={color}>
      <button onClick={()=>{
        // let _boardTitle=[...props.boardTitle]
        // _boardTitle[0]="zzz"
        // setBoardTitle(_boardTitle)
        setBoardTitle([...boardTitle.slice(0,titleIdx),'zzz', ...boardTitle.slice(titleIdx+1)])
      }}>제목 바꿔주는 버튼</button>
      <h4>{boardTitle[titleIdx]}</h4>
      <p onClick={()=>{
        test()
      }}>날짜</p>
      <p>내용</p>
    </div>
  )
}
export default Detail