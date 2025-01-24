'use client'

import dotenv from 'dotenv';
dotenv.config();

// Import address from .env vars
const url = `http://${process.env.LOCAL_IP}:`

// Get user info
const getUser = async (userId) => {

    console.log("GETUSER")
    
    // Force handle for no current userId
    if (!userId) {
        userId === null;
    }

    await fetch(`${url}/get-user`, {
        method: 'POST',
        body: JSON.stringify(userId)
    })
    .then(data => data.json())
    //  inject into front end
    .then(data => console.log(data))
    .catch(err => console.error('Error: ', err))
}

const createNewUser = async () => {

}

const authenticateUser = async (userInfo) => {

    console.log(userInfo)
    console.log(url)

    // Input should already be validated
    await fetch(`${url}/auth-user`, {
        method: 'POST',
        body: JSON.stringify(userInfo)
    })
    .then(data => data.json())
    //  inject into front end
    .then(data => console.log(data))
    .catch(err => console.error('Error: ', err))
}

const addClock = async (userId) => {
    // hard code for convenience
}

const updateThemePreference = async (userId, themeName) => {
    // hard code 
}

export {
    getUser,
    createNewUser,
    authenticateUser,
    addClock,
    updateThemePreference
}