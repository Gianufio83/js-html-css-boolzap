$(document).ready(function () {
  $('.send-text').click(function () {
    sendMessage();
  });
  $('.icon-search').click(function () {
    findContacts();
  })
  $('.information-contact').click(function () {
    var conversazione = $(this).attr('data-conversazione');
    console.log(conversazione);
    var pannelloConversazione = $('.conversation[data-contact="' + conversazione + '"]' );
    // console.log("pannello: ", pannelloConversazione);
    $('.conversation').removeClass('active');
    pannelloConversazione.addClass('active');
    var name = $(this).find('.name').text();
    $('.contat-text .name-selected').text(name);
  });

    $(document).on('click', '.message-options', function() {
    //toggleclass sull'elemento dropdown cliccato
      $(this).parent().siblings('.message-link').toggleClass('active');
    //togliamo la classe active ai dropdown di tutti gli altri message-link
      $(this).parents('.message').siblings('.message').find('.message-link').removeClass('active');
  });
    $(document).on('click', '.message-delete',
    function(){
      $(this).parents('.message').remove();

  });
});

function sendMessage() {
  var textMessage = $('.input-message').val();
  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.conversation.active').append(newMessage);

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
  // newAnswerText.addClass('received');
  // $('.conversation').append(newAnswerText);

  newAnswerText.find('.message-time').text(time);
  newAnswerText.addClass('received');
  $('.conversation.active').append(newAnswerText);

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;
}

function findContacts() {
  var search = $('input').val().toLowerCase();
  console.log(search);
  $('.information-contact').each(
    function() {
      var contactName = $(this).find('.name').text().toLowerCase();
      console.log(contactName);
      if (contactName.includes(search) == true) {
        $(this).show();
      } else {
        $(this).hide();
      }
      return contactName;
    });
    $('.input').val('');
}
// Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato























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
