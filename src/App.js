/* eslint-disable */


import './App.css';
import { useState } from 'react';

function App() {

  let [postName, setPostName] = useState(['봄', '여름', '가을', '겨울']);
  let [date, setDate] = useState(['2월 1일', '6월 1일', '9월 1일', '12월 1일'])
  let [like, setLike] = useState([0, 0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');
  let post = 'Fashion Blog';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: '20px' }}>ASH BLOG </h4>
      </div>
      <h4>{post}</h4>

      <button onClick={() => {
        let copy = [...postName];
        copy.sort();

        setPostName(copy);

      }}>정렬</button>

      <button onClick={() => {
        let copy = [...postName];

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

      {
        postName.map(function (post, i) {
          return (
            <div className="list" key={i}>
              <h4><span onClick={() => { modal == false ? setModal(true) : setModal(false) }}>{post}</span><button class="likeBtn" onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy); // 전체를 업데이트 => 업데이트한 요소에서 빼서출력
              }}>👍</button> {like[i]}&nbsp;&nbsp;&nbsp;<button onClick={()=>{
                let copy = [...postName];
                copy.splice(i, 1);
                setPostName(copy)
              }}>delete</button></h4>
              <p>{date[i]}</p>
            </div>)
        })
      }
      
      {/* e.target.value => input에 입력한 값 */}
      <div>
      <input onChange={(e)=>{ setInput(e.target.value) }}></input><button onClick={()=>{
        let copy = [...postName];
        copy.unshift(input);
        setPostName(copy);

      }}>제출</button>
      </div>


      {
        /* react는 if문을 사용할 수 없다. 삼항연산자로 대체한다. */
        modal == true ? <Modal setPostName={setPostName} postName={postName} /> : null
      }





    </div>
  );
}



function Modal(props) {
  return (
    <>
      <div className="modal" style={{ background: props.color }}>
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


export default App;
