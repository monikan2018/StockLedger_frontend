//auth/events.js

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

//To sign-up for the game
const onSignUp = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
       .then(ui.signUpSuccess)
       .catch(ui.signUpFailure)
 $('#signUpModal').modal('hide')
}
//To sign-in
const onSignIn = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
       .then(ui.signInSuccess)
       .catch(ui.signInFailure)
$('#signInModal').modal('hide')
}
//To change password
const onChangePassword = function(event){
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
       .then(ui.pwChangeSuccess)
       .catch(ui.pwChangeFailure)
$('#changePasswordModal').modal('hide')
}
//To sign-out
const onSignOut = function(){
  event.preventDefault()
  api.signOut()
     .then(ui.signOutSuccess)
     .catch(ui.signOutFailure)
}

module.exports = {
    onSignUp: onSignUp,
    onSignIn: onSignIn,
    onChangePassword: onChangePassword,
    onSignOut: onSignOut

}
