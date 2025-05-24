


var przepisy = [["Rosół z kury", "IMG/rosol.jpg", "https://aniagotuje.pl/przepis/rosol-z-kury"], ["Pierogi ruskie", "IMG/pierogi.jpg", "https://aniagotuje.pl/przepis/pierogi-ruskie"], ["Kotlety schabowe", "IMG/schabowy.jpg", "https://aniagotuje.pl/przepis/kotlety-schabowe"], ["Żurek Wielkanocny", "IMG/zurek.jpg", "https://aniagotuje.pl/przepis/zurek-wielkanocny"]]

const losowyIndex = Math.floor(Math.random() * przepisy.length);

document.getElementById("przepis-dnia").textContent = przepisy[losowyIndex][0];
document.getElementById("obrazek-przepisu").src = przepisy[losowyIndex][1];

const linkElem = document.getElementById("link-przepisu");
linkElem.href = przepisy[losowyIndex][2];
linkElem.textContent = "Zobacz przepis";







function Rozwiniecie(idDiv, btn) {
  const mojDiv = document.getElementById(idDiv);
  const mojBtn = document.getElementById(btn);

  if (mojDiv.style.display === 'block') {
    mojBtn.innerHTML = 'Rozwiń instrukcje'
    mojDiv.style.display = 'none';
  } else {
    mojBtn.innerHTML = 'Zwiń instrukcje'
    mojDiv.style.display = 'block';
  }
}






const check_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
       
        const btn1 = document.getElementById('submit');
       


        btn1.addEventListener('click', ()=>{
            var mail = document.getElementById('mail').value;

            if(!check_mail.test(mail)){
                mail = '';
                alert('Podaj prawidlowy mial!')
            }
        })
