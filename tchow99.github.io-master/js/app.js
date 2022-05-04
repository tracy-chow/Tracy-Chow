$(document).ready(function() {
    console.log( "ready!" );

});


$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});