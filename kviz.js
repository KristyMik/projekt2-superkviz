// vytvoreni objektu otazka
let poleOtazek = [
  {
    otazka: 'Kolik je v roce týdnů?',
    obrazek: 'obrazky/kalendar.jpg',
    poleMoznychOdpovedi: ['52', '54', '50'],
    indexSpravneOdpovedi: 0,
  },

  {
    otazka: 'Kolik má týden minut?',
    obrazek: 'obrazky/hodiny.jpg',
    poleMoznychOdpovedi: ['10 020', '10 080', '10 140'],
    indexSpravneOdpovedi: 1,
  },

  {
    otazka: 'Jak dlouho obíhá Měsíc okolo Země?',
    obrazek: 'obrazky/mesic.jpeg',
    poleMoznychOdpovedi: ['28 dní', '30,5 dne', '29,5 dne'],
    indexSpravneOdpovedi: 2,
  }
]


let kviz = document.querySelector('.kviz');
let odpovedi = document.getElementById('odpovedi');

let pocitaniOtazek = document.createElement('div');
pocitaniOtazek.id = "poradi";

let otazka = document.createElement('div');
otazka.id = "otazka";

let moznosti = document.createElement('div');
moznosti.id = "moznosti";

let foto = document.createElement('img');
foto.classList.add("foto");
foto.id = ("obrazek");


kviz.appendChild(pocitaniOtazek);
kviz.appendChild(otazka);
kviz.appendChild(moznosti);
moznosti.appendChild(odpovedi);
kviz.appendChild(foto);


let pocetSpravnychOdpovedi = 0;
let vypocetUspesnosti = 0;
let poleKliknutychOdpovedi = [];
let poleSpravnychOdpovedi = [];
let poleTextuSpravnychOdpovedi = [];
let poleKliknutehoIndexu = [];

let odp1 = document.getElementById('od1');
let odp2 = document.getElementById('od2');
let odp3 = document.getElementById('od3');


let i = 0;

kliknutiNaOdpoved();
hrejKviz(i);


function hrejKviz(i) {

  let cisloOtazky = i + 1;

  pocitaniOtazek.innerHTML = ('Otázka ' + cisloOtazky + '/' + poleOtazek.length);
  foto.src = poleOtazek[i].obrazek;

  otazka.innerHTML = poleOtazek[i].otazka;

  vypisMozneOdpovedi(i);

}

function vypisMozneOdpovedi(i) {


  odp1.innerHTML = poleOtazek[i].poleMoznychOdpovedi[0];
  odp2.innerHTML = poleOtazek[i].poleMoznychOdpovedi[1];
  odp3.innerHTML = poleOtazek[i].poleMoznychOdpovedi[2];

}

function kliknutiNaOdpoved() {

  let vsechnyOdpovedi = document.querySelectorAll('#odpovedi li');

  vsechnyOdpovedi.forEach((odpoved) => {

    odpoved.addEventListener('click', vyhodnot);

  })

}

function vyhodnot(odpoved) {

  if (i <= poleOtazek.length) {


    let odpovezeno = odpoved.target;
    let indexKliknuteOdpovedi = parseInt(odpovezeno.dataset.odpoved);
    let indexSpravneOdpovedi = parseInt(poleOtazek[i].indexSpravneOdpovedi);
    let vnitrniTextOdpovedi = odpovezeno.innerText;

    poleKliknutychOdpovedi.push(vnitrniTextOdpovedi);
    poleSpravnychOdpovedi.push(poleOtazek[i].indexSpravneOdpovedi);
    poleKliknutehoIndexu.push(indexKliknuteOdpovedi);

    console.log('vnitrni text: ' + vnitrniTextOdpovedi);
    console.log('klikla jsem na: ' + indexKliknuteOdpovedi + ' a spravna odpoved je: ' + indexSpravneOdpovedi);


    if (indexKliknuteOdpovedi === indexSpravneOdpovedi) {

      pocetSpravnychOdpovedi++;
      vypocetUspesnosti = Math.round((pocetSpravnychOdpovedi / parseInt(poleOtazek.length)) * 100);
      console.log('spravna odpoved ' + pocetSpravnychOdpovedi + ' uspesnost ' + vypocetUspesnosti);

    } else console.log('spatna odpoved ' + ' uspesnost ' + vypocetUspesnosti);


    i++;
    console.log(poleKliknutychOdpovedi);
    console.log(poleKliknutehoIndexu);
    console.log(poleSpravnychOdpovedi);

    zaverecneVyhodnoceni();

    if (i < poleOtazek.length) {


      hrejKviz(i);

    }
  }
}

function zaverecneVyhodnoceni() {

  if (i == poleOtazek.length) {

    kviz.removeChild(poradi);
    kviz.removeChild(otazka);
    kviz.removeChild(moznosti);
    kviz.removeChild(foto);

    let hodnoceni = document.createElement('h2');
    hodnoceni.id = "vyhodnoceni";
    kviz.appendChild(hodnoceni);


    let otazka1 = document.createElement('div');
    otazka1.id = "otazkaVyh";
    kviz.appendChild(otazka1);


    let otazka2 = document.createElement('div');
    otazka2.id = "otazkaVyh";

    kviz.appendChild(otazka2);

    let otazka3 = document.createElement('div');
    otazka3.id = "otazkaVyh";

    kviz.appendChild(otazka3);

    let kliknutaOdpoved1 = document.createElement('div');
    kliknutaOdpoved1.id = "odpovedi";
    let kliknutaOdpoved2 = document.createElement('div');
    kliknutaOdpoved2.id = "odpovedi";
    let kliknutaOdpoved3 = document.createElement('div');
    kliknutaOdpoved3.id = "odpovedi";

    let vyhodnoceni1 = document.createElement('div');
    vyhodnoceni1.id = "odpovedi";

    let vyhodnoceni2 = document.createElement('div');
    vyhodnoceni2.id = "odpovedi";

    let vyhodnoceni3 = document.createElement('div');
    vyhodnoceni3.id = "odpovedi";

    let zaver = document.createElement('h2');
    zaver.id = "vyhodnoceni";

    kviz.appendChild(hodnoceni);

    kviz.appendChild(otazka1);
    kviz.appendChild(kliknutaOdpoved1);
    kviz.appendChild(vyhodnoceni1);

    kviz.appendChild(otazka2);
    kviz.appendChild(kliknutaOdpoved2);
    kviz.appendChild(vyhodnoceni2);

    kviz.appendChild(otazka3);
    kviz.appendChild(kliknutaOdpoved3);
    kviz.appendChild(vyhodnoceni3);

    kviz.appendChild(zaver);

    hodnoceni.innerHTML = ('TVOJE HODNOCENÍ');

    otazka1.innerHTML = ('1. ' + poleOtazek[0].otazka);
    otazka2.innerHTML = ('2. ' + poleOtazek[1].otazka);
    otazka3.innerHTML = ('3. ' + poleOtazek[2].otazka);

    kliknutaOdpoved1.innerText = ('Tvoje odpověď: ' + poleKliknutychOdpovedi[0]);
    kliknutaOdpoved2.innerText = ('Tvoje odpověď: ' + poleKliknutychOdpovedi[1]);
    kliknutaOdpoved3.innerText = ('Tvoje odpověď: ' + poleKliknutychOdpovedi[2]);


    if (poleKliknutehoIndexu[0] == poleSpravnychOdpovedi[0]) {

      vyhodnoceni1.innerHTML = ('SPRÁVNÁ odpověď.');


    } else vyhodnoceni1.innerHTML = ('ŠPATNÁ odpověď.');

    if (poleKliknutehoIndexu[1] == poleSpravnychOdpovedi[1]) {

      vyhodnoceni2.innerHTML = ('SPRÁVNÁ odpověď.');


    } else vyhodnoceni2.innerHTML = ('ŠPATNÁ odpověď.');

    if (poleKliknutehoIndexu[2] == poleSpravnychOdpovedi[2]) {

      vyhodnoceni3.innerHTML = ('SPRÁVNÁ odpověď.');


    } else vyhodnoceni3.innerHTML = ('ŠPATNÁ odpověď.');

    zaver.innerText = ('SPRÁVNĚ ' + pocetSpravnychOdpovedi + ' ze ' + poleOtazek.length + '. ÚSPĚŠNOST ' + vypocetUspesnosti + ' %.');

  }
} 
