import './App.css'
import MyComponent from './MyComponent'
import PropsComponent from "./PropsComponent.jsx";
import Say from "./Say.jsx";
import EventPractice from "./EventPractice.jsx";
import RefSample from "./RefSample.jsx";
import Iteration from "./Iteration.jsx";

function App() {

  return (
      <>
        <MyComponent/>
        <PropsComponent name="홍길동">PropsComponent children</PropsComponent>
        <Say></Say>
        <EventPractice/>
        <RefSample/>
        <Iteration/>
      </>
  )
}

export default App
