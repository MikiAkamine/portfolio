

// ------------JavaScript-------------

 



// --------------------------------------jQuery------------------------------------------------------
$(function(){


    // -------ヘッダーのハンバーガーメニュー--------
    $(".toggle_btn").on("click",function(){
        if($("#header").hasClass("open")){
            $("#header").removeClass("open");
        }else{
            $("#header").addClass("open");
        }
    });

    $("#mask").on("click",function(){
        $("#header").removeClass("open");
    });

    $("#navi a").on("click",function(){
        $("#header").removeClass("open");
    });
// --------------------------------------------


// -----------video終了時のフェードイン-----------
    $("#video").on("ended",function(){
      $(".main-text").fadeIn(3000);
    })
// --------------------------------------------


// ------------スクロール時のPickup-------------------
  let item = $(".item");
  $(window).on("scroll",function() {
    let now = $(window).scrollTop();
    if (now <= 300 || now > 2500) {
        item.removeClass("on")
      } 
    else if (now > 300) {
      item.addClass("on")
    } 
  });
  // ---------------------------------------------


// ------------コンタクト入力チェック--------------
  $(".button").on("click",function(){
    if($("#name").val() == ""){
      $("#cation1").show();
      $("#name").focus();
      return false;
    }else if($("#email").val() == ""){
      $("#cation2").show();
      $("#email").focus();
      return false;
    }else if($("#message").val() == ""){
      $("#cation3").show();
      $("#message").focus();
      return false;
    }
  });
  // -------------------------------------------
  
  
  




})