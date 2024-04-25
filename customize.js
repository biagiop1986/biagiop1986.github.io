function removeContainer()
{
    if($(window).width() < 991) {
      $('.no-pad-small-screen').removeClass('container');
      $('.nav-margin').css( { marginLeft: 20 });
    } else {
      $('.no-pad-small-screen').addClass('container');
      $('.nav-margin').css( { marginLeft: 0 });
    }
}

$(window).on('resize', removeContainer)
$(window).on('load', removeContainer)