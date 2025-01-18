import 'dotenv/config'

// Import address from .env vars
const url = `http://${process.env.LOCAL_IP}:${process.env.LOCAL_PORT}`

// Get user info
const getUser = async (userId) => {
    
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

const authenticateUser = async () => {

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