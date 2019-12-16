import React, { Component, useState } from 'react';
import Practice0 from './Practice0';
import './_practice.scss';
import DesignMode from './DesignMode';
// import classnames from 'classNames';
// import axios from 'axios';

// 2번째 방법. 함수형 컴포넌트에서 쓰임.
// const [currTab, setTab] = useState(0);

class Practice extends Component {
  // 기본 state
  state = {
    showFilter: false
  }
  // 1번째 방법
  // 이벤트 state
  toggleFilter = (isShow) => {
    this.setState({
      showFilter: isShow
    });
  }


  render() {
    const { showFilter } = this.state;
    return (
      <div className="test">
        <h3>domcontrol</h3>
        <button onClick={()=>this.toggleFilter(!showFilter)} style={{background:showFilter ? 'red' : 'blue'}}>button</button>
        {
          showFilter &&
          <div>toggle</div>
        }
        <div className="inputwrap-chk">
          <label htmlFor="chk">
            <input type="checkbox" name="" id="chk"/>
            <span className="chk"></span>
            <span>chk 표준</span>
          </label>
        </div>
        <Practice0
          background="red"
          color="white"
        />
        
      </div>
    );
  }
}

export default Practice;
