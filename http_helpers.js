// Define url address. Not from .env variables, because 
// it's hosted on a different port on the same machine
const url = `http://localhost:3306`

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

    // Input should already be validated
    return await fetch(`${url}/auth-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set Content-Type to application/json
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    //  inject into front end
    .then(data => data)
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