/* eslint-disable */
// warnig message를 제거하려면 위처럼 쓰면된다. lint끄는 기능임

import './App.css';
import { useState } from 'react';

function App() { // => App 또한 컴포넌트이다. 보통 대문자로 시작하면 대부분 컴포넌트
  /**  자료를 잠깐 보관할때에는 변수를 써도되지만 state를 써도 된다.
   let [a, b] = useState('남자 코트 추천');
   
   ?왜 state 써야하는가
  변수를 쓰면 내용 변경시 자동으로 렌더링이 되지 않음.
  state를 쓰면 내용 변경시 자동으로 렌더링해준다. 별도의 조치가 필요없음.

  */

  /**
   * map()함수 => 반복문 for을 못쓰는대신 쓴다.
   * 예시) [1,2,3].map(function(){})
   * 1. array 자료 갯수만큼 함수안의 코드를 실행해줌
   * 2. 함수의 파라미터는 array안에 있던 자료임
   * 3. return에 뭐 적으면 array로 담아줌
   */

  let [postName, setPostName] = useState(['봄', '여름', '가을', '겨울']);
  let [date, setDate] = useState(['2월 1일', '6월 1일', '9월 1일', '12월 1일'])
  let [like, setLike] = useState([0,0,0,0]);
  // 두번째 변수는 state 변경용, 두번째 변수로 바꿔야 html 재렌더링도 잘된다.
  let [modal, setModal] = useState(false);

  let post = 'Fashion Blog';
  // 원래쓰는 형식
  // document.querySelector('h4').innerHTML = post;
  // JSX 문법(데이터바인딩) : {} => 중괄호만 넣어주면 된다. 모든 부분에서 쓸 수 있다.

  /** JS문법 : Destructuring
  let num = [1, 2];
  let [c, d] = [1, 2];
  c = [1]
  d = [2]
  */

  /**
  정리// 
  자주 변경된다 => state
  자주 변경 안된다 => 변수
   */
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: '20px' }}>ASH BLOG</h4>
      </div>
      <h4>{post}</h4>

      <button onClick={() => {
        let copy = [...postName];
        copy.sort();

        setPostName(copy);

      }}>정렬</button>

      <button onClick={() => {
        let copy = [...postName];
        /**
         * [state변경함수 특징]
         * 기존 state == 신규 state의 경우 변경 안해줌
         * 
         * [arr/object 특징]
         * 좌표값으로 저장, reference data type이라서 그렇다.
         * 값을 그대로 옮기는것이 아니라 값의 위치를 가르키는 화살표(좌표)만 복사
         * let copy = postName; 일 경우 console.log(copy == postName) => true
         *
         * [...postName] 문법
         * => 좌표값을 바꾸는 문법
         * 
         * 빡대가리식 정리
         * state가 array/object이면 독립적인 카피본을 만들어서 수정해야한다.
         * 독립적인 카피본을 만들기 위한 문법 [...arr/object명]
         */
        copy[0] = 'Spring Collection';
        setPostName(copy);

      }}>수정</button>

      {/* <div className="list">
        <h4>{postName[0]} <button class="likeBtn" onClick={() => { upLike(like + 1) }}>👍</button> {like}</h4>
         onClick = {} 사용시 주의점!
        => { 함수 } : 중괄호 안에 함수만 써야한다.
        State변경하는법 : State는 등호로 변경이 불가능
        
        <p>{date[0]}</p>
      </div>

      <div className="list">
        <h4>{postName[1]}</h4>
        <p>{date[1]}</p>
      </div>

      <div className="list">
        <h4>{postName[2]}</h4>
        <p>{date[2]}</p>
      </div>

      <div className="list">
        <h4 onClick={() => { modal == false ? setModal(true) : setModal(false) }}>{postName[3]}</h4>
        <p>{date[3]}</p>
      </div>  */}


      {/* 반복문쓰는 법 */}
      {
        // a는 파라미터 array의 요소를 하나씩 꺼내줌, 파이썬 for a in postName : 에서 a의 존재
        // i는 0부터 1씩 증가하는 요소로 사용이 가능함
        postName.map(function (post, i) {
          return (
          <div className="list" key = {i}>
            <h4><span onClick={() => {modal == false ? setModal(true) : setModal(false)}}>{ post }</span><button class="likeBtn" onClick={() => { 
              let copy = [...like];
              copy[i] = copy[i] + 1;
              setLike(copy); // 전체를 업데이트 => 업데이트한 요소에서 빼서출력
            }}>👍</button> {like[i]}</h4>
            <p>{date[i]}</p>
          </div>)
        })
      }


      {/* 컴포넌트 문법 */
      /* <Modal></Modal> */}

      {
        /* react는 if문을 사용할 수 없다. 삼항연산자로 대체한다. */
        modal == true ? <Modal setPostName={setPostName} postName={postName}/> : null
      }





    </div>
  );
}

/* 컴포넌트 문법 => 긴 코드를 한 단어로 축약 가능 ex/ <modal><modal/>
사용법 : 함수안에 html코드를 넣는다. 
주의점 : 함수 밖에서 함수를 만들어야 함

* 어떤걸 컴포넌트로 만들면 좋은가
1. 반복적인 html 축약할때
2. 큰 페이지들
3. 자주변경되는 것들

* 컴포넌트의 단점 :
- state를 가져다 쓸 때 문제 생김
(a함수에 있던 변수는 b에서 쓸 수 없음)

*/

/*
props
부모 -> 자식 state 전송하는 법
1. <자식컴포넌트 작명={state이름}>
2. props 파라미터 등록 후 props.작명 사용
주의점 : porps 전송은 부모 -> 자식으로만 가능
컴포넌트 많아지면 props쓰는게 귀찮아진다.
숙제 : 글수정 버튼을 누르면 "봄"부분이 "봄여름가을겨울"로 change
*/
function Modal(props) {
  return (
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{props.postName[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.postName];
          copy[0] = "봄여름가을겨울";
          props.setPostName(copy);
        }}>글수정</button>
      </div>
    </>
  )
}

/*
함수 선언중 하나. 화살표 함수
const Modal = () => {
  return (
    <div></div>
  )
}
*/

/*
[동적인 UI 만드는 step]
1. html, css로 미리 디자인 완성(step1 : 디자인)
2. UI의 현재 상태를 state로 저장(step2 : 스위치 on/off, 기능)
3. state에 따라 UI가 어떻게 보일지 작성(step3 : 작동)
*/

/* 
반복문대신 쓰는 map함수 정리 
1. 왼쪽 array자료만큼 내부코드를 실행해줌
2. return값을 array로 담아줌
3. 유용한 파리미터 2개 사용가능

*/

export default App;
