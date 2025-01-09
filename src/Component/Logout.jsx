import React from 'react'

export default function Logout() {
    function handleClick() {
        localStorage.setItem('auth','{}')
        //this will empty my localstorage ka dataBase and will redirect me to login page
        localStorage.removeItem('token')
        //this will redirect me to login page
        window.location.href = '/'
    }
    return (
        <div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
