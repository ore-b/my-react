import {useEffect, useState} from "react";

const EffectComponent = () => {

  useEffect(() => {
    // 여기 안의 코드가 "렌더링 이후"에 실행됨
    console.log('렌더링 후, 항상 실행됨');
  });

  useEffect(() => {
    console.log('렌더링 후, 최초한번만 실행됨');
  }, []);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('number 가 변경 될때마다 실행 됨');
  }, [number]);

  useEffect(() => {
    console.log('number 가 변경 될때마다 실행 됨');
  }, [number]);

  useEffect(() => {

    return () => {
      console.log('컴포넌트 사라질 때, 실행됨');
    };
  }, []); // 의존성: []

  return (
      <div>
        <h2>[EffectComponent]</h2>
        <button onClick={() => {
          setNumber(number + 1)
        }}>+1
        </button>
      </div>
  );

}

export default EffectComponent;
