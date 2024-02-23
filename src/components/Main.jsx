import Quiz from './Quiz'
import Todo from './Todo'
import Game from './Game'
import Calculator from './Calculator'
import Slider from './Slider'
import Events from './Events'
import Form from './Form'
import Form2 from './Form2'

const Main = () => {

  
    return(
      <main>
        <Form2 />
        <Form />
        <Events />
        <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
        <Calculator />
        <Game />
        <Quiz />
        <Todo />
      </main>
      )
}

export default Main
