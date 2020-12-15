
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


async function fetchText(target) {
    var base_url = 'https://jisho.org/api/v1/search/words?keyword=';
    var target = target;
    var api_url = base_url.concat(target);

    let request = new XMLHttpRequest();
    request.open('GET', api_url);
    request.send();
    request.onload() = () => {
        console.log(request);
        if (request.status == 200){
            var out = JSON.parse(request.response);
            console.log(out);
            return out;
        } else {
            console.log('error ${request.status} ${request.statusText}');
        }
    }
}


// When the user scrolls the page, execute progressBar
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
