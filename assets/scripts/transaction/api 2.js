'use strict'

const config = require('../config')
const store = require('../store')

const index = function() {
  //make GET request to /transactions
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/transactions',
    method: 'GET'
  })
}
const create = function(formData){
  console.log("entering here")
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/transactions',
    method:'POST',
    data: formData
 })
}

const update = function (id,formData) {
  return $.ajax({
    url: config.apiUrl + `/transactions/` + id,
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    method:'PATCH',
    data: formData
  })
}

const show = function(id){
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url:config.apiUrl + `/transactions/` + id,
    method:'GET'
  })
}


const destroy = function(id){
  return $.ajax({
    headers:{
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + `/transactions/` + id,
    method:'DELETE'
  })
}

module.exports = {
  index,
  show,
  update,
  create,
  destroy
}
