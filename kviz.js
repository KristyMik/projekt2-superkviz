// vytvoreni objektu otazka
let poleOtazek = [
  {
    otazka: 'Kolik je v roce tydnu?',
    obrazek: 'obrazky/pivo.jpg',
    poleMoznychOdpovedi: ['52', '54', '54'],
    indexSpravneOdpovedi: [0],
  },

  {
    otazka: 'Kolik ma tyden minut?',
    obrazek: 'obrazky/moncicak.jpg',
    poleMoznychOdpovedi: ['10 020', '10 080', '10 140'],
    indexSpravneOdpovedi: [1],
  },

  {
    otazka: 'Jak dlouho obiha Mesic okolo Zeme?',
    obrazek: 'obrazky/snehurka.jpg',
    poleMoznychOdpovedi: ['28 dni', '30,5 dne', '29,5 dne'],
    indexSpravneOdpovedi: [2],
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


function hrajKviz(i) {


  let cisloOtazky = i + 1;

  pocitaniOtazek.innerHTML = ('Otázka ' + cisloOtazky + '/' + poleOtazek.length);
  foto.src = poleOtazek[i].obrazek;

  otazka.innerHTML = poleOtazek[i].otazka;
  vypisMozneOdpovedi(i);
  kliknutiNaOdpoved();


}


let odp1 = document.getElementById('od1');
let odp2 = document.getElementById('od2');
let odp3 = document.getElementById('od3');

hrajKviz(0);


function vypisMozneOdpovedi(i) {


  odp1.innerHTML = poleOtazek[i].poleMoznychOdpovedi[0];
  odp2.innerHTML = poleOtazek[i].poleMoznychOdpovedi[1];
  odp3.innerHTML = poleOtazek[i].poleMoznychOdpovedi[2];

  //iteruj(i);
}

function iteruj(i) {

  if (i < poleOtazek.length) {
    i++;
    hrajKviz(i);
    console.log('i: ' + i);

  }
}



function kliknutiNaOdpoved() {

  const vsechnyOdpovedi = document.querySelectorAll('#odpovedi');

  vsechnyOdpovedi.forEach((odpoved) => {

    odpoved.addEventListener('click', (vyhodnot));

  })

}

function vyhodnot(odpoved) {
  let i = 0;

  let pocetSpravnychOdpovedi = 0;
  let vypocetUspesnosti = 0;

  let odpovezeno = odpoved.target;
  let indexKliknuteOdpovedi = parseInt(odpovezeno.dataset.odpoved);
  let indexSpravneOdpovedi = parseInt(poleOtazek[i].indexSpravneOdpovedi);
  let vnitrniTextOdpovedi = odpovezeno.dataset.odpoved.innerText;

  console.log('vnitrni text: ' + vnitrniTextOdpovedi);
  console.log('klikla jsem na: ' + indexKliknuteOdpovedi + ' a spravna odpoved je: ' + indexSpravneOdpovedi);

  let kliknuteOdpovedi = [];
  kliknuteOdpovedi.push = vnitrniTextOdpovedi;

  if (indexKliknuteOdpovedi === indexSpravneOdpovedi) {

    pocetSpravnychOdpovedi++;
    vypocetUspesnosti = pocetSpravnychOdpovedi / parseInt(poleOtazek.length);
    console.log('spravna odpoved ' + pocetSpravnychOdpovedi + ' uspesnost ' + vypocetUspesnosti);

  } else console.log('spatna odpoved ' + ' uspesnost ' + vypocetUspesnosti);


  iteruj(i);


}

