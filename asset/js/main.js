    /** 
    * 메인 비주얼 화면 확대 + 스크롤 시, 되감기
    * @version 1.0.0
    * @since 2022-06-06
    * @memo 
    */
    const visualImg = document.querySelector('.sc-visual .img-box');
    gsap.to(visualImg,{
        scrollTrigger:{
            trigger:visualImg,
            start: "top top",
            end:"bottom 50%",
            // markers:true,
            scrub:1,
        },
        scale:1.3,
    });








    /** 
    * 모든 영역 중, 이미지 펼쳐지는 효과
    * @version 1.0.0
    * @since 2022-06-06
    * @memo 
    */

   const blindArea = document.querySelectorAll('.blind-area');
    // @@ 클라스 더함
    // @@foreach 구문에서 array에 변경할 변수 넣기 (foreach: 각각모두지정)
    blindArea.forEach(el => {
        const blindChild = document.createElement('div')//div클라스 생성
        blindChild.classList.add('line');//line클라스 더함(= .addclass)
        el.appendChild(blindChild); //append 더함
    });
    // @@ css에서 line을 width100% 검정bg로 설정해놓음
    const blindLine = document.querySelectorAll('.blind-area .line');
    blindLine.forEach(el => {
        gsap.to(el,{//width100%에서 width0%로 설정해야하므로 gsap.to사용
            scrollTrigger:{
                trigger:el,
                start:"top 80%",
                end:"bottom top",
                // markers:true,
            },
            width:0,//너비 0으로 제거
            duration:1,
        })
        
    });



   
 








    /** 
    * 이미지가 가운데에서 왼쪽 오른쪽으로 펼쳐짐 + 되감기
    * @version 1.0.0
    * @since 2022-06-07
    * @memo 
    */
    const banner = document.querySelector('.sc-intro .img-box');
    const leftBanner = document.createElement('span')
    const rightBanner = document.createElement('span')

    leftBanner.classList.add('left');//css에서 left클라스적용됨
    rightBanner.classList.add('right');//css에서 right클라스적용됨

    // @@append는 2개 가능
    banner.append(leftBanner,rightBanner);

    bannerTl = gsap.timeline({
        scrollTrigger:{
            trigger:banner,
            start:"top bottom",
            end:"bottom 50%",
            // markers:true,
            scrub:1,
        },


    })

    bannerTl.addLabel('label1')//문서의 지정된 위치에 지정된 크기의 새 Label 컨트롤을 추가
    .to(leftBanner,{width:0},'label1')
    .to(rightBanner,{width:0},'label1')







    
    /** 
    * GSAP 스크롤 방향에 따른 되감기
    * @version 1.0.0
    * @since 2022-06-05
    * @author 이유라
    * @memo
    */
    
    // @@ es6로 수정필요

    // $('[data-scrub]').each(function(index,element){
    //     gsap.to(element,{
    //         scrollTrigger:{
    //             trigger:element,
    //             start:"top bottom",
    //             end:"bottom top",
    //             scrub:1,
    //             // markers:true,
    //         },
    //         // x:40,
    //         duration:2,
    //         xPercent:-50,
    //     })
    // })//


    const scrubArea = document.querySelector('.scrub-area');

    gsap.to(scrubArea,{
        scrollTrigger:{
            trigger:scrubArea,
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // markers:true,
        },
        // x:40,
        duration:2,
        xPercent:-50,
    });
        







   

    /** 
    * 마우스 움직임에 따라 circle 움직임 + 클릭 시, video 삽입
    * @version 1.0.0
    * @since 2022-06-05
    * @author 이유라
    * @memo
    */

    const circleWrap= document.querySelector('.sc-personal .circle-wrap');
    const imgBox= document.querySelector('.sc-personal .img-box');
    
    // e.currentTarget : this (circleWrap)
        circleWrap.addEventListener('mousemove', (e) =>{
            const x = ((-e.currentTarget.offsetWidth /2) + e.offsetX ) * 0.6; // =>0.6 속도조절
            const y = ((-e.currentTarget.offsetWidth /2) + e.offsetY ) * 0.6; 

            gsap.to(circleWrap,{
                x:x,
                y:y,
            })

        })
        circleWrap.addEventListener('mouseleave', (e) =>{
           
            gsap.to(circleWrap,{
                transform:"translate(0,0)",
            })

        })
    
        circleWrap.addEventListener('click', (e)=>{
            const img = document.querySelector('.sc-personal img');
            const iframeBox = document.createElement('div');//div를먼저 생성하고
            iframeBox.classList.add('iframe-box')//iframe-box 클라스 주기
            iframeBox.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7UWBYJjuIL0?autoplay=0&controls=1&autohide=1&wmode=opaque&rel=0&enablejsapi=1&origin=https%3A%2F%2Fibighit.com&widgetid=7" allowfullscreen></iframe>`;
            //** innerHTML은 'Element'의 속성으로, 해당 Element의 HTML, XML을 읽어오거나, 설정할 수 있음


            // 쌍따옴표가 안에 잇어서 겉에는 작은 따옴표 아니면 ` 넣어줘야함(자판에 1 왼쪽 `)
            imgBox.append(iframeBox);
            e.currentTarget.remove();
            img.remove();//이미지 제거

        })


    // @@ 참고
    // gsap.to(element,{
    //     scrollTrigger:{
    //         trigger:circleWrap,
    //         transform:"translate("+ x + "px," + y + "px)"
    //     },
    
    // })
    
    // $(".btn_open_menu").mousemove(function(e){
    //     var x = ((-$(this).width() / 2) + e.offsetX) *0.6;    
    //     var y = ((-$(this).height() / 2) + e.offsetY) *0.6;
    //     gsap.to(".btn_open_menu_wrap", {
    //       transform: "translate(" + x + "px," + y + "px)"
    //     })
    //   })
    
    //   $(".btn_open_menu").mouseleave(function(e){
    //     gsap.to(".btn_open_menu_wrap", {
    //       transform: "translate(0,0)"
    //     })
    //   })




     

// jquary
$(function () {
    /**
    * Effect 없는 스와이퍼
    * @version 1.0.0
    * @since 2022-06-02
    * @memo 
    */

    var swiper = new Swiper(".sc-intro .swiper",{
        loop:true,
        autoplay:{
            delay:600,
            disableOninteraction :false,
        },
        effect : 'fade',//효과 사라짐
        fadeEffect:{
            crossFade : true,
        },
        observer: true,  
        observeParents: true,
      
    });




    /**
    * 오버 시, 텍스트 밑에 밑줄 효과
    * @version 1.0.0
    * @since 2022-06-04
    * @author 이유라
    * @memo 
    * issue : hover list만 텍스트 밑에 밑줄 효과!
    * > find 사용
    */
    

    $('.sc-artist .artist-item').hover(function(){
        // $(this).siblings.removeClass('white')
        // $('.sc-portfolio .u-line').addClass('white');
        $(this).find('.u-line').addClass('white');
    },function(){
        // $('.u-line').removeClass('white')
        // $('.sc-portfolio .u-line').removeClass('white');
        $(this).find('.u-line').removeClass('white');
    })



    /** 
    * GSAP 글자 아래에서 위 & 오른쪽으로 펼쳐지는 효과
    * @version 1.0.0
    * @since 2022-06-04
    * @author 이유라
    * @memo
    */
    
    $('[data-fade]').each(function(index,element){
        gsap.fromTo(element,{
            opacity:0,
            x:-50,
            y:50,
        },{// >@@@ 괄호 열기
            scrollTrigger:{
                trigger:element,
                start:"0% 90%",
                end:"100% 0%",
                // markers:true,
            },
            opacity:1,
            x:0,
            y:0,

        }) 
    })//



    /** 
    * GSAP 글자 아래에서 위로 나타나는 효과
    * @version 1.0.0
    * @since 2022-06-04
    * @author 이유라
    * @memo
    */
    
    $('[data-up]').each(function(index,element){//@@@ each

        gsap.fromTo(element,{// >@@@ "," 오타주의
            opacity:0,
            y:50,
        },{
            scrollTrigger:{
                trigger:element,
                start:"0% 90%",
                end:"100% 0%",
                // markers:true,
            },
            opacity:1,
            y:0,
            duration: 1,
            stagger:0.2,

        }) 
    })//


}) //end






