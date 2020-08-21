//transaction/events.js

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

//to create record
const onCreate = function(event){
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.create(formData)
       .then(ui.createSuccess)
       .then(onViewUpdate)
        .catch(ui.createFailure)
 }

//to delete record
 const onDelete = function(event){
   event.preventDefault()
   const id = $(event.target).closest('tr').data('id')
   console.log(id)
   api.destroy(id)
       .then(ui.deleteSuccess)
       .then(onViewUpdate)
       .catch(ui.deleteFailure)
 }

 //to update records
 const onUpdate = function(event){
  event.preventDefault()
  //const id = $('#idInput').val()
  const formData = getFormFields(event.target)
  const id = formData.idInput
  console.log(id,'onUpdate')
  console.log(formData)
  api.update(id,formData)
        .then (ui.updateSuccess)
        .then (onViewUpdate)
        .catch(ui.updateFailure)

 }
 // to fetch all records
 const onViewAll = function(event){
   event.preventDefault()
   api.index()
       .then(ui.indexSuccess)
       .catch(ui.indexFailure)
 }
// to fetch records after update
 const onViewUpdate = function(){
   api.index()
       .then(ui.viewUpdateSuccess)
       .catch(ui.viewUpdateFailure)
 }
// to get single record
 const onViewOne = function(event){
   event.preventDefault()
   const id = $(event.target).closest('tr').data('id')
   console.log(id, 'onViewOne')
   api.show(id)
       .then(ui.showSuccess)
       .catch(ui.showFailure)
 }

const addHandleBars=()=>{
  $('#form-create').on('submit',onCreate)
  $('#btnViewAll').on('click',onViewAll)
  $('.record').on('click','.update-trans',onViewOne)
  $('#form-update').on('submit',onUpdate)
  $('.record').on('click','.delete-trans',onDelete)
}

module.exports = {
  onCreate: onCreate,
  onViewAll: onViewAll,
  onViewUpdate: onViewUpdate,
  onDelete: onDelete,
  onViewOne: onViewOne,
  onUpdate: onUpdate,
  addHandleBars: addHandleBars
}
