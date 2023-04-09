let imagesDiv = document.getElementById("images")
let imageRoot = "./assets/gallery/"
let images = []

for(let i = 1; i<=14; i+=1){
    let image = document.createElement("img")
    image.src = imageRoot+i+".jpg"
    imagesDiv.appendChild(image)
}