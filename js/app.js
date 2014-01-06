$(document).foundation();
$(function()
{

  // nav bg color transitions
  var navItems = $('.nav .hoverNavLarge');
  navItems.hover(function()
    {
      $(this).stop(true, true).animate({ backgroundColor: "#000000" }, "slow");
    },
    function()
    {
      $(this).stop(true, true).animate({ backgroundColor: "#FFFFFF"}, 'slow');
    }
  )


  // function using closures to return handler object when invoked
  function navHandler()
  {
    // initialize properties
    var sections = ['.section.intro', '.section.summary', '.section.work', '.section.education', '.section.about'],
        count = 0,
        activePosistion = sections[count],
        animationTime = 800;

    function makeMovesTo(toElement)
    {
      $('html, body').stop(true, true).animate({ scrollTop : toElement.position().top }, animationTime, function()
        {
          console.log('animation done!');
        });
    }

    // return object
    return {
      gotoNext : function()
      {
        count = ( $(activePosistion).next().length ) ? count+=1 : 0;
        activePosistion = sections[count];
        makeMovesTo( $(activePosistion) );
      },
      goToPrev : function()
      {
        count = $(activePosistion).prev().length ? count-=1 : 4;
        activePosistion = sections[count];
        makeMovesTo( $(activePosistion) );
      },
      goToSelected : function(selected)
      {
        makeMovesTo( $(selected) );
      },
      setCount : function(num)
      {
        count = num;
        activePosistion = sections[count];
      }
    }
  }

  // DOM functions
  var navHandleObj = navHandler();
  $('a.menu').click(function(event)
  {
    event.preventDefault();
    $id = $(this).attr('id');
    func = $id == 'down' ? navHandleObj.gotoNext() : navHandleObj.goToPrev();
    func;
  })

  $('.navElements').hover(function()
  {
    $('.hoverNav').stop(true, true).fadeIn(300);
  },
  function()
  {
    $('.hoverNav').stop(true, true).fadeOut(300);
  })

  $('.threedotmenu').click(function(event)
  {
    event.preventDefault();
  })

  $('.hoverNav li a, .hoverNavLarge li a').click(function(event)
  {
    event.preventDefault();
    var mapTo = '.content.' + $(this).data('map');
    navHandleObj.setCount( $(this).data('index') );
    navHandleObj.goToSelected( mapTo );
  })

})

$(window).on('load', function()
{

  // detect mobile vs desktop
  if (Modernizr.touch) {

    $('a.menu').addClass('leftForMobile');

    $('.threedotmenu').click(function(event)
    {
      $('.hoverNav').stop(true, true).fadeIn(300);
    })

    $('.hoverNav a').click(function(event)
    {
      $('.hoverNav').stop(true, true).fadeOut(200);
    })
  }

  $('a.menu').css({ 'visibility' : 'visible' });
})