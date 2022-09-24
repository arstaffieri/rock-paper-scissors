var chooseClassic = document.querySelector('.classic-section')
var chooseWeaponText = document.querySelector('.choose-weapon')
var showClassicPieces = document.querySelector('.game-pieces')
var chooseComplex = document.querySelector('.complex-section')
var showComplexPieces = document.querySelector('.complex-pieces')

//eventListeners
chooseClassic.addEventListener('click', showClassic)
chooseComplex.addEventListener('click', showComplex)

//functions
function showClassic() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  showClassicPieces.classList.remove('hidden')
}

function showComplex() {
  chooseClassic.classList.add('hidden')
  chooseComplex.classList.add('hidden')
  chooseWeaponText.classList.remove('hidden')
  showClassicPieces.classList.remove('hidden')
  showComplexPieces.classList.remove('hidden')
