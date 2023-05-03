const getc = name => document.getElementsByClassName(name) // vraca html kolekciju elemenata klase sa tim imenom

var index = -1
const buttons = getc('ability'); // ... je spread operator i razlaze elemente ove html kolekcije i stavlja ih u niz
const Switch = (item, i) => {
    get('name').innerText = item.querySelector('.ability-name').innerText
    const desc_arr = getc('description')
    if (index != -1) {
        buttons[index].classList.remove('ability-selected')
        desc_arr[index].classList.remove('description-selected')
    }
    item.classList.add('ability-selected')
    desc_arr[i].classList.add('description-selected')
    index = i
}

[...buttons].forEach((item, i) => { item.onclick = () => { Switch(item, i) } })

Switch(buttons[0], 0) // selektuj prvu sposobnost