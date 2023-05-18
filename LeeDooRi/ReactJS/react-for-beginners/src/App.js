import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

// App 컴포넌트 정의
function App() {
  return (
    <Router>
      {/* React Router를 사용하여 경로에 따라 다른 컴포넌트를 렌더링하는 Switch */}
      <Switch>
        {/* "/about-us" 경로에 대한 라우트 */}
        <Route path="/about-us">
          {/* "Hello"라는 텍스트를 표시하는 h1 요소 */}
          <h1>Hello</h1>
        </Route>
        {/* "/movie/:id" 경로에 대한 라우트 */}
        <Route path="/movie/:id">
          {/* Detail 컴포넌트를 렌더링 */}
          <Detail />
        </Route>
        {/* 기본 경로 ("/")에 대한 라우트 */}
        <Route path="/">
          {/* Home 컴포넌트를 렌더링 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/**
 * App.js는 이제 영화에 대해서 보여주는것이 아닌 router를 render한다.
 *React Router는 동적 URL을 지원한다.-> URL에 변수를 넣을 수 있다 (EX :Movie/121212) ,
 * - 위 코드에서 /movie/:id 를 통해 각 영화의 id에 해당하는 정보에 접근 할 수 있게 한다.
 */
