const container = document.querySelector('.container');

// Add 16 divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  

  div.classList.add('grid-item');
  container.appendChild(div);
}
hoverColor();

function hoverColor () {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'blue';
      });
    });
  }
