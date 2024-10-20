function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const number        = document.querySelector('#controls > input[type=number]');
const createButton  = document.querySelector('#controls > button[data-create]');
const destroyButton = document.querySelector('#controls > button[data-destroy]');

let width = 30;
let height = 30;
  
createButton.addEventListener("click", () => { 
  const number = Number(document.querySelector('#controls > input[type=number]').value);
  createBoxes(number)
})
  
destroyButton.addEventListener("click", () => { 
  boxes.innerHTML = '';
})

function createBoxes(amount) { 

  for (let i = 0; i < amount; i++) { 

    const newDiv = document.createElement('div');  //   <div></div>

    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    boxes.append(newDiv);
  }

}


// console.log(number)
// console.log(createButton);
// console.log(destroyButton);
// console.log(boxes);

