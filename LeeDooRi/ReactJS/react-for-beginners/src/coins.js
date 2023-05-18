import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true); // 로딩 상태를 저장하는 변수와 상태 업데이트 함수
  const [coins, setCoins] = useState([]); // 코인 데이터를 저장하는 변수와 상태 업데이트 함수

  useEffect(() => {
    // 컴포넌트가 렌더링될 때 한 번만 실행되는 이펙트
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) // 응답을 JSON 형식으로 변환
      .then((json) => {
        setCoins(json); // 코인 데이터를 업데이트
        setLoading(false); // 로딩 상태를 false로 업데이트하여 로딩이 완료되었음을 표시
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>{' '}
      {/* 로딩 상태와 코인 배열의 길이를 표시 */}
      {loading ? (
        <strong>Loading...</strong> // 로딩 중일 때는 "Loading..."을 강조하여 표시
      ) : (
        <select>
          {/* 코인 배열을 순회하면서 옵션을 생성 */}
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
