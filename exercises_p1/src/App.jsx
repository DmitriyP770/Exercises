
const Header = (props) =>{
  return(
    <h1>
        {props.course.name}
    </h1>
  )
}

const Content = (props) =>{

  const result = []
  props.course.parts.forEach(element => {
    result.push(
      <Part key = {element.name} part = {element.name} numOfExc = {element.exercises}/>
    )
  });
  return (
    <>
    {result}
    </>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.numOfExc}
    </p>
  )
}

const Total = (props) => {
  let result = 0;
  props.course.parts.forEach(element => {
    console.log(`element is ${element}`)
    result += element.exercises
  });
  return(
    <p>
      Number of exercises = {result}
    </p>
  )
}


const App = () => {
  console.log(Date())
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
      <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
      </div>
  )
}

export default App