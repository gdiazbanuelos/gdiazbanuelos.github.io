
window.addEventListener("load",() => {loadKanjiApiInfo();});

async function loadKanjiApiInfo() {
    var kanji_list = document.getElementsByClassName("kanji_term");
    
    var i;
    for (i =0; i<kanji_list.length;i++){
        api_text = await fetchText(kanji_list[i].innerHTML);
        var info = JSON.parse(api_text);

        var kanji_readings = document.getElementsByClassName("kanji_term_reading");
        //console.log(kanji_readings);
        if (kanji_readings.length != 0)
            kanji_readings[i].innerHTML = info.reading;

        var kanji_pos = document.getElementsByClassName("kanji_term_pos");
        if (kanji_pos.length != 0)
            kanji_pos[i].innerHTML = info.parts_of_speech;

        var kanji_translation = document.getElementsByClassName("kanji_term_translation");
        if (kanji_translation.length != 0)
            kanji_translation[i].innerHTML = info.translation;

        var base_url = 'https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana='
        var kanji_audio = document.getElementsByClassName("kanji_audio");
        if (kanji_audio.length != 0)
            var kana = info.reading;
            var kanji = kanji_list[i].innerHTML;
            var api_audio = `https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kana=${kana}&kanji=${kanji}`
            //console.log(api_audio);
            kanji_audio[i].src = api_audio;
    }
}

async function fetchText(target) {
    var base_url = 'https://api.gus-diaz.com/jisho/';

    var api_url = base_url.concat(target);
    let response = await fetch(api_url);

    if (response.status === 200) {
        let data = await response.text();
        return data;
    }
}


//=======================================================

// When the user scrolls the page, execute fixedHeader
window.onscroll = function() {progressBar()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("my-Bar").style.width = scrolled + "%";
}
