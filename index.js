document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    
function getBeer(event) {
        event.preventDefault()

    fetch('https://api.punkapi.com/v2/beers/random')
        .then(resp => {
        return resp.json()
    })
    .then(data => {
        console.log(data)
        const name = data[0].name
        const description = data[0].description
        const foodPairing = data[0].food_pairing
        const abv = data[0].abv
               debugger         
        randomBeer.textContent = name + description + foodPairing + abv 
        descriptionDisplay.textContent = description
    })
}
    startBtn.addEventListener('click', getBeer)


})

const createBeerImage = (beer) => {
      const img = document.createElement("img")
        img.src = beer[0].image_url
        img.alt = beer[0].name
        img.id = beer[0].id

        img.addEventListener("click", handleUpdateDetail)

        beerPic.append(img)
}



// let beer = [];

//     document.addEventListener("DOMContentLoaded", function () {
//   beerImage();
//   addBeerImage();
// });

// function beerImage() {
//   const imgUrl = "https://api.punkapi.com/v2/beers/random";
//   fetch(imgUrl)
//     .then((res) => res.json())
//     .then((results) => {
//       results.message.forEach((image) => addImage(image));
//     });
// }

// function addBeerImage(beerPicUrl) {
//   let container = document.querySelector("#beer-pic-container");
//   let newImageEl = document.createElement("img");
//   newImageEl.src = beerPicUrl;
//   container.appendChild(newImageEl);
// }




