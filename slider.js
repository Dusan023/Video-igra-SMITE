const slajder = document.getElementById('slajder')
const slajder_kutija_niz = document.getElementsByClassName('slajder-kutija')
var slajder_kutija1 = slajder_kutija_niz[0], slajder_kutija2 = slajder_kutija_niz[1]
var interval, indeks = 0

const PostaviSliku = (element, { slika, link, pomeri }) => {
    element.style.background = `url(${slika})`
    element.onclick = () => { window.open(link, '_self') }
    const ime_klase = 'pomeri-pozadinu'
    if (pomeri) element.classList.add(ime_klase)
    else element.classList.remove(ime_klase)
}

const Podesavanje = slike => {
    slike = slike.map(({ slika, link, pomeri = false }) => { return { slika: slika.replaceAll('\\', '/'), link, pomeri } })
    PostaviSliku(slajder_kutija1, slike[0])
    PostaviSliku(slajder_kutija2, slike[1])
    indeks = 1
    interval = setInterval(() => {
        if (document.visibilityState !== 'visible') return
        if (++indeks == slike.length) indeks = 0
        slajder_kutija1.style.left = '-100%'
        slajder_kutija2.style.left = 0
        setTimeout(() => {
            slajder_kutija1.classList.add('bez-tranzicije')
            slajder_kutija1.style.left = '100%'
            slajder_kutija1.offsetHeight
            slajder_kutija1.classList.remove('bez-tranzicije')
            const p = slajder_kutija1
            slajder_kutija1 = slajder_kutija2
            slajder_kutija2 = p
            PostaviSliku(slajder_kutija2, slike[indeks])
        }, 1000);
    }, 3500);
}

Podesavanje([
    { slika: "images/slajder/slika1smite.jpg", link: 'index.html' },
    { slika: "images/slajder/slika2smite.jpg", link: 'index.html', pomeri: true },
    { slika: "images/zaglavlje.jpg", link: 'cernobog.html', pomeri: true }
])