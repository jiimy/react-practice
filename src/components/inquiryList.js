import React from 'react';

class inquiryList extends React.Component {
  // 렌더링 객체
  constructor(props) {
    super(props);
    this.state = {
      ListData: [
        {
          num: '1',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '이경주',
          email: 'aaaaa@naver.com'
        },
        {
          num: '2',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '삼경주',
          email: 'aaaaa@naver.com'
        },
        {
          num: '3',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '4',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '5',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '6',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '7',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '9',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        },
        {
          num: '9999',
          date: '2017 09 15',
          content: '제품에 대해 궁금한게 있습니다',
          nickname: '홍길동',
          email: 'aaaaa@naver.com'
        }
      ]
    }
  }

  render() {
    return (
      <section>
        {this.state.ListData.map((list, i) => {
          return (<ListPrint
            num={list.num}
            date={list.date}
            content={list.content}
            nickname={list.nickname}
            email={list.email}
            key={i} />)
        })}
      </section>
    )
  }
};

// *----nickname과 email에 텍스트를 * 로 바꾸는 코드 추가하기
class ListPrint extends React.Component {
  render() {
    return (
      <article>
        <span>{this.props.num}</span>
        <span>{this.props.date}</span>
        <p>{this.props.content}</p>
        <span>{this.props.nickname} ({this.props.email})</span>
        <img src={require('../img/password.svg')} width="45" height="45" alt="" />
      </article>
    )
  }
}

export default inquiryList;