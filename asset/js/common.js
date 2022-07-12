// @@조금이지만 es6사용!
    
/**
* 초기스크린 글자 움직임 + 화면 사라짐
* @version 1.0.0
* @since 2022-06-01
* @author 이유라 (Nico)
* @memo
* 자바 스크립트
* 바뀌지 않은 변수는 무조건 const
*/
function introMotion(){

    const intro = document.querySelector('.black-screen') 
    const char1 = document.querySelector('.char1') 
    const char2 = document.querySelector('.char2') 
    const char3= document.querySelector('.char3') 
    const char4 = document.querySelector('.char4') 

    const introTl = gsap.timeline({
        default:{//기본 공통값 세팅위치 예들들어 duration
            // duration:1,
        },
        onComplete:()=>{
            intro.remove()//intro 태그자체를 제거(블랙스크린 )
        }

    });

    introTl.from(char1,{xPercent:-100,yPercent:-100})//첫번째에만 introTl 선언해도됨
    .from(char2,{xPercent:100,yPercent:-100})
    .from(char3,{xPercent:-100,yPercent:100})
    .from(char4,{xPercent:100,yPercent:100})

    .to(intro,{
        opacity:0,
        scale:2,

    })
}
introMotion(); // 함수 호출은 함수 바깥에서 해야함






/**
* hover 메뉴 보이기
* @version 1.0.0
* @since 2022-06-01
* @author 이유라 (Nico)
* @memo
*/
const header = document.querySelector('.header-area');
const gnb = document.querySelector('.gnb-area');
const gnbHeight = gnb.offsetHeight;//gnb 높이 절대값선언
const gnbBtn = document.querySelector('.gnb-open');

//+ 위치
// 밑에와 동일함header.style.transform = 'translateY(-'+gnb.offsetHeight+'px)';
// header.style.transform = 'translateY(-'+gnb.offsetHeight+'px)';
header.style.transform = `translateY(-${gnbHeight}px)`;//>기본상태 세팅,height : top-100%와 동일(헤더 안보이도록 절대높이값 음수처리)
    //@@ `translatY(-${변수})` & px 대괄호 바깥!

gnbBtn.addEventListener('mouseover',()=>{//addEventListener:특정 함수를 실행할 수 있게 해줌
    header.style.transform = `translateY(0px)`;
})
header.addEventListener('mouseleave',()=>{
    header.style.transform = `translateY(-${gnbHeight}px)`;

})
//











/**
* 마우스 따라다니는 효과 + a태그 오버 시, 확대효과
* @version 1.0.0
* @since 2022-06-01
* @author 이유라 (Nico)
* @memo
* issue: client :보고있는 화면
*/

// 자바스크립트 보다 쓰기 쉽게 하는게 제이쿼리
const circle = document.querySelector(".circle");

// $('.circle').mp

document.addEventListener("mousemove", (e) => {
    //@@ css에서 position left:0 & top: 0 줘야만 밑에적용됨

    var mouseX = e.clientX;//= 마우스 좌표left값, clinet : 지금 보고있는 화면
    var mouseY = e.clientY;//= t마우스 좌표top값
    // circle.style.left = mouseX + 'px';
    // circle.style.top = mouseY + 'px';>> gsap로 간단히 구현가능
    // $('.circle').css('legt',)
    // 기능적인 모션은 gsap로 구현
    // ess6가 살짝다르고 조금 바뀌었음
    gsap.to(circle,.5,{ //=> .5초 적용

        x:mouseX,
        y:mouseY,

    })
});



// moustenter기능 차이점 공부
// moustover기능 보기
// moustleave기능 보기
// @@function (){}
// ()=>
// 문법 이 바뀐 거!!

// 모든a태그한테 걸어줌(foreach)

const aEL = document.querySelectorAll('a');
aEL.forEach(el=>{//el : this랑 똑같은거
    el.addEventListener('mouseover',()=>{ //위에 el이랑 똑같이 해야함
        gsap.to(circle,.5,{
            scale:2,
        })
    })
    el.addEventListener('mouseleave',()=>{
        gsap.to(circle,.5,{
            scale:1,
        })
    })
});







   
    
  









