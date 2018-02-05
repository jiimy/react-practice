import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {
    return (
        <div className="searchWrap">
          <Link to="/">뒤로가기</Link>
          <form>
            <input type="search" placeholder="검색어를 입력해주세요."></input>
            <button type="button">검색</button>
          </form>
        </div>
    );
  }
}

export default SearchBar;