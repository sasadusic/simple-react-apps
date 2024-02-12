import Quiz from './Quiz'
import Todo from './Todo'
import Game from './Game'
import Calculator from './Calculator'
import Slider from './Slider'

const Main = () => {

  
    return(
      <main>
        <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"4"} />
        <Calculator />
        <Game />
        <Quiz />
        <Todo />
      </main>
      )
}

export default Main
