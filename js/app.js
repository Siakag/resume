$(document).foundation();
$(function()
{
  $.fn.fullpage({
    verticalCentered: false,
    resize : false,
    slidesColor : ['#ccc', '#fff'],
    anchors:['what.we.do', 'beauty', 'seo.&.analytics', 'rates', 'contact.us'],
    scrollingSpeed: 550,
    easing: 'linear',
    menu: true,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: [],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopBottom: true,
    loopTop: true,
    loopHorizontal: false,
    autoScrolling: true,
    scrollOverflow: false,
    css3: false,
    paddingTop: '0em',
    paddingBottom: '0px',
    fixedElements: '#element1, .element2',
    normalScrollElements: '#element1, .element2'
  });


  (function(){
    var currentScroll = 0;
    $('.contentHolder').scroll(function(event){
        var st = $(this).scrollTop();
        if (st > currentScroll){
          var s = st+(st/100);
          $('html, body').animate({scrollTop: s});
          console.log(s);
        }
        else {
          // $(window).animate({scrollTop: st+100});
        }
        currentScroll = st;
    });
  })();

  // nav funcs
  var navItems = $('#fullPage-nav ul');
  navItems.hover(function()
    {
      $('.nav').stop(true, true).animate({ backgroundColor: "#000000" }, "slow");
    },
    function()
    {
      $('.nav').stop(true, true).animate({ backgroundColor: "#FFF5DF"}, 'slow');
    }
  );

  var img = "<a class='' href='#' id='menu'><img src='css/arrow-down.png' alt=''></a>";
  // $('#fullPage-nav').append(img);
  $('body').append(img);

  var rotateMenuNum = 0;
  $('a#menu img').click(function()
    {
      rotateMenuNum+=1;
      that = this;
      function anim()
      {
        if( (rotateMenuNum%2) == 0 )
        {
          $('#fullPage-nav').stop(true, true).animate({'top':'-145px'}, 1000);
          $(that).removeClass('rotateInactive');
          $(that).addClass('rotateActive');
        }
        else
        {
          $('#fullPage-nav').stop(true, true).animate({'top':'130px'}, 1000);
          $(that).addClass('rotateInactive');
          $(that).removeClass('rotateActive');
        }
      }
      return anim();
    });


  // add dynamic content to nav and h2s
  (function()
  {
    var pages = ['what.we.do', 'beauty', 'seo.&.analytics', 'rates', 'contact.us'];

    $('#fullPage-nav li a').each(function(index)
    {
      $(this).text(pages[index]);
    });
  })();
  // end dynamic content
})

$(window).load(function(){
  $('nav ul a').click(function(event)
  {
    var id = '#section' + this.id;
    // var target = $(id).offset().top;
    var target = $(id).position().top;
    panToSection(this, target);
    // event.preventDefault();
  })
})

function activeNavItem()
{
  $('nav li a').removeClass('active');
  var active = 'a#' + $('.main').find('section.active').data('index');
  $(active).addClass('active');
}

function panToSection(el, target)
{
  $('nav li a').removeClass('active');
  $("html, body").animate({ scrollTop: target }, 1000);
  $(el).addClass('active');
  console.log(target);
}