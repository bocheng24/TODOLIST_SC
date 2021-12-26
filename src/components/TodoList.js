import React, { useState } from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #20212d;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 36px;
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 15px 22px;
    background: #272833;

    input {
        background: #20212d;
        border: none;
        outline: none;
        width: 280px;
        padding: 10px 18px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
    }
`;

const CategoryIcon = styled.div`
    background-color: #FD76A1;
    padding: 6px 8px;
    border-radius: 5px;
    margin-right: 5px;

`;

const CategoryType = styled.div`
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.35px;
`;

const Placeholder = styled.div`
    flex: 1;
`;

const AddBtn = styled.div`
    padding: 10px 12px;
    margin-left: 8px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.35s;

    i {
        font-weight: 700;
    }

    &:hover {
        background-color: rgba(140, 122, 230, 0.45);
    }

    &:active {
        transform: scale(0.93);
    }
`;

function TodoList() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodoHandler = () => {
        
        const todo_clean = todo.trim();

        switch(todo_clean) {
            case '':
                console.log('empty string');
                break;
            default:
                const todo_obj = {
                    id: todoList.length,
                    title: todo.trim(),
                    completed: false
                }

                setTodoList([todo_obj, ...todoList]);
                break;
        }

        setTodo('');
    }

    return (
        <Wrapper>
            <CategoryHeader>
                <CategoryIcon>
                    <i className="fas fa-user"></i>
                </CategoryIcon>

                <CategoryType>
                    Personal
                </CategoryType>

                <Placeholder />
                <form action="" onSubmit={ e => {
                    e.preventDefault();
                    addTodoHandler();
                } }>
                    <input type="text" value={ todo } onChange={ e => setTodo(e.target.value) }/>
                </form>

                <AddBtn onClick={ addTodoHandler }>
                    <i className="fas fa-plus"></i>
                </AddBtn>
            </CategoryHeader>

            { todoList.map( (todo, idx) => <TodoItem todoList={ todoList } 
                                                     setTodoList={ setTodoList } 
                                                     todo={ todo } 
                                                     key={ idx } /> ) }
        </Wrapper>
    )
}

export default TodoList
