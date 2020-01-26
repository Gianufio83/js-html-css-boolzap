$(document).ready(function () {
  $('.send-text').click(function () {
    sendMessage();
  });
  $('.icon-search').click(function () {
    findContacts();
  })
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
    setTimeout(getAnswer, 1000);
  }
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

function getAnswer() {
  var newAnswerText = $('.template .message').clone();
  newAnswerText.find('.message-text').text('OK');
  newAnswerText.addClass('received');
  $('.conversation').append(newAnswerText);

  newAnswerText.find('.message-time').text(time);
  newAnswerText.addClass('received');
  $('.conversation').append(newAnswerText);

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;
}

function findContacts() {
  var search = $('#search-name').val().toLowerCase();
  console.log(search);
  var contacts = $('.contat-text > h3').text();
  console.log(contacts);
  // var division = contacts.split();
  // console.log(division);



  $('contacts').each(
    function() {
      var contactName = $(this).text();
      console.log(contactName);
      search = true
      if (contacts.includes(contactName) == true && search == true) {
        console.log(contactName);
      }
      return contactName
    });

    // console.log(contacts);

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
