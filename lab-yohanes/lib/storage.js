'use strict'

const debug = require('dubug')('http:storage')

const storage = module.exports = {}
const memory = {}
//impliment something like the following
// memory = {
//   'Notes': {
//     '1234.5678.9012': {
//       '_id': '1234.5678.9012',
//       'title': '',
//       'content': '',
//     },
//   },
//   'Categories': {
//     ...
//   },
// }

storage.create = function (schema, item) {
  debug('Created a new Thing')

  return new Promise((resolve, reject)=> {
    if(!schema || !item) return reject(new Error('Cannot create a new item; Scjema and Item required'))

    if(!memory[schema]) memory[schema] = {}

    memory[schema][item._id] = item //memory at schema at querry item id
    return resolve(memory[schma][item._id])
  })
}

stoarge.fetchOne = function () {
  return new Promise((resolve, reject) => {
    if (!schema || !item) return reject(new Error('Cannot create a new item; Scjema and Item required'))

    if (!memory[schema]) memory[schema] = {}

    memory[schema][item._id] = item //memory at schema at querry item id
    return resolve(memory[schma][item._id]) //fetch one by item._id
}

stoarge.fetchAll = function () {
  return new Promise((resolve, reject) => {
    if (!schema || !item) return reject(new Error('Cannot create a new item; Scjema and Item required'))

    if (!memory) memory = {}

    return resolve(memory) //fetch all data nested within memory
}

stoarge.update = function () {

  return new Promise((resolve, reject) => {
    if (!schema || !item) return reject(new Error('Cannot create a new item; Scjema and Item required'))

    if (!memory[schema]) memory[schema] = {}

    memory[schema][item._id] = new item //memory at schema at querry item id
    return resolve(memory[schma][new item._id])

}

stoarge.delete = function () {

}