import moment from 'moment'
const store = require('../store')
const showTransactionTemplate = require('../templates/transaction-view.handlebars')




  const createSuccess =function(response){
    // if sucessfully added
    $('#addNewModal').modal('hide')
    $("#message").text('Successfully added Record: ')
    store.transaction = response.transaction
    $("#form-create").trigger('reset')
  }

  const createFailure = function(){
    $('#addNewModal').modal('hide')
    $("#message").text('Failed to add record to your log')
    $('#message').css('color','#CC0000')
    setTimeout(function(){
        $('#message').css('color','black')
    },2000)
  }

  const updateSuccess= function(){
    $('#updateModal').modal('hide')
    $("#message").text('Record updated: ')
    $('#form-update').trigger('reset')
  }

  const updateFailure = function(){
    $('#updateModal').modal('hide')
    $("#message").text('Failed to update record.')
    $('#message').css('color','#CC0000')
    setTimeout(function(){
        $('#message').css('color','black')
    },2000)
  }

  const deleteSuccess = function(event){
      $("#message").text('Record deleted: ')
  }

  const deleteFailure = function(){
    $("#message").text('Failed to delete record to your log')
    $('#message').css('color','#CC0000')
    setTimeout(function(){
        $('#message').css('color','black')
    },2000)
  }

  // const indexSuccess = function(response){
  // }
  const indexFailure = function(){
    $("#message").text('Failed to show records in your log')
    $('#message').css('color','#CC0000')
    setTimeout(function(){
        $('#message').css('color','black')
    },2000)
  }
  //Handlebars implementation

  const indexSuccess = (data) =>{
    totalRecords(data)
    const showTransactionHtml = showTransactionTemplate({transactions:data.transactions})
    $('.record').html(showTransactionHtml)
    $('#record').show()
  }
  const viewUpdateSuccess = (data) =>{
    $("#message").text('Updated Log: ')
    const showTransactionHtml = showTransactionTemplate({transactions:data.transactions})
    $('.record').html(showTransactionHtml)
    $('#record').show()
    totalRecords(data)
  }
  function totalRecords (data) {
    let totalRecords = data.transactions.length
    $("#total_trans").text(` You have ${totalRecords} transactions in your portfolio!`)
  }
  const getCountSuccess = (data) =>{
    let totalRecords = data.transactions.length
    $("#total_trans").text(` You have ${totalRecords} transactions
      in your portfolio!`)
  }
  const getCountFailure = (data) =>{
    $("#message").text('Failed to get transactions count')
  }

  const showSuccess =function(response){
     $('#idInput').val(response.transaction._id)
     $('#nameUpdate').val(response.transaction.name)
     $('#typeUpdate').val(response.transaction.transaction_type)
     $('#exchangeUpdate').val(response.transaction.exchange)
     $('#qtyUpdate').val(response.transaction.quantity)
     let value = moment(response.transaction.date).add(1, 'day').format('L')
     $('#dateUpdate').val(value)
     $('#priceUpdate').val(response.transaction.price)
  }

  module.exports ={
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  viewUpdateSuccess,
  deleteSuccess,
  deleteFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  getCountSuccess,
  getCountFailure
}
