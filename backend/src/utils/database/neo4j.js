const neo4j = require('neo4j-driver')

const driver = neo4j.driver(process.env.GET_NEO4J_URI, neo4j.auth.basic(process.env.GET_NEO4J_USERNAME, process.env.GET_NEO4J_PASSWORD))

const session = driver.session({ database: process.env.GET_NEO4J_DATABASE })

module.exports = { driver, session }