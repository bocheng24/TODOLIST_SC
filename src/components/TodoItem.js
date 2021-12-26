import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CheckBox = styled.i`
    margin-right: 12px;
    font-size: 15px;
    cursor: pointer;
`;


const ListItem = styled.div`
display: flex;
align-items: center;
height: 55px;
padding: 15px 26px;
transition: 0.3s;


input {
    flex: 1;
    outline: none;
    font-size: 22px;
    background: none;
    border: none;
    color: #fff;
}
`;

// const Wrapper = styled.div`
//     padding: 10px 14px;
//     border-radius: 3.5px;

// `;

const TrashBtn = styled.i`
    cursor: pointer;
    padding: 10px 14px;
    color: #d63031;
    border-radius: 4.5px;
    transition: all 0.35s;
    margin: 0 -12px 0 6.5px;

    &:hover {
        background-color: rgba(214, 48, 49, 0.35);
    }

    &:active {
        transform: scale(0.93);
    }
`;

const SaveBtn = styled.i`
    cursor: pointer;
    padding: 10px 14px;
    color: #00b894;
    transition: all 0.35s;
    border-radius: 4.5px;
    margin: 0 -12px 0 4.5px;
    font-size: 20px;

    &:hover {   
        background-color: rgba(0, 184, 148, 0.35);
    }

    &:active {
        transform: scale(0.93);
    }
`;

function TodoItem({ todoList, setTodoList, todo }) {

    const id = todo.id;
    const [editTodo, setEditTodo] = useState('');

    useEffect(() => {
        setEditTodo(todo.title);
    }, [todo]);

    const updateItem = () => {
        console.log(id);

        if (editTodo.trim() !== todo.title && editTodo.trim() !== '') {
            setTodoList(todoList.map(todo => todo.id === id ? {...todo, title: editTodo.trim()} : todo));
        } else if (editTodo.trim() === '') {
            console.log('empty string');
        }
    }

    const delItem = () => {
        // console.log(todo);
        const filtered = todoList.filter(todo => todo.id !== id);
        setTodoList(filtered);
    }

    return (
        <ListItem>
            <div onClick={ e => {} }>
                <CheckBox className="far fa-circle"  />
            </div>
            <input value={ editTodo } onChange={ e => setEditTodo(e.target.value) } type="text" />
            <div onClick={ updateItem }>
                <SaveBtn className="fas fa-check" />
            </div>
            <div onClick={ delItem } >
                <TrashBtn className="fas fa-trash-alt" />
            </div>
        </ListItem>
    )
}

export default TodoItem
