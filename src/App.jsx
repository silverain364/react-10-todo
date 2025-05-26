import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoEditor from './components/TodoEditor'
import { useState, useRef } from 'react'

// 기존 리스트 정보들
const mockData = [
  {
    id:0,
    isDone:false,
    content:'React 공부하기',
    data:new Date().getTime()
  }, 
  {
    id:1,
    isDone:false,
    content:'산책하기',
    data:new Date().getTime()
  }, 
  {
    id:2,
    isDone:false,
    content:'알고리즘 문제 풀기',
    data:new Date().getTime()
  }
]

function App() {

  // todos에 mockData 값을 저장
  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo={
    id:idRef.current++,
    isDone:false,
    content:content,
    date:new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate=(targetId)=>{
    setTodos(
      todos.map((todo)=>
        todo.id == targetId ? 
      {...todo, isDone:!todo.isDone}:todo
      )
    )
  }

  const onDelete=(targetId)=> {
    setTodos(
      todos.filter((todo)=>todo.id !== targetId)
    )
  }
  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos}
      onUpdate={onUpdate}
      onDelete={onDelete}/>
    </div>
  )
}

export default App
