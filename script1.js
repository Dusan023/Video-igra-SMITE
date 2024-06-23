const nadjiKlasu = name => document.getElementsByClassName(name) // vraca html kolekciju elemenata klase sa tim imenom

var indeks = -1 // koristi se kao indeks prethodnik, kako bi mogao da se unselect prethodno selektovana sposobnost
const dugmici = nadjiKlasu('sposobnost'), niz_opisa = nadjiKlasu('opis')
// desc_arr su redovi tabele sa opisima sposobnosti
const Zameni = (predmet, i) => {
    nadji('ime').innerText = predmet.querySelector('.ime-sposobnosti').innerText
    // querySelector ide kroz sve elemente dok ne nadje prvi koji odgovara opisu
    // oznacavanje je isto kao i kod CSS-a, tj. '.' je za klase, '#' za id, bez toga za tagove [attr="vrednost"]
    // za atribute
    // ako se trazi npr element sa identifikatorom a, clan je klase b i klase c, trazi se kao '#a.b.c'
    // pomocu innerText, uzima se tekst od tog pronadjenog elementa
    // u ovom slucaju nece imati vrednot undefined jer sigurno postoji, pa to ne mora da se proverava
    // onda se pomocu get('name') uzima element sa tim id i njemu se kao tekst ubacije taj prethodno dobijeni tekst
    // sto je naziv sposobnosti

    // index ima vrednost -1 samo na pocetku
    // posto ima 5 sposobnosti, indeksi idu od 0 do 4
    // kada se ucita stranica, pokrece se ova fj-a i selektuje se prva sposobnost, pa u tom trenutku
    // index ima vrednost -1 tkd se nista ne unselect
    // na kraju izvrsavanja ove fj-e index dobija vrednost 0
    // ako se posle klikne na npr 1. sposobnost, (ide passive pa 1. 2. 3. 4.)
    // index ce biti 0 tkd se button[0] i desc_arr[0] unselect
    if (indeks != -1) { // unselect prethodnika, ako postoji (nema ga samo na pocetku)
        // buttons[index] je prethodno selektovana sposobnost
        // nazvao sam buttons jer treba da se klikne na to da bi se selektovalo
        dugmici[indeks].classList.remove('izabrana-sposobnost') // skidanje klase
        niz_opisa[indeks].classList.remove('izabran-opis') // skidanje klase
    }
    predmet.classList.add('izabrana-sposobnost') // dodavanje krase
    niz_opisa[i].classList.add('izabran-opis') // dodavanje klase
    indeks = i
}
// ... je spread operator i razlaze elemente ove html kolekcije i stavlja ih u niz
// pa tek onda moze da se koristi forEach petlja
// alternativa je for(let i = 0; i < buttons.length; i++) {const item = buttons[i] itd
// ili for(const item of buttons), ali ovde je potreban indeks tkd to ne moze
[...dugmici].forEach((item, i) => { item.onclick = () => { Zameni(item, i) } })

Zameni(dugmici[0], 0) // selektuj prvu sposbnost