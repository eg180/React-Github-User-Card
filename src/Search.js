import React, { useState, useEffect } from 'react';

export default function Search(props) {
    const [username, setUsername] = useState('');

    const { newSearch, values } = props;
    

    const handleOnChange = e => {
        setUsername(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        console.log('executing newsearch')
        newSearch(username)
    }

    useEffect(() => {
        console.log(username);
    },[username]);

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>
                    <input value={username} onChange={handleOnChange} name="username" />                    
                </label>
                <button>Search by Username</button>
            </form>
            
        </div>
    )
}
