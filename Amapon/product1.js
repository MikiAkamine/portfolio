
// ---------------------------JavaScript-------------------------------------

// ----------商品画像のスライド----------------
const swiper = new Swiper(".swiper", { 
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {   
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
// -----------------------------------------

// const btn = document.querySelector('.button04');
// const title = document.querySelector('.product1-title');

// btn.addEventListener('click', function() {
//         const newTask = document.createElement('li');
//         newTask.classList.add('list');
//         newTask.textContent = title.innerText;
//         const cart = document.querySelector('.cart-inner');
//         cart.appendChild(newTask);
//         const deleteBtn = document.createElement('div');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.classList.add('delete');
//         newTask.appendChild(deleteBtn)
//         deleteBtn.addEventListener('click', function() {
//             this.parentElement.remove();
//         });       
// })


// --------------------------jQuery---------------------------------------

$(function(){

    // -------------ハンバーガーメニュー--------------
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
// -----------------------------------------------


// -----------商品画像のモーダル------------------
    $('.image').modaal({
        type: 'image'
    });

// -----------------------------------------------

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