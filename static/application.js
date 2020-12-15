
window.addEventListener("load",() => {loadKanjiApiInfo();});

async function loadKanjiApiInfo() {
    var kanji_list = document.getElementsByClassName("kanji_term");
    
    var i;
    for (i =0; i<kanji_list.length;i++){
        var api_call = await fetchText(kanji_list[i].innerHTML);
        console.log(api_call);

        var kanji_readings = document.getElementsByClassName("kanji_term_reading");
        kanji_readings[i].innerHTML = info.reading;

        var kanji_pos = document.getElementsByClassName("kanji_term_pos");
        kanji_pos[i].innerHTML = info.parts_of_speech;

        var kanji_translation = document.getElementsByClassName("kanji_term_translation");
        kanji_translation[i].innerHTML = info.translation;
    }
}


function fetchText(target){
    var base_url = 'https://jisho.org/api/v1/search/words?keyword=';
    var target = target;
    var api_url = base_url.concat(target);
    
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",api_url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}



// When the user scrolls the page, execute progressBar
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
