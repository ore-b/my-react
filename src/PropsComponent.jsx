const PropsComponent = props => {
  return (
      <div>
        <h2>[PropsComponent]</h2>
        <h4>props 로 넘겨받은 name 은 : {props.name} 입니다</h4>
        <h4>props 로 넘겨받은 children 은 : {props.children} 입니다</h4>
      </div>
  )
}

export default PropsComponent