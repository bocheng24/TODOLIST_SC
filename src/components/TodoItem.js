import React from 'react'
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

    const delItem = () => {
        // console.log(todo);
        const id = todo.id;
        const filtered = todoList.filter(todo => todo.id !== id);
        setTodoList(filtered);
    }

    return (
        <ListItem>
            <div onClick={ () => console.log('Check') }>
                <CheckBox className="far fa-circle"  />
            </div>
            <input value={ todo.title } onChange={ e => {} } type="text" />
            <div>
                <SaveBtn className="fas fa-check" />
            </div>
            <div onClick={ delItem } >
                <TrashBtn className="fas fa-trash-alt" />
            </div>
        </ListItem>
    )
}

export default TodoItem
