import React from 'react'
import styled from 'styled-components'

const CheckBox = styled.i`
    margin-right: 12px;
    font-size: 18px;
    cursor: pointer;
`;

const ListItem = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    padding: 15px 22px;
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

const TrashBtn = styled.i`
    cursor: pointer;
    padding: 10px 14px;
    color: #d63031;
    transition: all 0.35s;
    border-radius: 3.5px;
    margin: 0 -12px 0 6.5px;

    &:hover {
        background-color: rgba(214, 48, 49, 0.35);
    }
`;

const SaveBtn = styled.i`
    cursor: pointer;
    padding: 10px 14px;
    color: #00b894;
    transition: all 0.35s;
    border-radius: 6.5px;
    margin: 0 -12px 0 4.5px;

    &:hover {
        
        background-color: rgba(0, 184, 148, 0.35);
    }
`;

function TodoItem() {
    return (
        <ListItem>
            <CheckBox className="far fa-circle" />
            <input type="text" />
            <SaveBtn className="fas fa-check" />
            <TrashBtn className="fas fa-trash-alt" />
        </ListItem>
    )
}

export default TodoItem
