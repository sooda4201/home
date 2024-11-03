const canvas =document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); 

const image = new Image();
image.src = "sprit.jpeg";

image.onload = () =>{
    ctx.drawImage(image,0,0);
};