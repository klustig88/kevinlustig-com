$(document).ready(function () {
  $('.tab').hide();
  $('#tab1').show();
  $('.tabs li a').click(function() {
    $('.tab').hide();
    $('.tabs li').removeClass( 'active' )
    $(this).parent().addClass('active')
    $($(this).attr("href")).show();
  });
 
});