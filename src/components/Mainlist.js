import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/index.css';

// const activeStyle = {
//   color: 'green',
//   fontSize: '2rem'
// };
// const onStyle = {
//   color: 'red',
//   fontSize: '2rem'
// }


/*
  class MainList extends React.Component {
    list(InquiryList) {
      return (
        <h3>{data[InquiryList].name} - {data[InquiryList].age}</h3>
      )
    }
    render() {
      return (
        <div class="json">
        {Object.keys(this.props.data).map(this.list)}
        </div>
      )
    }
  }
  export default MainList;
*/

// 연습용
// var data = [
//   {
//     text: 'asdf1',
//     content: 'name_1'
//   },
//   {
//     text: 'asdf2',
//     content: 'name_2'
//   },
//   {
//     text: 'asdf3',
//     content: 'name_3'
//   }
// ];
// var DataLength = Object.keys(data).length;
// for (var i = 0; i < DataLength; i++) {
//   console.log('data-text 값' + data[i].text);
//   console.log('data-content 값' + data[i].content);
// }
// function Data(props) {
//   return (
//     <div>
//       <dt>{props.text}</dt>
//       <dd>{props.content}</dd>
//     </div>
//   )
// }

// const Main_list = () => {
class Main_list extends React.Component {
  // 렌더링 객체
  constructor(props) {
    super(props);
    this.state = {
      ListData: [
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 누르면 답변이 아래로 떨어집니다. 흔히 아코디언UI라고 하지요',
          answer: '답변1'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변2'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요',
          answer: '답변3'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변4'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변5'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변6'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변7'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변8'
        },
        {
          text: '상품문의',
          content: '제목이 출력되겠지요 한줄일때는 이렇게',
          answer: '답변9'
        }
      ]
    }
  }

  render() {
    return (
      <section>
        {this.state.ListData.map((list, i) => {
          return (<ListPrint text={list.text}
            content={list.content}
            answer={list.answer}
            key={i} />)
        })}
      </section>
    )
  }
};


class ListPrint extends React.Component {
  render() {
    return (
      <div>
        <dl>
          <dt>{this.props.text}</dt>
          <dd>{this.props.content}</dd>
          <img src={require('../img/down.svg')} width="32" height="19" alt="내용확인" />
        </dl>
        <div className="answer">
          {this.props.answer}
        </div>
      </div>
    )
  }
}

export default Main_list;
