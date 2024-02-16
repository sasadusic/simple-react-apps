import Quiz from './Quiz'
import Todo from './Todo'
import Game from './Game'
import Calculator from './Calculator'
import Slider from './Slider'
import Events from './Events'

const Main = () => {

  
    return(
      <main>
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
