const NevalidniEmail = () => { alert('Nevažeća email adresa') }
const Proveri = () => {
    const checkbox = nadji('godine')
    if (!checkbox.checked) {
        alert('Morate imati 13+ godina')
        return
    }
    const email = nadji('email').value
    if (email == '') {
        NevalidniEmail()
        return
    }
    const a = email.lastIndexOf('@')
    if (a == -1 || a == 0) {
        NevalidniEmail()
        return
    }
    const b = email.lastIndexOf('.')
    if (b == -1 || a > b || email.length < 4) {
        NevalidniEmail()
        return
    }
    alert('Uspesno ste se prijavili. Na email će Vam stizati novosti o igri.')
}

nadji('prijavi-se').onclick = Proveri
