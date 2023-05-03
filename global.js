const get = id => document.getElementById(id)
// napisao sam pomocnu funkciju get koja mi pomocu identifikatora elementa vraca sam element
// const znaci da se ne menja
// id je argument
// kad ne pise => {}, nego =>, onda se vraca to sto sledi kao povratna vrednost

get('toggle').onclick = () => {
    const circle = get('toggle-circle')
    circle.classList.toggle('light-on') // ako ima tu klasu -> brise je; ako nema tu klasu -> dodaje je
    document.body.classList.toggle('light-bg')
}
