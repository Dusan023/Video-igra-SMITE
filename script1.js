const nadjiKlasu = name => document.getElementsByClassName(name)

var indeks = -1
const dugmici = nadjiKlasu('sposobnost'), niz_opisa = nadjiKlasu('opis')
const Zameni = (predmet, i) => {
    nadji('ime').innerText = predmet.querySelector('.ime-sposobnosti').innerText
    if (indeks != -1) {
        dugmici[indeks].classList.remove('izabrana-sposobnost')
        niz_opisa[indeks].classList.remove('izabran-opis')
    }
    predmet.classList.add('izabrana-sposobnost')
    niz_opisa[i].classList.add('izabran-opis')
    indeks = i
}
[...dugmici].forEach((item, i) => { item.onclick = () => { Zameni(item, i) } })

Zameni(dugmici[0], 0)