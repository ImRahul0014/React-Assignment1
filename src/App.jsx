import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'
import './App.css'

function App() {

  return (
    <>
      {/* Assignment 1 */}
      <Person name="John " age={30} />


      {/* Assignment 2 */}
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />


      {/* Assignment 3 */}
      <Header title="Welcome to my website!" />


      {/* Assignment 3 */}
      <List items={['apple', 'banana', 'orange']} />
    </>
  )
}

export default App
