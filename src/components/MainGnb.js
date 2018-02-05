import React from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import '../css/index.css';


const Main_gnb = () => {
  // const activeStyle = {
  //   color: 'green',
  //   fontSize: '2rem'
  // };
  // const onStyle = {
  //   color: 'red',
  //   fontSize: '2rem'
  // }

  return (
      <div className="gnb">
        {/*// a링크가 Link to로 대체됨*/}
        {/* NavLink는 link랑 비슷하나 스타일이나 클래스를 줄수있음 */}
        {/* 중첩될수 있는 라우트들은 exact로 설정 = 중복제외*/}
        {/*class줄때 activeclassName으로 대체됨. */}
        {/*<li activeClassName="by"><NavLink exact to="/" activeStyle={activeStyle} activeClassName="esa">Home</NavLink></li>*/}
        <NavLink exact to="/">자주 묻는 질문</NavLink>
        <NavLink exact to="/Inquirylist">문의사항</NavLink>
        {/*<li><NavLink to="/about/foo" activeStyle={onStyle}>about foo</NavLink></li>*/}
        {/*<li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>*/}
        {/*<li><NavLink to="/Users" activeStyle={activeStyle}>Users</NavLink></li>*/}
      </div>
  );
};

export default Main_gnb;