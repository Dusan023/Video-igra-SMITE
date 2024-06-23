const nadji = id => document.getElementById(id)
// get je funkcija koju sam napisao radi bolje preglednosti koda, da ne bih svuda morao da pisem
// document.getElementById(id), ovako je dovoljno get(id)

// tip podataka moze biti const, var ili let
// var se koristi za globalne promenljive
// let za lokalne
// const moze bilo gde ali samo kad se ta vrednost nece menjati i uvek mora da se inicijalizuje

// kod tih fj-ja sa strelicom => argument deo se pise () ako nema argumenata
// ako ima jedan onda moze i sa i bez zagrada tj kod get fj-e moze ili (id) ili id
// ako ima 2 ili vise argumenata, moraju da se stavljaju zagrade i izmedju argumenata nalaze se zapete (a, b, c)
// ako posle => se nalazi {}, onda se taj kod izmedju {} samo izvrsava
// a ako nema tih zagrada, onda se ta linija salje kao rezultat fj-e
// da je kod fj-e get pisalo:
// const get = id => {document.getElementById(id)}
// const element = get('toggle')
// element bi imalo vrednost undefined iako element sa identifikatorom 'toggle' postoji
// jer fj-a get nema povratnu vrednost
// const get = id => {return document.getElementById(id)}
// ova fj-a get sada radi isto sto i originalna fj-a, na 1. redu

// const znaci da se ne menja
// id je argument
// kad ne pise => {}, nego =>, onda se vraca to sto sledi kao povratna vrednost

nadji('ukljuci-iskljuci').onclick = () => {
    const circle = nadji('ukljuci-iskljuci-kruzic') // dobija se html element
    circle.classList.toggle('svetlo-ukljuceno') // ako ima tu klasu -> brise je; ako nema tu klasu -> dodaje je
    document.body.classList.toggle('svetla-pozadina') // ako ima tu klasu -> brise je; ako nema tu klasu -> dodaje je
}
