const container = document.querySelector('.container');

function createGrid(squares) {
    for (let i = 0; i < (squares*squares); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
    container.style.gridTemplateColumns="repeat("+squares+",auto)";
    hoverColor();
}

function hoverColor () {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'blue';
      });
    });
  }

  function input () {
    //reset color
    container.innerText='';
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'white';
      });
    let squares = prompt("Enter number of squares on each side, max is 100.");
    if ((squares > 0) && (squares < 101)) {}
    else {
        squares = 0;
    }
    return(squares);
  }

  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', () => {
    let squares = input();
    createGrid(squares);
    //container.style.gridTemplateColumns="repeat("+squares+",auto [col-start])";
    console.log(squares)
    container.removeChild(div);
} )
