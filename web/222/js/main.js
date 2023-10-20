$('.nav>ul>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown();
});

$('.nav>ul>li').mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});


/* 📍 slide */

let currentIndex = 0;
/* console.log(currentIndex) 0이 나오면 됨 */

/* setInterval(어떤일, 시간) 시간마다 어떤 일이 일어난다 무한 반복 */
/* setInterval(function(){}, 3000); 3초마다 함수가 실행된다 */

/* if(조건문){
    조건문이 참일 때 실행
}else{
    조건문이 거짓일 때 실행
} */

setInterval(function () {
    if (currentIndex<2) {
        currentIndex++;
    } else {
        currentIndex=0;
    }
    let slidePosition=currentIndex * (-1000)+"px";
    console.log(slidePosition)

    //$('.slidelist').animate({실행문},시간)
    $('.slidelist').animate({
        left:slidePosition
    },1000)
}, 3000)


//📍팝업창
$('#content1 .right').click(function(){
    /* $('.layer-bg').show(); */
    $('.layer-bg').fadeIn();
});

$('.layer .close').click(function(){
    /* $('.layer-bg').hide(); */
    $('.layer-bg').fadeOut();
});


// 📍 윈도우 창 열기
$('.contect').click(function(){
    window.open("contact.html", "child", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=800,width=400,height=400");
});


/* 📍 tab메뉴 */

let tabBtn=$('.tab_menu ul li');
let tabCont=$('.tab_cont>div');

/* .eq() = equivalent(동등) */
tabCont.hide().eq(0).show();
/* tabCont.hide().eq(0).show(); 0번만 보여라 */


tabBtn.click(function(e){
    e.preventDefault(); /* 클릭했을 때 위로 올라가는 현상 방지 */
    let index=$(this).index();
    console.log(index)
    tabCont.hide()
    /* 둘 중에 뭘 눌러도 다 지워라 */
    tabCont.eq(index).show();
    /* 탭 메뉴 a클릭하면 a내용이 나오고 b를 누르면 b가 나온다 */
    tabBtn.removeClass('active');
    $(this).addClass('active'); /* a를 누르면 a에 액티브 활성화 b를 누르면 b가 활성화된다 */
});











