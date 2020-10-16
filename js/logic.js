
sessionStorage.theme = 'off'

// hide show nav setting

var prevScrollpos = window.scrollY;

var nav = document.getElementById('myTopnav');

window.addEventListener('scroll', () => {

  const currentScrollPos = window.scrollY;

  if(currentScrollPos === 0){

    if(sessionStorage.theme === 'off'){
      // light
      nav.classList.remove('nav-bg-light');

    }else if(sessionStorage.theme === 'on'){
      // night
      nav.classList.remove('nav-bg-night');
    }

}else{

    if(sessionStorage.theme === 'off'){
      // light
      nav.classList.add('nav-bg-light');

    }else if(sessionStorage.theme === 'on'){
      // night
      nav.classList.add('nav-bg-night');

    }

}

  //previuos > current scroll
  if (prevScrollpos > currentScrollPos) {
    //show
       document.querySelector('.topnav').classList.remove('hide')
  }else{
    //hide
   document.querySelector('.topnav').classList.add('hide')
}

  prevScrollpos = currentScrollPos;

});

// night and lightmode behavior
document.getElementById("darkmode-btn").addEventListener("click", function(){

  const themeValue = this.value

  // elements to be change

  const body = document.querySelector('body');

  const imgDefault = document.getElementById('img_default');

  const imgDefaultFooter = document.getElementById('img_default_footer');

  const topNav = document.getElementById('myTopnav');

  if (themeValue === 'off') {

    //light mode
    document.getElementById("darkmode-btn").value = 'on';

    imgDefault.style.transition = 'all 0.9s ease';

    imgDefaultFooter.style.transition = 'all 0.9s ease';

    // landing image
    imgDefault.style.opacity = 1;
    // footer image
    imgDefaultFooter.style.opacity = 1;


    body.classList.add('body-lht');

    body.classList.remove('body-drk');

    if(window.scrollY === 0){

        topNav.classList.remove('nav-bg-night');

        topNav.classList.remove('nav-bg-light');

    }else{

        topNav.classList.add('nav-bg-light');

        topNav.classList.remove('nav-bg-night');

    }
    
  }else if (themeValue === 'on'){

    // night mode
    document.getElementById("darkmode-btn").value = 'off';

    imgDefault.style.transition = 'all 0.9s ease';

    imgDefaultFooter.style.transition = 'all 0.9s ease';

    // landing image
    imgDefault.style.opacity = 0;
    // footer image
    imgDefaultFooter.style.opacity = 0;


    body.classList.add('body-drk');

    body.classList.remove('body-lht');

    if(window.scrollY === 0){

        topNav.classList.remove('nav-bg-night');

        topNav.classList.remove('nav-bg-light');

    }else{

        topNav.classList.add('nav-bg-night');

        topNav.classList.remove('nav-bg-light');
    }
  };

  sessionStorage.theme = themeValue;

  console.log(sessionStorage.theme);
})

// navigation behavior
function myFunction() {
  var x = document.getElementById("myTopnav");

  var menuIcon = document.getElementsByClassName('bar-container')

  var toggleBtn = document.getElementById('toggle-btn');

  // nav.classList.toggle('nav-bg-i');

  // console.log(window.scrollY);

  toggleBtn.classList.toggle('toggle-hide');

  menuIcon[0].classList.toggle("change");

  const currentScrollPos = window.scrollY;

  if(currentScrollPos === 0){

      if(sessionStorage.theme === 'off'){
                      //light
            if (x.className === "topnav") {

              x.className += " responsive";

              x.classList.toggle('nav-bg-light')
            } else {

              x.className = "topnav";
            }
        }else if(sessionStorage.theme === 'on'){
                // night
          if (x.className === "topnav") {

              x.className += " responsive";

              x.classList.toggle('nav-bg-night')
            } else {

              x.className = "topnav";
            }
        }

  }else{

      if(sessionStorage.theme === 'off'){
          // light
            if(x.className === "topnav"){

              x.className += " responsive";

              x.classList.add('nav-bg-light')

            }else if (x.className === "topnav nav-bg-light") {

              x.className += " responsive";

            } else {

              x.className = "topnav";

              x.classList.add('nav-bg-light')
            }

      }else if(sessionStorage.theme === 'on'){
              // night
            if(x.className === "topnav"){

                x.className += " responsive";

                x.classList.add('nav-bg-night')

            }else if (x.className === "topnav nav-bg-night") {

              x.className += " responsive";

            } else {

              x.className = "topnav";

              x.classList.add('nav-bg-night')
            }
          }
      }
}


// scrolling navigation setting
document.addEventListener("DOMContentLoaded", () => {
  //  little hack to detect if the user is on ie 11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  // get all the links with an ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
  // loop over all the links
  listOfLinks.forEach(function (link) {
    // listen for a click
    link.addEventListener('click',  () => {
      // toggle highlight on and off when we click a link
      listOfLinks.forEach( (link) => {
        if (link.classList.contains('highlighted')) {
          link.classList.remove('highlighted');
        }
      });
      link.classList.add('highlighted');
      // get the element where to scroll
      let ref = link.href.split('#sectionLink');
      ref = "#section" + ref[1];
      // ie 11 does not support smooth scroll, so we will simply scroll
      if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop);
      } else {

            const deviceWidth = window.innerWidth;

            if(deviceWidth > 600){

            }else{
          // close the navigation for mobile devices

              const icon = document.getElementsByClassName('icon');

              icon[0].click()

            }
        // scroll page
        window.scroll({
          behavior: 'smooth',
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop
        });
      }
    })
  })
})
