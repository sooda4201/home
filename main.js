const canvas =document.getElementById("myCanvas");
const con = canvas.getContext("2d"); 

const image = new Image();
image.src = 'sprit.jpeg';

image.onload = () =>{
    con.drawImage(image,0,0,150,200);
};