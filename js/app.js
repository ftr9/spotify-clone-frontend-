
const songsScroll = document.querySelector(".types"); 
songsScroll.addEventListener("scroll",()=>{
   
    if(songsScroll.scrollTop>=50){

        document.querySelector(".container__middle__topnav").style.backgroundColor = "black";

    }else{

        document.querySelector(".container__middle__topnav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    }

})