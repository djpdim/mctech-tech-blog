const sequelize = require("../config/connection")
const { User, Post } = require("../models")

const userdata = [
    {
        username: "djpim",
        email: "asdasde0@cba.com",
        password: "password123",
    },
    {
        username: "jwillimas",
        email: "jw@net.com",
        password: "password123",
    },
    {
        username: "hharg",
        email: "pala@mega.com",
        password: "password123",
    },
    {
        username: "dasdqwq",
        email: "iasdasd@yahoo.jp",
        password: "password123",
    },
    {
        username: "23ds",
        email: "23dsda4@win.com",
        password: "password123",
    },
    {
        username: "1dsd",
        email: "5asdas@imdb.com",
        password: "password123",
    },
    {
        username: "moro",
        email: "mpampis@mana.com",
        password: "password123",
    },
    {
        username: "trelos123",
        email: "tragkis@preza.com",
        password: "password123",
    },
    {
        username: "mastouris1",
        email: "koka8@colombia.com",
        password: "password123",
    },
    {
        username: "xapakias",
        email: "tsaperdokolonosfirikta@skoulikomermigkotripa.com",
        password: "password123",
    },
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true })

module.exports = seedUsers
