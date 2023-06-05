var sorular = [{
        soru: "Müzik seslerini yazmak için kullandığımız notalar kaç tanedir?",
        cevap: "7"
    },
    {
        soru: "1999 Eurovision Yarışmasında Türkiye kaçıncı oldu?",
        cevap: "16"
    },
    {
        soru: "Türkiye'nin MEGASTAR'ı kimdir?",
        cevap: "Tarkan"
    },
    {
        soru: "Müzikte kullanılan sesleri gösteren işaretlere ne denir?",
        cevap: "Nota"
    },
    {
        soru: "Dört Mevsim adlı keman konçertosu kimin eseridir?",
        cevap: "Antonio Vivaldi"
    },
    {
        soru: "Müzikte orta kalınlıktaki erkek sesine ne denir?",
        cevap: "bariton"
    },
    {
        soru: "Şarkı söylemek amacıyla oluşturulan insan topluluğuna ne denir?",
        cevap: "koro"
    },
    {
        soru: "Üflemeli ve vurmalı çalgılardan oluşan topluluğa ne denir?",
        cevap: "bando"
    },
    {
        soru: "davul,darbuka ve bateri gibi müzik aletleri hangi guruba girer?",
        cevap: "vurmalı"
    },
    {
        soru: "fülüt,tranpet ve klarnet gibi müzik aletleri hangi guruba girer?",
        cevap: "üflemeli"
    }


];

var soruIndex = 0;
var puan = 0;

var soruDiv = document.getElementById("soru");
var cevapInput = document.getElementById("cevap");
var kontrolButton = document.getElementById("kontrol");
var sonucP = document.getElementById("sonuc");

function rastgeleSoru() {
    soruIndex = Math.floor(Math.random() * sorular.length);
    soruDiv.textContent = sorular[soruIndex].soru;
}

function kontrolEt() {
    var cevap = cevapInput.value.toLowerCase().trim();
    if (cevap === sorular[soruIndex].cevap.toLowerCase()) {
        puan++;
        sonucP.textContent = "Doğru! Puanınız: " + puan;
    } else {
        sonucP.textContent = "Yanlış cevap. Puanınız: " + puan;
    }

    sorular.splice(soruIndex, 1);
    if (sorular.length > 0) {
        rastgeleSoru();
        cevapInput.value = "";
    } else {
        soruDiv.textContent = "Tebrikler! Tüm soruları cevapladınız. Toplam puanınız: " + puan;
        cevapInput.disabled = true;
        kontrolButton.disabled = true;
    }
}

rastgeleSoru();
kontrolButton.addEventListener("click", kontrolEt);