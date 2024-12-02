const container = document.querySelector('.container');

function input() {
  let userInput = prompt('How many squares do you want per side of the square?');
  userInput = parseInt(userInput, 10);
  document.documentElement.style.setProperty('--answer', userInput);  // Set the CSS variable for the grid size
  return userInput;    
}

/*makes button call on input function*/
document.getElementById('btn').addEventListener("click", () => {
  let userInput = input();  // Get user input
  createArea(userInput);    // Create area with the input value
});

function createArea(answer) {
  container.innerHTML = '';  // Clear the container before appending new grid
  
  let area = document.createElement('div');                  
  container.appendChild(area); 
  area.classList.add('area');                                         
  
  for (let i = 1; i <= answer * answer; i++) {  // Create total blocks (answer^2)
    const blocks = document.createElement('div');
    blocks.classList.add('blocks');
    area.appendChild(blocks);
  }

  function getRandomColor() {
    // Generate a random color in hex format
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add 'hover' event listeners on each block after they are created
  const blockList = area.querySelectorAll('.blocks');  // Select all the blocks within the created area
  blockList.forEach((block) => { 
    block.addEventListener("mouseover", () => {   
      block.style.backgroundColor = getRandomColor(); 
    });
  });

  return area;
}
