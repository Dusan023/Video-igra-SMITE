const nadji = id => document.getElementById(id)

nadji('ukljuci-iskljuci').onclick = () => {
    const circle = nadji('ukljuci-iskljuci-kruzic')
    circle.classList.toggle('svetlo-ukljuceno')
    document.body.classList.toggle('svetla-pozadina')
}
