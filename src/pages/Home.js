import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import '../css/index.css'
// <SearchBar />
// <header>
//   <nav>
//     <Main_gnb />
//   </nav>
// </header>
const Home = () => {
  return (
    <ul className="lnb">
    <Helmet>
      <title>자주 묻는 질문 - </title>
    </Helmet>
      <li><NavLink exact to="/">전체</NavLink></li>
      <li><NavLink exact to="/">상품문의</NavLink></li>
      <li><NavLink exact to="/">견적문의</NavLink></li>
    </ul>
  );
};

export default Home;
