import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import list from './client/list';
// import registerServiceWorker from './registerServiceWorker';
// import { AppContainer } from 'react-hot-loader';
import '../src/css/index.css';
import SearchBar from './components/SearchBar';
import MainGnb from './components/MainGnb';
import Mainlist from './components/Mainlist';
import inquiryList from './components/inquiryList';
import Order from './components/Order';
import Home from './pages/Home';
import Inquirylist from './pages/Inquirylist';
// import App from './App';


// 라우터 v3와 v4가 있다는 것을 알고 v4기능으로 전환
// 1. index에서 몰빵. App파일 안불러옴
ReactDOM.render(
  <Router>
    <div>
      <SearchBar />
      <header>
        <nav>
          <MainGnb />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Mainlist} />
          <Route path="/InquiryList" component={Inquirylist} />
        </nav>
      </header>
      <Route path="/inquirylist" component={inquiryList}/>
      <Route path="/inquirylist" component={Order}/>
      {/*
      */}
    </div>
  </Router>,
  document.getElementById('list'),
);
        // <Switch>
        //   <Route path="/InquiryList/:name" component={InquiryList}/>
        //   <Route path="/InquiryList" component={InquiryList}/>
        // </Switch>