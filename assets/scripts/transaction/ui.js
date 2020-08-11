const store = require('../store')

const createSuccess =function(response){
  // if sucessfully added
  $("#message").text('Success to add record to your log')
  store.transaction = response.transaction
  console.log('transaction:',response)
  $("#trans-create").trigger('reset');
}

const createFailure = function(){
  $("#message").text('Failed to add record to your log')
}

const deleteSuccess = function(){
    $("#message").text('Record deleted from your log')
}
const deleteFailure = function(){
  $("#message").text('Failed to delete record to your log')
}

// const indexSuccess = function(response){
// }
const indexFailure = function(){
  $("#message").text('Failed to show records in your log')
}
const showTransactionTemplate = require('../templates/transaction-view.handlebars')

const indexSuccess = (data) =>{
    $("#message").text('Records in your log')
  console.log(data)
  const showTransactionHtml = showTransactionTemplate({transactions:data.transactions})
  $('.record').html(showTransactionHtml)
}

const showSuccess =function(response){
   $("#message").text(response.transaction)
   $('#nameInput').val(response.transaction.name)
   $('#typeInput').val(response.transaction.transaction_type)
   $('#exchangeInput').val(response.transaction.exchange)
   $('#qtyInput').val(response.transaction.quantity)
   $('#dateInput').val(response.transaction.date)
   $('#priceInput').val(response.transaction.price)
}


module.exports ={
  createSuccess,
  createFailure,
  deleteSuccess,
  deleteFailure,
  indexSuccess,
  indexFailure,
  showSuccess
}
