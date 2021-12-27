import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: calc(100vh - 75px);
    background-color: #20212d;
`;

const CategoryList = styled.div`

`;

const Title = styled.h2`

`;

const Category = styled.div`

`;

const CategoryIcon = styled.div`

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
