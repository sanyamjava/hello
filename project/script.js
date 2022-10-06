
let board = document.getElementById("board");

let color_red = document.querySelector(".color.red");
let color_blue = document.querySelector(".color.blue");
let color_green= document.querySelector(".color.green");
let color_yellow= document.querySelector(".color.yellow");
let color_eraser= document.querySelector(".eraser");
let newpage= document.querySelector(".newpage");
let slider = document.getElementById("pensize");
let downpdf = document.querySelector(".downpdf");


newpage.addEventListener("click",function(){
    let canvas = document.createElement("canvas");
    
    canvas.width = board.width;
    canvas.height = board.height;
    let tool1 = canvas.getContext("2d");
    tool1.fillStyle= "white";
    tool1.fillRect(0, 0, canvas.width, canvas.height);
    tool1.drawImage(board,0,0);
    let link = canvas.toDataURL();
    let anchor = document.createElement("a");
    anchor.href = link;
    pages.push(link);
    anchor.download= "file.png";
console.log(pages);
    anchor.click();
    tool = replaceCanvas(board);
    tool.strokeStyle="black";
    tool.lineWidth = 5;
    tool.lineWidth = slider.value;
    board = document.getElementById("board");
   
})
function replaceCanvas(elem) {
    let newcanvas = document.createElement("canvas");
    newcanvas.setAttribute('id',"board");
    
    newcanvas.width = board.width;
    newcanvas.height = board.height;
    tool = newcanvas.getContext('2d');
    // Insert the new canvas after the old one
    elem.parentNode.insertBefore(newcanvas, elem.nextSibling);
    // Remove old canvas. Now the new canvas has its position.
    elem.parentNode.removeChild(elem);
    return tool;
}
