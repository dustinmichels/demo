// increase count every time button is clicked

let count = 0;

// select button by id
const btn = document.getElementById("my-button");
const countElement = document.getElementById("count");

// add event listener to button
btn.addEventListener("click", () => {
  count++;
  console.log(count);

  // update the count in the DOM
  countElement.innerText = count;
});
