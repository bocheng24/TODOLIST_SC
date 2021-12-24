import React from 'react'
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
        background-color: rgba(76, 209, 55, 0.45);
    }
`;



function TodoList() {
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

                <input type="text" />

                <AddBtn>
                    <i className="fas fa-plus"></i>
                </AddBtn>
            </CategoryHeader>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </Wrapper>
    )
}

export default TodoList
