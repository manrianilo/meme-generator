function enablePhotoUpload(){
  const imageInput = document.querySelector("#image-input")
  
  imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load",()=>{
       const uploadImage = reader.result 

       document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    }) 
    reader.readAsDataURL(this.files[0])
  
})
}

async function mapImageList(){
    const memesObject = [
      {
        "name": "Nazare",
        "path": "pics/Nazaré_Confusa.jpeg"
      },
      {
        "name": "Dinheiro",
        "path": "pics/money.jpeg"
      },
      
      {
        "name": "Passada",
        "path": "pics/passada.jpeg"
      },
      {
        "name": "Chloe",
        "path": "pics/chloe.jpeg"
      },
    ]

    return memesObject
}

async function createGallery(ImageList){
    const memeSelector = document.querySelector("#meme-list")

    ImageList.forEach(picture => {
        let newOption = document.createElement("Option") 
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}


async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}


async function main(){  
    const memesImageList =  await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}
main() 