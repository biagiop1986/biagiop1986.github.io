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

function pickColorOfDay()
{
    const d = new Date();
    const r = d.getDay();

    if (r == 1 || r == 4) {
      style_sheet = 'style_green.css';
    } else if (r == 2 || r == 5) {
      style_sheet = 'style_blue.css';
    } else if (r == 3 || r == 6) {
      style_sheet = 'style_purple.css';
    } else {
      style_sheet = 'style_red.css';
    }

    $('head').append('<!-- Custom CSS -->');
    $('head').append('<link rel="stylesheet" type="text/css" href="' + style_sheet + '" />');
}

pickColorOfDay();

$(window).on('resize', removeContainer);
$(window).on('load', removeContainer);
