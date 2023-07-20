var image = document.getElementById("image");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener('mouseover', function(){
  image.src = "./pexels-miljan-rašević-13302159.jpg"
})
image.addEventListener('mouseout', function(){
    image.src = "./pexels-mohi-syed-47261.jpg"
  })