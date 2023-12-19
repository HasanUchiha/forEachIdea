const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const name='hasbullah'
  const age=19

  return (
    <div>
      <p>Greetings</p>

      <Hello name='hasan' age ={29+7} />
      <Hello name= {name} age ={age} />
    </div>
  )
}

export default App
