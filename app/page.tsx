import Navbar from './Components/Layout/Navbar'
import AddTodo from './Components/Widgets/AddTodo'
import TodoList from './Components/Widgets/TodoList'

export default function Home() {
  return (
   <>
   <Navbar />
   <AddTodo />
   <TodoList/>
   </>
  )
}
