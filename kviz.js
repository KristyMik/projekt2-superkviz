// vytvoreni objektu otazka
let poleOtazek = [
  {
      otazka: 'Kolik je v roce tydnu?',
      obrazek: 'obrazky/pivo.jpg',
      poleMoznychOdpovedi: [1,2,3],
      indexSpravneOdpovedi: [0],
    },
    
     {
        otazka: 'kkk',
        obrazek: '',
        poleMoznychOdpovedi: [1,2,3],
        indexSpravneOdpovedi: [1],
      },
    
       {
        otazka: 'nnnn',
        obrazek: '',
        poleMoznychOdpovedi: [1,2,3],
        indexSpravneOdpovedi: [3],
      }
  ]
let odpovedi = document.getElementById('odpovedi');
let kviz = document.querySelector('.kviz');

let otazka = document.createElement('div');
otazka.id = "otazka";

//let otazka = document.getElementById('#otazka');
otazka.innerHTML = poleOtazek[0].otazka;
let moznosti = document.createElement('div');
moznosti.id = "moznosti";






let foto = document.createElement('img');
foto.classList.add("foto");
foto.id = ("obrazek");
foto.src = poleOtazek[0].obrazek;


//kviz.appendChild(otazka);

kviz.appendChild(otazka);
kviz.appendChild(moznosti);
moznosti.appendChild(odpovedi);
kviz.appendChild(foto);
//otazka.appendChild(odpovedi);
const vsechnyOdpovedi = document.querySelectorAll('#odpovedi');

/* vytvoreni divu pro otazky

for (let i = 0 ; i < poleOtazek.length; i++){
  
  if (click == true)

  
  
}*/



vsechnyOdpovedi.forEach((a) => {
  
  a.addEventListener('click', (ukazDalsiOtazku));



})



function ukazDalsiOtazku(akce){

  let odpovezeno = akce.target;
  let spravneOdpovedi = 0;
  let indexKliknuteOdpovedi = odpovezeno.dataset.odpoved;
  let indexSpravneOdpovedi = poleOtazek[0].indexSpravneOdpovedi;

  console.log('klikla jsem na: ' + indexKliknuteOdpovedi + ' a '+ indexSpravneOdpovedi);


  if(indexKliknuteOdpovedi==indexSpravneOdpovedi){

    spravneOdpovedi++;
    console.log(spravneOdpovedi); 

  }

}

 
 

 


