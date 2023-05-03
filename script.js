const InvalidEmail = () => { alert('Invalid email address') }
const Check = () => {
    const checkbox = get('age')
    if (!checkbox.checked) { // checkbox moze imati true ili false vrednost
        alert('You must be 13+ years old')
        return
    }
    const email = get('email').value // uzima tekst iz textbox-a
    if (email == '') {
        InvalidEmail()
        return
    }
    const a = email.lastIndexOf('@') // ide od kraja stringa i trazi indeks prvog '@' karaktera; ako nema -> -1
    if (a == -1 || a == 0) {
        InvalidEmail()
        return
    }
    const b = email.lastIndexOf('.')
    if (b == -1 || a > b || email.length < 4) {
        InvalidEmail()
        return
    }
    alert('You\'ve successfully signed up for newsletter') // \' da bi mogao da prikaze apostrof izmedju ''
}

get('sign-up').onclick = Check