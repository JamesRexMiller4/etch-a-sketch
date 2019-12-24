const container = document.querySelector('.container')
const etchSketchImg = document.querySelector('.image-logo')

const makeDivs = (board=256) => {
  for(let i = 0; i < board; i++) {
    let div = document.createElement('div')
    div.classList.add('div-box')
    div.addEventListener('mouseover', () => {
      div.classList.add('active')
    })
    container.appendChild(div)
  }
}

const clearBoard = () => {
  location.reload()
}

// const makeNewBoard = () => {
//   var board = prompt('How big would you like the board?', 'Ex: 64 = 64x64')
//   board = board * board
//   container.innerHTML('')
//   makeDivs(board)
// }

const askUser = () => {
  let response = prompt('Would you like to clear the board?')
  if (response == 'yes') {
    clearBoard();
    // makeNewBoard();
  } else {

  }
}



makeDivs();

etchSketchImg.addEventListener('click', askUser)