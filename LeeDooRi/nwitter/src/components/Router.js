import React, { useState } from "react";
import { HashRouter as Router, Route, Routes  } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";



const AppRouter = ({isLoggedIn}) =>  { 
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route 
            exact path="/"
            element= {<Home />
            }>
            </Route>          
          </>
        ) : (
          <Route 
          exact path= "/" 
          element={<Auth />
          }>
          </Route>
        )}
      </Routes>
    </Router>



  );
};
export default AppRouter;



/* react hook 이란?

 * 정의: React 에서 기존에 사용하던 Class를 이용한 코드를 작성할 필요 없이,
state와, 여러 React 기능을 사용할 수 있도록 만든 라이브러리
 *  예시1) 1. useState  -  함수형 Conponent에서도 가변적인 상태를 지니고 있을 수 있게 해준다.
    (형식) const [Value(변수), setValue(가형변수)] = useState(기본값);

 *  예시2) "useEffect" - 특정값이 변경되거나 한번만 실행하고 싶을 때  사용하는 Hook 입니다.
    (형식) useEffect (() => {
      command (useState, props, ...)
    },[재실행조건(비어있으면 한번만 실행)]);
 * 
 * " <> </> " = frangment,  많은 요소를 render 하고 싶을때 사용한다.   
 * (활용) div 나 span 같이 어떤 요소에도 넣고 싶지 않을 떄 사용하는 방법이다.
 *
 * React-router-dom v6, Firebase v9의 update 후 문법 번경으로 강의와 구분이 달라져 수정해야하는 하는 상황 발생
 * 
 * (Reference)
 * - https://projectlog.tistory.com/22
 * - https://velog.io/@seondal/Firebase-v9%EB%B6%80%ED%84%B0-%EB%8B%AC%EB%9D%BC%EC%A7%84-%EC%9D%B8%EC%A6%9D%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%EB%B2%95
 * 
 * */ 