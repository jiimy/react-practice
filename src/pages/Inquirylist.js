import React from 'react';
// import queryString from 'query-string';
import { Helmet } from 'react-helmet';
// import SearchBar from '../components/SearchBar';
import '../css/inquirylist.css';


const InquiryList = () => {
  return (
    <div className="inquiry">
      <Helmet>
        <title>문의사항 - </title>
      </Helmet>
      <button type="submit">문의하기</button>
    </div>
  );
};

export default InquiryList;