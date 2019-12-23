$(function() {

  $('#start').click(startGame);
  $('#checkLock').click(openClock);
  $('#output').hide();
  var secretNum = '';



  function startGame() {
    secretNum = Math.floor(Math.random()*(999-100+1) + 100).toString();
    console.log(secretNum);
    $('#start').hide();
    $('#output').show();
    for (let value = 0; value < $('input[type="number"]').length; value++) {
      $('input[type="number"]').eq(value).val('5');
      $('input[type="number"]').css({
        backgroundColor: '#333'
      })
    }
    $('small').text('Màu đỏ cần số nhỏ hơn, màu xanh cần số lớn hơn,Màu xanh là đúng');
  }

  function openClock() {
    var win = 0;

    for (let value = 0; value < $('input[type="number"]').length; value++) {
      var guessNumber = $('input[type="number"]').eq(value);

      var result = checkNumber(secretNum[value],guessNumber.val());

      guessNumber.css({
        backgroundColor: result.backgrd
      });

      if (result.checker) {
        win++;
      }
    }

    console.log(win);

    if (win === 3) {
      $('#start').show();
      $('small').html('Winnnnn!!!!<br>' + secretNum)
    }
  }

  function checkNumber(guessNum,secretNum) {
    var respond = {};

    if (guessNum < secretNum) {
      respond.checker = false;
      respond.backgrd = 'red';
    }

    if (guessNum > secretNum) {
      respond.checker = false;
      respond.backgrd = 'blue';
    }

    if (guessNum === secretNum) {
      respond.checker = true;
      respond.backgrd = 'green';
    }



    return respond;
  }

  $('input[type="number"]').css({
    color: 'white',
    fontSize: '3em',
    width: '60px',
    border: '1px solid black',
    backgroundColor: 'black'
  });

$('.btn').css({
  backgroundColor: 'black',
  color: 'white',
  width: '160px',
  fontSize: '1.5em',
  padding: '15px',
  margin: '25px auto 0px',
  border: '1px solid black',
  textAlign: 'center',
  cursor: 'pointer'
});

$('#output').css({
  backgroundColor: '#333',
  width: '300px',
  padding: '15px',
  border: '1px solid black',
  textAlign: 'center',
  margin: '5px auto'
});

$('small').css({
  color: 'white',
  fontSize: '1em',
  padding: '15px',
  marginBottom: '15px',
  display: 'block'
});



})
