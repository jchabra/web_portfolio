$(function(){

  $('#header a').click(scroll);

  $(window).scroll(showReturn);
  $(window).resize(showReturn);
  $('#returntotop').click(returnTop);

});

function scroll()
{
  $.scrollTo( this.hash, 900, { easing: 'easeOutQuad', axis: 'y' });
  return false;
  // need return false so that the href normally there doesn't fire off
}

function returnTop()
{
  $.scrollTo( "#wrapper", 900, { easing: 'easeOutQuad', axis: 'y' });
}

function showReturn()
{
  if (($(this).scrollTop() > $('#portfolio').position().top) && ($('#about').children().children('.four').width() < 370))
    {
        $('#returntotop').fadeIn();
    }
  else
    {
        $('#returntotop').fadeOut();
    }
}



