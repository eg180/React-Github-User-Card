import React from 'react';


const UserCard = (props) => {
    return (
        <div>
            <img src={props.avatar} />
            <h1>{props.name} thinks he's cool.</h1>
        </div>
        )
}

export default UserCard;