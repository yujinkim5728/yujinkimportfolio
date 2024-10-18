document.addEventListener(`DOMContentLoaded`, function(){

window.addEventListener(`scroll`, function (){
  //aos
  AOS.init();


    console.log(window.scrollY)

    // 포트폴리오 클릭시 스크롤이동
    const fir = document.querySelector(`.port_top_fir`);

    fir.addEventListener(`click`, function(){
        window.scrollTo({
        top:12269,
        behavior: `instant`
        });
    });

    const sec = document.querySelector(`.port_top_sec`);

    sec.addEventListener(`click`, function(){
        window.scrollTo({
        top:3898,
        behavior: `instant`
        });
    });   

    const botSec = document.querySelector(`.port_bottom_sec`);

    botSec.addEventListener(`click`, function(){
        window.scrollTo({
        top:30349,
        behavior: `instant`
        });
    }); 

    const botThir = document.querySelector(`.port_bottom_thir`);

    botThir.addEventListener(`click`, function(){
        window.scrollTo({
        top:24782,
        behavior: `instant`
        });
    }); 


    // ---------------------------------
    // 메뉴버튼클릭시 스크롤이동
    const m = document.querySelector(`.menu1`);

    m.addEventListener(`click`, function(){
        window.scrollTo({
        top:960,
        behavior: `smooth`
        });
    }); 

    const n = document.querySelector(`.menu2`);

    n.addEventListener(`click`, function(){
        window.scrollTo({
        top:2112,
        behavior: `smooth`
        });
    }); 

    const l = document.querySelector(`.menu3`);

l.addEventListener(`click`, function(){
        window.scrollTo({
        top:3139,
        behavior: `smooth`
        });
    }); 

    // 상단이동버튼
      //300px 이상일때 top_btn 보여지게 (클래스명scroll)/ 클릭시 최상단으로 이동
  const topBtn = document.querySelector(`.top_btn`);

  window.addEventListener(`scroll`, function (){
    const scrollTop = window.scrollY;

    if (scrollTop >= 300) {
      topBtn.classList.add(`scroll`);
    } else {
      topBtn.classList.remove(`scroll`);
    }
  });

  topBtn.addEventListener(`click`, () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    });
  });







});  

});