const container = document.querySelector('.container');

// Add 16 divs

function createGrid(squares) {
    for (let i = 0; i < (squares*squares); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
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
    let squares = prompt("Enter number of squares on each side");
    return squares;
  }

  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', () => {
    let squares = input();
    createGrid(squares);
    container.style.gridTemplateColumns="repeat("+squares+",auto [col-start])";
} )
