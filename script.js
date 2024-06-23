const NevalidniEmail = () => { alert('Nevažeća email adresa') }
// dodao sam fj-u InvalidEmail umesto da svuda pisem alert(...) jer ako zelim da napravim izmenu u tekstu, da to ne
// moram da radim na vise mesta nego je dovoljno na samo jednom
const Proveri = () => {
    const checkbox = nadji('godine') // dobija se html element
    if (!checkbox.checked) { // samo checkbox element ima property checked i moze imati true ili false vrednost
        alert('Morate imati 13+ godina')
        return
    }
    const email = nadji('email').value // uzima tekst iz textbox-a
    if (email == '') {
        NevalidniEmail()
        return
    }
    const a = email.lastIndexOf('@') // ide od kraja stringa i trazi indeks prvog '@' karaktera; ako nema -> -1
    if (a == -1 || a == 0) {
        NevalidniEmail()
        return
    }
    const b = email.lastIndexOf('.')
    if (b == -1 || a > b || email.length < 4) {
        NevalidniEmail()
        return
    }
    alert('Uspesno ste se prijavili. Na email će Vam stizati novosti o igri.') // \' da bi mogao da prikaze apostrof izmedju ''
    // ne mora da se pise ako je izmedju "" iil ``
}

nadji('prijavi-se').onclick = Proveri