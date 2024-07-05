// const db = require("./dbfunnel");

async function findUser(username) {
  try {
    console.log("Finding user:", username);
    const user = await db("users").where("username", username).first();
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

function getClocks(userId) {
  return db("clocks").select("*").where("userId", userId);
}

async function createNewUser(username, password) {
  let newId;
  try {
    const nanoid = await import("nanoid");
    newId = nanoid.nanoid();
  } catch (err) {
    newId = Math.random() * 10000;
    console.error("Error importing nanoid, generating random number:", err);
  }
  return db("users").insert({
    username,
    password,
    userId: newId,
  });
}

module.exports = {
  findUser,
  getClocks,
  createNewUser,
};
