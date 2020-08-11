//transaction/events.js

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreate = function(event){
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.create(formData)
       .then(ui.createSuccess)
        .catch(ui.createFailure)
 }

 const onDelete = function(event){
   event.preventDefault()
   const id = $(event.target).closest('tr').data('id')
   console.log(id)
   api.destroy(id)
       .then(ui.deleteSuccess)
       .catch(ui.deleteFailure)
 }
 const onUpdate = function(event){
   event.preventDefault()
    const id = $(event.target).closest('tr').data('id')
   const formData = getFormFields(event.target)
   api.update(id,formData)
        .then(ui.updateSuccess)
        .catch(ui.updateFailure)

 }
 const onViewAll = function(event){
   event.preventDefault()
   api.index()
       .then(ui.indexSuccess)
       .catch(ui.indexFailure)
 }

 const onViewOne = function(){
   //event.preventDefault()
   const id = $(event.target).closest('tr').data('id')
   api.show(id)
       .then(ui.showSuccess)
       .catch(ui.showFailure)
 }


const addHandleBars=()=>{
  $('#form-create-update').on('submit',onCreate)
  $('#btnViewAll').on('click',onViewAll)
  $('.record').on('click','.update-trans',()=>{
       onViewOne()
      $('#form-create-update').on('submit',onUpdate)
    })
  $('.record').on('click','.delete-trans',onDelete)
}

module.exports ={
  onCreate,
  onViewAll,
  onDelete,
  onViewOne,
  onUpdate,
  addHandleBars
}
