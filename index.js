const container = document.querySelector('.container')

const makeDivs = () => {
  for(let i = 0; i < 16; i++) {
    let div = document.createElement('div')
    div.classList.add('div-box')
    container.appendChild(div)
  }
}

makeDivs();