import {useState} from "react";

const EventPractice = () => {

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    setMessage('');
  }

  return (
      <div>
        <h2>[EventPractice]</h2>
        <h3>{message}</h3>
        <input type="text"
               name="message"
               value={message}
               placeholder="아무거나 입력하세요"
               onChange={handleChange}/>
        <button onClick={handleClick}>지우기
        </button>
      </div>
  )
}

export default EventPractice;