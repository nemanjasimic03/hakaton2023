const send = () => {
    let input = document.querySelector(".todoInput"); // Move the input selection inside the function
    let lista = document.querySelector(".items");

    // Create a new div element
    let novItem = document.createElement("div");
    novItem.className="flex gap-3";
    // Create an input element and set its class
    let newInput = document.createElement("input");
    newInput.className = "w-5 pt-1"; // Add your desired class
    newInput.type = "checkbox"; // Add checkbox type
    novItem.appendChild(newInput); // Append the input to the div

    // Create an h2 element
    let newH2 = document.createElement("h2");
    newH2.className="text-2xl"
    newH2.textContent = input.value; // Set your desired heading text
    novItem.appendChild(newH2); // Append the h2 to the div

    // Append the new div to the existing list
    lista.appendChild(novItem);
};

// Move the event listener assignment after the function declaration
let sendBtn = document.querySelector(".send");
sendBtn.addEventListener("click", send);



function showNewDiv() {
    console.log('naroaods')
    var div = document.getElementsByClassName('ispod-prva');
    div[0].style.display = 'block';
  }
  function showNewDiv1() {
    console.log('naroaods')
    var div = document.getElementsByClassName('ispod-druga');
    div[0].style.display = 'block';
  }
  function showNewDiv2() {
    console.log('naroaods')
    var div = document.getElementsByClassName('ispod-treca');
    div[0].style.display = 'block';
  }
  function showNewDiv3() {
    console.log('naroaods')
    var div = document.getElementsByClassName('ispod-cetvrta');
    div[0].style.display = 'block';
  }