
// DEFINE BACKEND URL ADDRESS IN .ENV FILE
// Gets backend URL from localstorage
const getBackendUrl = () => {
  const storedUrl = localStorage.getItem("backendUrl");
  return storedUrl || process.env.BACKEND_URL || "http://localhost:3306";
}

const createNewUser = async (userInfo) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  // Input should already be validated
  return await fetch(`${url}/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error("Error: ", err));
};

const findUser = async (userId) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  // Input should already be validated
  return await fetch(`${url}/find-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ userId: userId }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error("Error: ", err));
};

const authenticateUser = async (userInfo) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  // Input should already be validated
  return await fetch(`${url}/auth-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error("Error: ", err));
};

// Packages http post request to get user clocks based on ID input
// User has already been validated by virtue of up front login screen
const getUserClocks = async (userId) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  // Input should already be validated
  return await fetch(`${url}/get-user-clocks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ userId: userId }),
  })
    .then((res) => res.json())
    .then((data) => data.clocks)
    .catch((err) => console.error("Error: ", err));
};

// Add clock to a user
const addClock = async (userId) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  return await fetch(`${url}/create-clock`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ userId: userId }),
  })
    .then((res) => res.json())
    .then((data) => data.newClock)
    .catch((err) => console.error("Error: ", err));
};

const deleteClock = async (clockId) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  return await fetch(`${url}/delete-clock`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ clockId: clockId }),
  })
    .then((res) => res.json())
    .then((data) => data.newClock)
    .catch((err) => console.error("Error: ", err));
};

const updateClock = async (clockId, changeObj) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  return await fetch(`${url}/update-clock`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ clockId: clockId, changeObj: changeObj }),
  })
    .then((res) => res.json())
    .then((data) => data.result)
    .catch((err) => console.error("Error: ", err));
};

const editUser = async (userId, changeObj) => {
  // Grab url from localstorage
  const url = getBackendUrl();
  return await fetch(`${url}/edit-user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
    body: JSON.stringify({ userId: userId, changeObj: changeObj }),
  })
    .then((res) => res.json())
    .then((data) => data.user.theme_preference)
    .catch((err) => console.error("Error: ", err));
};

const pingServer = async (backendUrlOrIp) => {
  return await fetch(`${backendUrlOrIp}/test-server`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Set Content-Type to application/json
    },
  })
  .then((res) => res)
  .then((data) => data)
  .catch((err) => err)
}

export {
  createNewUser,
  getUserClocks,
  authenticateUser,
  addClock,
  deleteClock,
  updateClock,
  editUser,
  findUser,
  pingServer,
};
