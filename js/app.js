$(document).foundation();
$(function()
{
  $(".main").onepage_scroll({
   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 750, // AnimationTime let you define how long each section takes to animate
   pagination: false, // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
   loop: true, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 1024 // You can fallback to normal page scroll by defining the width of the browser in which you want the responsive fallback to be triggered. For example, set this to 600 and whenever the browser's width is less than 600, the fallback will kick in.
  });




  // onepage_scroll funcs
  var navItems = $('nav ul');
  navItems.hover(function()
    {
      $('.nav').stop(true, true).animate({ backgroundColor: "#000000" }, "slow");
    },
    function()
    {
      $('.nav').stop(true, true).animate({ backgroundColor: "#FFF5DF"}, 'slow');
    }
  );




  var img = "<a class='show-for-small-only' href='#' id='menu'><img src='css/arrow-down.png' alt=''></a>";
  $('nav').append(img);

  var rotateMenuNum = 0;
  $('a#menu img').click(function()
    {
      rotateMenuNum+=1;
      that = this;
      function anim()
      {
        if( (rotateMenuNum%2) == 0 )
        {
          $(that).removeClass('rotateInactive');
          $(that).addClass('rotateActive');
        }
        else
        {
          $(that).addClass('rotateInactive');
          $(that).removeClass('rotateActive');
        }
      }
      $(this).parent().parent().parent().toggleClass('showMenu', 'slow');
      return anim();
    });
  // end onepage_scroll funcs




  (function()
  {
    var pages = ['what.we.do', 'beauty', 'seo.&.analytics', 'rates', 'contact.us'];

    $('nav li a').each(function(index)
    {
      $(this).text(pages[index]);
    });

      $('h2.header').each(function(index)
    {
      $(this).text(pages[index]);
    });
  })();

})