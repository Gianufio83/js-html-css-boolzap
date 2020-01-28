$(document).ready(function () {
  $('.send-text').click(function () {
    sendMessage(); // funzione invio messaggio
  });
  $('.icon-search').click(function () {
    findContacts(); // funzione cerca il contatto
  })
  //  funzione al contatto mostra la conversazione
  $('.information-contact').click(function () {
    var conversazione = $(this).attr('data-conversazione');
    console.log(conversazione);
    var pannelloConversazione = $('.conversation[data-contact="' + conversazione + '"]' );
    // console.log("pannello: ", pannelloConversazione);
    $('.conversation').removeClass('active');
    pannelloConversazione.addClass('active');
    var name = $(this).find('.name').text();
    $('.contat-text .name-selected').text(name);
    var hour = $(this).find('.hours').text();
    $('.contat-text .timing').text(''+ hour);
  });

    $(document).on('click', '.message-options', function() {
    //toggleclass sull'elemento dropdown cliccato
      $(this).parent().siblings('.message-link').toggleClass('active');
    //togliamo la classe active ai dropdown di tutti gli altri message-link
      $(this).parents('.message').siblings('.message').find('.message-link').removeClass('active');
  });
    // viene cancellato il messaggio
    $(document).on('click', '.message-delete',
    function(){
      $(this).parents('.message').remove();

  });
    $('input-message').focus(function() {
      $('.send-text i').removeCass('fas fa-location-arrow').addClass('fas fa-microphone');
    }).blur(function() {
      $('.box-6 i').removeCass('fas fa-microphone').addClass('fas fa-location-arrow');
    });
});
// funzione invio messaggio
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

//  funzione risposta messaggio
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

// funzione che cerca tra i contatti
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
