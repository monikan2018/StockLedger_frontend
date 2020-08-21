'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const transEvents = require('./transaction/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

 $('#sign-up').on('submit',authEvents.onSignUp)
 $('#sign-in').on('submit',authEvents.onSignIn)
 $('#change-password').on('submit',authEvents.onChangePassword)
 $('#sign-out').on('click',authEvents.onSignOut)
 //$('#trans-delete').on('submit',transEvents.onDelete)
   transEvents.addHandleBars()
})
