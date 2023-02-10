const express = require('express')
const { login, register } = require('../controllers/user.controllers')
const router = express.Router()

module.exports = routes = (app) => {
    router.post("/login", login);
    router.post("/register", register)
    app.use(router)
}