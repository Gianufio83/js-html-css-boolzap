$(document).ready(
  function(){
    $('#sending').keypress(function (event) {
      if (event.which == 13 || event.keynote == 13) {
        var testo = $('#sending').val();
        console.log(testo);
        var testoNuovo = $('.template p').clone();
        testoNuovo.append(testo);
        $('.lists').append(testoNuovo);
      }
    })
  }
);
