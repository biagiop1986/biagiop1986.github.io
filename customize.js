function removeContainer()
{
    if($(window).width() < 991) {
      $('.no-pad-small-screen').removeClass('container');
    } else {
      $('.no-pad-small-screen').addClass('container');
    }
}

$(window).on('resize', removeContainer)
$(window).on('load', removeContainer)