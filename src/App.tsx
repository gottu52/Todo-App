// eslint-disable-next-line
import { 
  ChakraProvider, 
  Center
  } from '@chakra-ui/react';
import React, { useState, ChangeEvent } from 'react';
import './App.css';
import { TitleLogo } from './components/attoms/logo/TitleLogo';
import { CompleteArea } from './components/molecule/CompleteArea';
import { IncompleteArea } from './components/molecule/IncompleteArea';
import { InputArea } from './components/molecule/InputArea';

export default function App() {
  const [TodoInput, setTodoInput] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['']);
  const [completeTodos, setCompleteTodos] = useState(['']);

  const onChangeTodoMenu = (e: ChangeEvent<HTMLInputElement>) => setTodoInput(e.target.value);
  const onClickAdd = () => {
    const newTodoMenu = [...incompleteTodos, TodoInput]
    setIncompleteTodos(newTodoMenu);
    setTodoInput('');
  }
  const onClickIncompleteDelete = (index: any) => {
    const deletedTodo = [...incompleteTodos]
    deletedTodo.splice(index, 1);
    setIncompleteTodos(deletedTodo);
  }
  const onClickCompleteDelete = (index: any) => {
    const deletedTodo = [...completeTodos]
    deletedTodo.splice(index, 1);
    setCompleteTodos(deletedTodo);
  }
  const onClickFinish = (index: any) => {
    const newIncompleteTodo = [...incompleteTodos]
    newIncompleteTodo.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodos);
  }
  const onClickBack = (index: any) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodo);
    setIncompleteTodos(newIncompleteTodo);
  }

  return (
      <ChakraProvider>
          <TitleLogo />
          <Center>
            <InputArea
            input={TodoInput}
            onChange={onChangeTodoMenu}
            onClick={onClickAdd}
            placeholder=""
            text="追加"
            />
          </Center>
          <Center>
            <IncompleteArea
            incompleteTodos={incompleteTodos}
            onClickFinish={onClickFinish}
            onClickIncompleteDelete={onClickIncompleteDelete} />
          </Center>
          <Center>
            <CompleteArea 
            Todos={completeTodos}
            onClickCompleteDelete={onClickCompleteDelete}
            onClickBack={onClickBack}
            />
          </Center>
      </ChakraProvider>
  );
}

