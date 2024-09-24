console.log("Hello from script")

function handleButtonClick(){
  alert("button clicked"); 
}

function handleMouseOver(){
  console.log("mouseover")
}

function handleMouseOut(){
  console.log("mouseout")
}

function handleKeyDown(event){
  console.log(event); 
  console.log("Key pressed", event.key)

  if (event.key == 'y' || event.key == 'Y'){
    console.log("Yes")
  }
}

function handleSubmit(event){
  event.preventDefault(); 
  // console.log(event)
  const userName = event.target.elements.username.value
  console.log("Username:", userName )

  const userName2 = document.getElementById("username")
  console.log(userName2.value)
}

function handleChange(event){
  console.log("Input value changed to:", event.target.value)
}

function handleFocus(){
  console.log("Input element focused")
}

// AKA not in "focus"
function handleBlur(){
  console.log("Input element blurred")
  // select the input element from the HTML DOM 
  // apply to CSS 
}

function updateParagraph(){
  const paragraph = document.getElementById("message")
  paragraph.innerHTML = "<b>Woot!</b> I have been updated!" 

  const newParagraph = document.createElement("p")
  newParagraph.innerHTML = "Hey this has been placed by JS"

  document.getElementById("container").appendChild((newParagraph))
}

// Change the image from before to after
function changeImage(){
  console.log("Onmouseover")
  const newImage = "static/after.jpg"

  // Grab the image element 
  // Update the src attribute to be the newImage url 
  document.getElementById("image").src = newImage
} 

// Revert the image back to before 
function revertImage() {
  const newImage = "static/before.jpg"

  document.getElementById("image").src = newImage
}
// Get username value from the input element
const username= document.getElementById("username2").value

// Alert the user with the username
alert("Hello " + username + "!");

//Reset the form

document.getElementById("myForm").reset();  //reset the value of the form

function highlight(){
    const box = document.getElementById("box");
    box.style.backgroundColor = "black";
    box.style.color = "red";
}









