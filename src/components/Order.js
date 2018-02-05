import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

const Order =({match}) => {
    return (
      <div className="order">
        <Link to="">이전페이지</Link>
        <span>1</span>
        <span>10</span>
        <Link to="">다음페이지</Link>
      </div>
    );
}


export default Order;