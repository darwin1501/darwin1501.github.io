

// hide show nav

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

document.getElementById("darkmode-btn").addEventListener("click", function(){

  const themeValue = this.value

  // elements to be change

  const body = document.querySelector('body');

  const imgDefault = document.getElementById('img_default');

  const topNav = document.getElementById('myTopnav');

  if (themeValue === 'off') {

    //light mode
    document.getElementById("darkmode-btn").value = 'on';

    imgDefault.style.transition = 'all 0.9s ease';

    imgDefault.style.opacity = 1;


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

    imgDefault.style.opacity = 0;


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

//
function myFunction() {
  var x = document.getElementById("myTopnav");

  var menuIcon = document.getElementsByClassName('container')

  var toggleBtn = document.getElementById('toggle-btn');

  // nav.classList.toggle('nav-bg-i');

  console.log(window.scrollY);


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
