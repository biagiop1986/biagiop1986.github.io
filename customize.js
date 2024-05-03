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
      c1 = 'rgb(20, 54, 54)';
      c2 = 'rgb(7, 64, 64)';
      c3 = 'rgb(61, 94, 94)';
    } else if (r == 2 || r == 5) {
      c1 = 'rgb(26, 26, 70)';
      c2 = 'rgb(10, 10, 90)';
      c3 = 'rgb(70, 70, 108)';
    } else if (r == 3 || r == 6) {
      c1 = 'rgb(54, 20, 54)';
      c2 = 'rgb(64, 7, 64)';
      c3 = 'rgb(94, 61, 94)';
    } else {
      c1 = 'rgb(70, 26, 26)';
      c2 = 'rgb(90, 10, 10)';
      c3 = 'rgb(108, 70, 70)';
    }

    $('.dark-bg').css( { backgroundColor: c1 } );
    $('b').css( { color: c2 } );
    $('h3').css( { color: c2 } );
    $('h4').css( { color: c2 } );
    $('.custom-header').css( { color: c2 } );
    $('.project-link-desc').css( { color: c2 } );
    $('.unisi').css( { color: c3 } );
}

function onLoad()
{
    removeContainer();
    pickColorOfDay();
}

$(window).on('resize', removeContainer);
$(window).on('load', onLoad);
