
window.addEventListener("load",() => {loadKanjiApiInfo();});

async function loadKanjiApiInfo() {
    var kanji_list = document.getElementsByClassName("kanji_term");
    
    var i;
    for (i =0; i<kanji_list.length;i++){
        var api_text = await fetchText(kanji_list[i].innerHTML);
        console.log(api_text);
        var info = JSON.parse(api_text);
        console.log(info);

        var kanji_readings = document.getElementsByClassName("kanji_term_reading");
        kanji_readings[i].innerHTML = info.reading;

        var kanji_pos = document.getElementsByClassName("kanji_term_pos");
        kanji_pos[i].innerHTML = info.parts_of_speech;

        var kanji_translation = document.getElementsByClassName("kanji_term_translation");
        kanji_translation[i].innerHTML = info.translation;
    }
}

async function fetchText(target) {
    /*
    var base_url = 'http://ec2-3-95-241-196.compute-1.amazonaws.com/jisho/';
    var target = target;

    var api_url = base_url.concat(target);
    let response = await fetch(api_url);

    if (response.status === 200) {
        let data = await response.text();
        return data;
    }

    */
    var base_url = 'https://jisho.org/api/v1/search/words?keyword=';
    var target = target;
    var api_url = base_url.concat(target);

    let response = await fetch(api_url);
    let data = await response.json();
    console.log(data);

    if (response.status === 200) {
        let data = await response.text();
        return data;
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
