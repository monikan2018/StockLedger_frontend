'use strict'
const store = require('../store')
const trans_events = require('../transaction/events')

const signUpSuccess = function(response){
  $('#message').text("")
  $('#message').text("Successful sign-up! Please Sign-in to create your personal stock ledger!")
  $('#sign-up').trigger('reset')
}
const signUpFailure = function(){
  $('#message').text("Incorrect Username or Password.")
  $('#message').css('color','#CC0000')
  setTimeout(function(){
      $('#message').css('color','black')
  },2000)
  $('#sign-up').trigger('reset')
}
const signInSuccess = function(response){
  $('#total_trans').show()
  $('#message').text('Successfully signed-in: ')
  store.user = response.user
  trans_events.onGetCount()
  $('#signInModal').modal('hide')
//Disable sign-up and sign-in and enable password-change and sign out
  $('#nav-change-password').removeClass('nav-link disabled').addClass('nav-link')
  $('#nav-sign-out').removeClass('nav-link disabled').addClass('nav-link')
  $('#nav-sign-in').removeClass('nav-link ').addClass('nav-link disabled')
  $('#nav-sign-up').removeClass('nav-link').addClass('nav-link disabled')
  // console.log(store.user.token)
  $('#idInput').val(store.user.token)
  $('#btnAddNew').removeClass('disabled').addClass('enabled')
  $('#btnViewAll').removeClass('disabled').addClass('enabled')
  $('#sign-in').trigger('reset')
}
const signInFailure = function(){
  $('#message').text("Sign-in failed!")
  $('#message').css('color','#CC0000')
  setTimeout(function(){
      $('#message').css('color','black')
  },2000)
  $('#sign-in').trigger('reset')
}
const pwChangeSuccess = function(response){
  $('#message').text("Password changed!")
}

const pwChangeFailure = function(){
  $('#message').text("Password change failed!")
  $('#message').css('color','#CC0000')
  setTimeout(function(){
      $('#message').css('color','black')
  },2000)
  $('#change-password').trigger('reset')
}

const signOutSuccess = function(){
  $('#signOutModal').modal('hide')
  $('#message').text("Signed you out!")
  //Enable sign-up and sign-in and disable password-change and sign out
  $('#nav-change-password').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-out').removeClass('nav-link').addClass('nav-link disabled')
  $('#nav-sign-in').removeClass('nav-link disabled').addClass('nav-link ')
  $('#nav-sign-up').removeClass('nav-link disabled').addClass('nav-link')
  //hide the viewBar
  $('#btnAddNew').removeClass('enabled').addClass('disabled')
  $('#btnViewAll').removeClass('enabled').addClass('disabled')
  $('#record').hide()
  $('#total_trans').hide()
  setTimeout(function(){
      $('#message').text('')
  },800)
}
const signOutFailure = function(){
  $('#signOutModal').modal('hide')
  $('#message').text("Sign out Failed")
  $('#message').css('color','#CC0000')
  setTimeout(function(){
      $('#message').css('color','black')
  },2000)
}


module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure:signUpFailure,
  signInSuccess:signInSuccess,
  signInFailure:signInFailure,
  pwChangeSuccess:pwChangeSuccess,
  pwChangeFailure:pwChangeFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
