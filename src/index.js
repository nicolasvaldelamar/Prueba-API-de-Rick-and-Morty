const container = document.querySelector('.container')
const API = "https://rickandmortyapi.com/api";




async function runApp (){
    await fetch(`${API}/character/`)
    .then(response => response.json())
    .then(characters => {
            for(character of characters.results){
                cards(character.name, character.image, character.species, character.status)
            }
    })
}

const cards = (name, imagen, especie, status)=>{
    const card = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const span = document.createElement('span')
    const small = document.createElement('small')

    card.classList.add('card')
    container.appendChild(card)

    img.src = imagen
    img.classList.add('img')
    card.appendChild(img)

    h3.classList.add('h3')
    card.appendChild(h3)
    h3.innerText = name

    span.classList.add('span')
    card.appendChild(span)
    span.innerText = `${especie} - `

    card.appendChild(small)
    small.innerHTML = status

}

runApp()