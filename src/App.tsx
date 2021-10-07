import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Container,Navbar,Nav,NavDropdown,Form,FormControl,Button,Dropdown,NavItem,Table } from 'react-bootstrap'
import axios from 'axios'
import React,{useState,useEffect, Fragment} from 'react';

type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo {
  text: string,
  complete: boolean
}

export default () => {
  let [value, setValue] = useState<string>('')
  let [todos, setTodos] = useState<ITodo[]>([])

  let handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text) => {
    setTodos([...todos, { text:text, complete: false }])
  }

  function completeTodo(index: number): void{
    const newTodos: ITodo[] = todos
    newTodos[index].complete = !newTodos[index].complete
    setTodos([...newTodos])
  }
  function removeTodo(index: number): void{
    const newTodos: ITodo[] = todos
    newTodos.splice(index, 1)
    setTodos([...newTodos])
  }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo, index) => (
          <div key={index}  style={{ display: 'flex' }}>
            <div
              style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            >
              {todo.text}
            </div>
            <button type='button' onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        ))}
      </section>
    </Fragment>
  )
}
