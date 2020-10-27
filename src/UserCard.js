import React from 'react';
import styled from 'styled-components';


const GitHubCardDiv = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-weight: 700;
    }
    margin-top: 5rem;
    background-color: #003049;
    max-width: 75vh;
    img {
        max-width: 55%;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .text-container-div {
        color: white;
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        font-size: 1.75rem;
    }
`


const UserCard = (props) => {
    return (
        <GitHubCardDiv>
            <img src={props.avatar} />
            <div className="text-container-div">
                <p><span>Name:</span> {props.name}</p>
                <p><span>Followers:</span> {props.followers}</p>
            </div>
        </GitHubCardDiv>
        )
}

export default UserCard;