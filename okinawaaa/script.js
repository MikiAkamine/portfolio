let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/471000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        // 特定の地域(今回は東京)だけ選択して変数に詰め直す
        let area = weather[0].timeSeries[0].areas[0];
        console.log(area); 
        // 発表者と報告日時の情報を画面に書き出す
        document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
        document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
        // 特定地域の情報を画面に書き出す
        document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
        document.getElementById("today").lastElementChild.textContent = area.weathers[0];
        document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
        document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
    });

$(function(){
    $('.img01').on('mouseover',function(){
        $('.img01').css('opacity',0.6)
    })
    $('.img01').on('mouseleave',function(){
        $('.img01').css('opacity',1)
    })
})
$(function(){
    $('.img02').on('mouseover',function(){
        $('.img02').css('opacity',0.6)
    })
    $('.img02').on('mouseleave',function(){
        $('.img02').css('opacity',1)
    })
})
$(function(){
    $('.img03').on('mouseover',function(){
        $('.img03').css('opacity',0.6)
    })
    $('.img03').on('mouseleave',function(){
        $('.img03').css('opacity',1)
    })
})
$(function(){
    $('.img04').on('mouseover',function(){
        $('.img04').css('opacity',0.6)
    })
    $('.img04').on('mouseleave',function(){
        $('.img04').css('opacity',1)
    })
})
$(function(){
    $('.img05').on('mouseover',function(){
        $('.img05').css('opacity',0.6)
    })
    $('.img05').on('mouseleave',function(){
        $('.img05').css('opacity',1)
    })
})
$(function(){
    $('.img06').on('mouseover',function(){
        $('.img06').css('opacity',0.6)
    })
    $('.img06').on('mouseleave',function(){
        $('.img06').css('opacity',1)
    })
})
$(function(){
    $('.img07').on('mouseover',function(){
        $('.img07').css('opacity',0.6)
    })
    $('.img07').on('mouseleave',function(){
        $('.img07').css('opacity',1)
    })
})
$(function(){
    $('.img08').on('mouseover',function(){
        $('.img08').css('opacity',0.6)
    })
    $('.img08').on('mouseleave',function(){
        $('.img08').css('opacity',1)
    })
})
