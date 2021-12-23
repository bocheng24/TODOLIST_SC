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
    position: sticky;
    top: 0;
`;

const HeaderItem = styled.div`
    color: #fff;
    padding: 12px 18px;
    border-radius: 2px;

    span {
        margin-left: 10px;
        font-weight: 500;
    }

    &:hover {
        background-color: #2d3436;
        transition: 0.35s;
        cursor: pointer;
    }
`;

const Placeholder = styled.div`
    flex: 1;
`;

const Profile = styled.div`

    display: flex;
    align-items: center;
    
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
                <span>Dashboard</span> 
            </HeaderItem>

            <HeaderItem>
                <i className="fas fa-images"></i>
                <span>Collections</span>
            </HeaderItem>

            <Placeholder />

            <Profile>
                <img 
                src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="profileimg" />
            </Profile>
        </Wrapper>
    )
}

export default Header
