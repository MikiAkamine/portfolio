$(function(){
    $(window).on('scroll', function() {
        // idがq-11の要素の画面最上部からの距離を取得
        let q11 = $('.btnFlex').offset().top;
    
        // 画面の高さ
        let wh = $(window).height();
    
        // $(window).scrollTop()は現在のスクロール位置
        if (q11 <= $(window).scrollTop() + wh) {
          $('.btnFlex').removeClass('hide');
        } else {
          $('.btnFlex').addClass('hide');
        }
        
      })
})