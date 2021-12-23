import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #20212d;
    height: 75px;
    padding: 0 25px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.35);
`;

const HeaderItem = styled.div`
    color: #fff;
    
`;


const Profile = styled.div`
    
    img {
        width: 35px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <Wrapper>
            <HeaderItem>
                <i className="fas fa-bars"></i>
            </HeaderItem>

            <HeaderItem>
                <i className="fas fa-border-all"></i>
                Dashboard
            </HeaderItem>

            <HeaderItem>
                <i className="fas fa-images"></i>
                Collections
            </HeaderItem>

            <Profile>
                <img 
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="profileimg" />
            </Profile>
        </Wrapper>
    )
}

export default Header
