import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    margin-top: 1rem;
    border-radius: 10px;
    background-color: #f0efeb;
    padding: 1rem;
    span {
        color: red;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>Github Profile Search</h1>
            <p>Made with <span>♥️</span> by Erick Gonzalez</p>
        </StyledHeader>
    )
}
