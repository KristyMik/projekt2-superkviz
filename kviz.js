// vytvoreni objektu otazka
let kviz = document.querySelector('.kviz');


let poleOtazek = [
{
    otazka: 'jak se jmenuju?',
    obrazek: 'obrazky/pivo.jpg',
    poleMoznychOdpovedi: [1,2,3],
    indexSpravneOdpovedi: [0],
  },
  
   {
      otazka: 'kkk',
      obrazek: '',
      poleMoznychOdpovedi: [],
      indexSpravneOdpovedi: [],
    },
  
     {
      otazka: 'nnnn',
      obrazek: '',
      poleMoznychOdpovedi: [],
      indexSpravneOdpovedi: [],
    }
]

// vytvoreni divu pro otazky

for (let i = 0 ; i < poleOtazek.length; i++){

  let otazky = document.createElement('div');
  otazky.className = '#otazka';
  let fotoOtazky = document.createElement('img');
  fotoOtazky.classList.add('#obrazek');
  //fotoOtazky.querySelector('#obrazek');

if (i == 0){
  
  fotoOtazky.src = poleOtazek[i].obrazek;
  otazky.innerHTML = poleOtazek[i].otazka;

}

  
  

  kviz.appendChild(otazky);
  kviz.appendChild(fotoOtazky);
}

let moznosti = document.createElement('div');
moznosti.classList.add('#moznosti');

// vytvoreni ul pro odpovedi
let odpovedi = document.createElement('ul');
odpovedi.classList.add('#odpovedi');

// vytvorit div kvizu

//kviz.className = 'kviz';




// vytvoreni divu pro moznosti








//vlozeni objektu do kvizu

moznosti.appendChild(odpovedi);
kviz.appendChild(moznosti);

