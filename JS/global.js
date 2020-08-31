




  document.addEventListener("DOMContentLoaded", () => {


   /*Menú de navegación*/
    var BtnMenu = document.getElementById("BtnMenu");
    var BtnCloseMenu = document.getElementById("BtnCloseMenu");
    var Nav = document.getElementById("nav");
    var NavLink = document.getElementById("nav-link");

    BtnMenu.style.cssText = "display:none;";
    BtnCloseMenu.style.cssText = "display:none;";

    BtnMenu.addEventListener("click", () => {
      Nav.classList.add("show-menu");
      Nav.style.cssText = "height:180px !important;";
      BtnMenu.classList.remove("nav-buttons-menu");
      BtnMenu.style.cssText = "display:none;";
      BtnCloseMenu.classList.add("nav-buttons-menu"); 
   });

    BtnCloseMenu.addEventListener("click", () => {
      Nav.classList.remove("show-menu");
      BtnCloseMenu.classList.remove("nav-buttons-menu");
      BtnCloseMenu.style.cssText = "display:none;";
      BtnMenu.classList.add("nav-buttons-menu");    
      Nav.style.cssText = "height:70px !important;";
      NavLink.style.cssText = "margin-left:15px;";
    });


    var ResizeEvent = (InnerWidth) => {

      if (innerWidth > 814) {

        Nav.classList.remove("show-menu");
        Nav.style.cssText = "height:70px !important;";
        BtnMenu.classList.remove("nav-buttons-menu");
        BtnMenu.style.cssText = "display:none;";
        BtnCloseMenu.classList.remove("nav-buttons-menu");
        BtnCloseMenu.style.cssText = "display:none;";
      
      } else {
        BtnMenu.classList.add("nav-buttons-menu");
        BtnCloseMenu.classList.remove("nav-buttons-menu");
        BtnCloseMenu.style.cssText = "display:none;";
      }

    }

    window.addEventListener("resize", () => {   
     ResizeEvent(window.InnerWidth)
    });


    window.onload = () => {
      BtnMenu.style.cssText = "display:none;";
      BtnCloseMenu.style.cssText = "display:none;";
      ResizeEvent(window.InnerWidth)
    }

     /*Termina menú de navegación*/


  });

