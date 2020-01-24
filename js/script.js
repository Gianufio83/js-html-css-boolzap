$(document).ready(function () {
  $('.send-text').click(function () {
    sendMessage();
  });
});

function sendMessage() {
  var textMessage = $('.input-message').val();
  // $('input.input-message').val('');
  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.conversation').append(newMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    $('.input-message').val('');
  }
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}



























// $(document).ready(
//   function(){
//     $('#sending').keypress(function (event) {
//       if (event.which == 13 || event.keynote == 13) {
//         var testo = $('#sending').val();
//         console.log(testo);
//         var testoNuovo = $('.template p').clone();
//         testoNuovo.append(testo);
//         $('.lists').append(testoNuovo);
//       }
//     })
//   }
// );
