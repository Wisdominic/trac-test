const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// const axios = require("axios");

const { createNewUser } = require("./users/Create_user");





exports.createNewUser = createNewUser
