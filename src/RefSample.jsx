import React, {useRef} from "react";

const RefSample = () => {

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
      <div>
        <h2>[RefSample]</h2>
        <input ref={inputRef}/>{/* inputRef.current 안에 실제 DOM input 요소가 들어감 */}
        <button onClick={handleFocus}>포커스</button>
      </div>
  )

}

export default RefSample