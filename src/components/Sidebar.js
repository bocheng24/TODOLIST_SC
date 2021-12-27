import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: calc(100vh - 75px);
    background-color: #20212d;
    padding-left: 45px;
    transition: all 0.35s;
`;

const CategoryList = styled.div`

`;

const Title = styled.h2`
    margin-top: 45px;
    font-size: 32px;
    padding-left: 5px;
`;

const Category = styled.div`
    display: flex;
    align-items: center;
    margin-top: 55px;
    cursor: pointer;
    transition: all 0.25s;

    span {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.8px;
    }

    &:hover {
        transform: translateY(-2.5px);
    }

    &:active {
        transform: translateY(2.5px);
    }
`;

const CategoryIcon = styled.div`
    margin-right: 15px;
    padding: 12px 15px;
    border-radius: 8px;    
`;

function Sidebar({ sidebarToggle, todoCates}) {
    return (
        <Wrapper style={ {width: `${sidebarToggle ? '350px' : '85px'}`} }>
            <Title>{ sidebarToggle ? 'Collections' : 'C' }</Title>
            <CategoryList>
                {
                    todoCates.map( cate => (
                        <Category>
                            <CategoryIcon style={ {backgroundColor: `${cate.color}`} }>
                                <i class={ cate.icon }></i>
                            </CategoryIcon>
                            { sidebarToggle && <span>{ cate.title }</span> }
                        </Category>
                     ) )
                }
            </CategoryList>           
        </Wrapper>
    )
}

export default Sidebar
