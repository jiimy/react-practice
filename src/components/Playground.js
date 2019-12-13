import React, { useState } from 'react';
import classNames from 'classnames';

const RandomLunch = () => {

  const [allMenu, selectMenu] = useState(0);
  const [exceptMenu, setExceptMenu] = useState('');

  const Menu = [{
    name: '2.5 닭갈비',
    menu: '닭갈비',
    Personnel: '2~6'
  },
  {
    name: '남대문손칼국수',
    menu: '보리밥, 칼국수, 냉면',
    Personnel: '2~6'
  },
  {
    name: '곰국수',
    menu: '곰국수',
    Personnel: '2~6'
  },
  {
    name: '돈까스이야기',
    name: '돈까스종류, 우동',
    Personnel: '2~6'
  },
  {
    name: '고기구워주는 집',
    name: '고기세트, 백반세트(어묵탕등)',
    Personnel: '2~6'
  },
  {
    name: '요일메뉴',
    Personnel: '2~4'
  },
  {
    name: '담',
    Personnel: '2~6'
  },
  {
    name: '닭한마리',
    Personnel: '2~6'
  },
  {
    name: '분식집',
    Personnel: '2~6'
  },
  {
    name: '추어탕',
    Personnel: '2~6'
  },
  ]

  // let menuItem = Menu[Math.floor(Math.random()*Menu.name.length)];
  // console.log(menuItem);
  function Random() {
    let rand = Math.random();
    let menuIndex = Math.floor(rand * Menu.length);
    let randomMenu = Menu[menuIndex].name;
    return selectMenu(randomMenu);
  }

  function Chk() {
    let chk = Menu.findIndex(x => x.name === exceptMenu);
    console.log(chk);
    // setExceptMenu
    // Menu.keys
    // if( selectMenu.key = setExceptMenu ){
    //   return console.log(selectMenu);
    // }
  }
  return (
    <div className="random-lunch">
      <div className="inputwrap">
        <input type="text" name="person" id="person" placeholder="~포함"
          onChange={e => setExceptMenu(e.target.value)}
        />
        <label htmlFor="person">인원 지정</label>
      </div>
      <div className="inputwrap">
        <input type="text" name="" id="remove-menu"
          onChange={e => setExceptMenu(e.target.value)}
        />
      </div>
      <div className="inputwrap">
        <strong></strong>
        <input type="checkbox" name="" id="chk"
          onClick={() => Chk()}
        />
        <span></span>
        <label htmlFor="chk">메뉴제외</label>
      </div>
      <button
        onClick={() => Random()}
      >고르기</button>
      <ul className="wrap">
        {
          Menu.map((Menu, index) => {
            return <li
              key={index}
              className={classNames("grid-child-" + index, {
                'is-select': allMenu === Menu.name
              })}
            >
              {Menu.name}
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default RandomLunch;
