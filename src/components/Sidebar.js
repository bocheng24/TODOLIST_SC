import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: calc(100vh - 75px);
    background-color: #20212d;
`;

function Sidebar({ sidebarToggle }) {
    return (
        <Wrapper style={ {width: `${sidebarToggle ? '350px' : '85px'}`} }>
            
        </Wrapper>
    )
}

export default Sidebar
