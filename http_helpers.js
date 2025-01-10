
// Import address from .env vars
const url = `http://${process.env.LOCAL_IP}:${process.env.LOCAL_PORT}`

// Get user info
const getUserInfo = async (userId) => {
    await fetch(url, {
        method: 'GET',
        // body: JSON.stringify(userId)
    })
    .then(data => data.json())
    .then(data => console.log(data.message))
    .catch(err => console.error('Error: ', err))
}

export {
    getUserInfo
}