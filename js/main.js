$(function () {
  gsap.fromTo(
    ".l_kv_img_container",
    2.5,
    {
      y: 30,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: {
        from: "random",
        amount: 2,
      },
    }
  );
  gsap.to(
    ".l_kv_container",{
      autoAlpha:0.7,
      duration:2.5,
      delay:2.5,
    }
  )

  
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（左から右）
$('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
  }else{
    $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
  }
});	

 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});		
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

  $(".m_content_item_wrapper").click(function(){
      $(this).find(".m_content_item_inner").toggleClass("is-active");
      $(".m_content_item_wrapper").not(this).find(".m_content_item_inner").removeClass("is-active");
  });


  gsap.fromTo('.m_section_content_item', { 
    y: 60,
    autoAlpha: 0,    },
    {
      y: 0,
      autoAlpha: 1,
      ease:Power1.easeOut,
      stagger: {
        from: "start",
        each: 0.1,
      },      scrollTrigger: {
        trigger: '.m_section_content_item',
        start: 'top center'
      }
    }
  );

  $(".m_section_content_item").click(function(){
    $(this).toggleClass("is-active");
    // $(this).next(".")toggleClass("is-active");
    $(".m_section_content_item").not(this).removeClass("is-active");
    $(".m_section_content_item").not(this).toggleClass("is_back");
});
  $(".m_section_content_item-back").click(function(){
    $(this).toggleClass("is-active");
});

ScrollTrigger.create({
  trigger: '.u_picture_relative01', //アニメーションが始まるトリガーとなる要素
  start: 'top center',
  end: 'bottom center', 
  toggleClass: {targets: ".u_background-line", className: "is-active"}, //クラスをつけたり、外したりできる
  once: true
});


  $(".m_content_reset_wrapper").click(function(){
    $(".m_section_content_item").removeClass("is-active");
});



$('.m_content_reset_wrapper').hover(
    function(){  
      $(this).find(".u_reset_border").addClass("is-active");
      $(this).find(".u_reset_border02").addClass("is-active");
    },
    function(){
      $(this).find(".u_reset_border").removeClass("is-active");
      $(this).find(".u_reset_border02").removeClass("is-active");
    }
);


  $('.m_content_title_wrapper').click(function(){
    $(this).next('.m_content_contents_wrapper').slideToggle(1500);
    $(".m_content_title_wrapper").not(this).next('.m_content_contents_wrapper').slideUp(400);

  });


  $('.m_content_title_wrapper').click(function(){
    $(".m_content_title_wrapper").not(this).addClass("is-not-active");
  });
  if ($(".m_content_title_wrapper").hasClass("is-not-active")) {
    $('.m_content_title_wrapper').click(function(){
      $(this).removeClass("is-not-active");
    });
  }


  $('.m_content_title_wrapper').click(function(){
    if ($(".m_content_title_wrapper").hasClass("is-not-active")) {
      $(this).removeClass("is-not-active");
    }
  });




  $('.m_contents_item_title-wrapper').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.m_content_item_contents-wrapper').slideToggle(1000);
    $(".m_contents_item_title-wrapper").not(this).next('.m_content_item_contents-wrapper').slideUp();
  });

  $('.u_section_cover').click(function(){
    $(this).addClass("is-active");
  });



});
