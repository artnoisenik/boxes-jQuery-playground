console.log("hello world");

$(document).ready(function(){
  console.log( "ready!" );
});

$(function() {
  console.log( "double ready! ");

  // $('#secretBox').css({'background-color': 'white'});
  //
  // $('#secretBox').append( '<h1>secret box!</h1>' );
  //
  // $( '#row1' ).find( 'div' ).addClass( 'boxType3' );
  //
  // $( '#row4 div' ).last().hide();
  //
  // $( '.boxType1:not(.boxType3)' ).css({'background-color': 'white'});
  //
  // $( '#row2' ).children().slice( 0,2 ).removeClass();

  // $( '.box:not(#secretBox)').width('2px');

  $('#container').on('click', function(){

    console.log('x: ' + event.pageX + ', ' + 'y: ' + event.pageY);
      });

  $( '.boxType1' ).wrap( '<a href="http://galvanize.com"></a>' );

  $('.box').append('<img src="http://www.fillmurray.com/100/100" alt="muuray"/>')
  $('.box').children().hide();

  $('.box').on('click', function(){
      $(this).children().toggle()
  })


});
