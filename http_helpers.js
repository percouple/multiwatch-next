// Define url address. Not from .env variables, because 
// it's hosted on a different port on the same machine
const url = `http://localhost:3306`

// Get user info
// const getUser = async (userId) => {

//     console.log("GETUSER")
//     // Force handle for no current userId
//     if (!userId) {
//         userId === null;
//     }

//     await fetch(`${url}/get-user`, {
//         method: 'POST',
//         body: JSON.stringify(userId)
//     })
//     .then(data => data.json())
//     //  inject into front end
//     .then(data => console.log(data))
//     .catch(err => console.error('Error: ', err))
// }

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

// Packages http post request to get user clocks based on ID input
// User has already been validated by virtue of up front login screen
const getUserClocks = async (userId) => {

    // Input should already be validated
    return await fetch(`${url}/get-user-clocks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set Content-Type to application/json
        },
        body: JSON.stringify({userId: userId})
    })
    .then(res => res.json())
    .then(data => data.clocks)
    .catch(err => console.error('Error: ', err))
}

const addClock = async (userId) => {

    return await fetch(`${url}/create-clock`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Set Content-Type to application/json
        },
        body: JSON.stringify({userId: userId})
    })
    .then(res => res.json())
    .then(data => data.newClock)
    .catch(err => console.error('Error: ', err))
}

const updateThemePreference = async (userId, themeName) => {
    // hard code 
}

export {
    // getUser,
    createNewUser,
    getUserClocks,
    authenticateUser,
    addClock,
    updateThemePreference
}