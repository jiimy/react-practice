// import React, { Component } from 'react';
// import { Home, inquirylist } from 'pages';
// import MainGnb from '../components/MainGnb';
// // import MainList from '../components/Mainlist';
// import SearchBar from '../components/SearchBar';
// import Order from '../components/Order';





// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SearchBar />
//         <header>
//           <nav>
//             <MainGnb />
//             <Route exact path="/" component={Home} />
//             <Switch>
//               <Route path="/inquirylist/:name" component={inquirylist} />
//               <Route path="/inquirylist" component={inquirylist} />
//             </Switch><Route exact path="/" component={Home} />
//             <Switch>
//               <Route path="/inquirylist/:name" component={inquirylist} />
//               <Route path="/inquirylist" component={inquirylist} />
//             </Switch>
//           </nav>
//         </header>
//         {/* <  /> = 컴포넌트, <  > = 태그 */}
//         {/* 이슈1. /inquirylist에서만 components/Mainlist가 나와야 한다. 이 부분에 <MainList/>를 쓰게 되면 page/index와 page/Inquirylist에서 둘다 나오게 되고  *}
//         {/* pqge/Inquirylist에서 <Mainlist/>를 쓰게되면 겉을 감싸는 태그가 필요하기 때문에  기존의 <header>+<Mainlist/> 구조가 깨지게 된다.  구조를 깨지 않고 /inquirylist에서만 <MainList 나오게하기*/}
//         {/*
//         <MainList/>
//       */}
//         {/* 이슈2. components/MainList에 객체가 선언되있고, 그 객체를 사용하여 components/Mainlist에 반복하여 뿌려줘야 하는데 App(부모)->components/Mainlist(자식)의 객체 속성 전송이 안됨. (객체를 App에서 선언을 해야 하는 것인가..) */}
//         {/*
//           <MainList data={data} />
//         */}
//         <Order />
//       </div>
//     );
//   }
// }


// export default App;