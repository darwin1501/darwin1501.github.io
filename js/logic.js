

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

        // x.classList.toggle('nav-bg')
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


  if (value === 'off') {

    document.getElementById("darkmode-btn").value = 'on';

  }else if (value === 'on'){

    document.getElementById("darkmode-btn").value = 'off';
  };


  console.log(value);
})