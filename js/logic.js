

// hide show nav

var prevScrollpos = window.scrollY;

var nav = document.getElementById('myTopnav');

window.addEventListener('scroll', () => {

  const currentScrollPos = window.scrollY;

  if(currentScrollPos === 0){

    nav.classList.remove('nav-bg');

}else{
    nav.classList.add('nav-bg');

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

      if (x.className === "topnav") {

        x.className += " responsive";

        x.classList.toggle('nav-bg')
      } else {

        x.className = "topnav";

      }

  }else{

      if(x.className === "topnav"){

        x.className += " responsive";

        x.classList.add('nav-bg')

      }else if (x.className === "topnav nav-bg") {

        x.className += " responsive";

        // x.classList.toggle('nav-bg')
      } else {

        x.className = "topnav";

        x.classList.add('nav-bg')
      }
  }

}

document.getElementById("darkmode-btn").addEventListener("click", function(){

  const value = this.value

  // const landingImg = document.getElementById('landing-img');

  const imgDefault = document.getElementById('img_default');

  if (value === 'off') {
    //light mode
    document.getElementById("darkmode-btn").value = 'on';

    // landingImg.classList.add('landing-img-light');

    // landingImg.classList.remove('landing-img-night');

    imgDefault.style.transition = 'all 0.9s ease';

    imgDefault.style.opacity = 1;
    

  }else if (value === 'on'){
    // night mode
    document.getElementById("darkmode-btn").value = 'off';

    // landingImg.classList.add('landing-img-night');

    // landingImg.classList.remove('landing-img-light');

    imgDefault.style.transition = 'all 0.9s ease';

    imgDefault.style.opacity = 0;

  };


  console.log(value);
})