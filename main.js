const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message;//Turn the message into an object
        const breedsArray = Object.keys(breedsObject) //Turn the object into an array
        for (let i=0; i < breedsArray.length; i++){
            const option = document.createElement('option') 
            //createElement creates the dropdown list for <option> for me from my array
            option.value = breedsArray[i] // using breed as value
            option.innerText = breedsArray[i] //display breed
            select.appendChild(option) //Append options to select box
        }
        
    })

    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
        getDoggoImg(url)
    })

    const img = document.querySelector('.dog-img')

    const getDoggoImg = url => {
        fetch(url) // fetch from the API url above
            .then(res => {
                return res.json(); // get JSON message back
            })
            .then(data => {
                img.src = data.message; //extract message from JSON and attach to img tag as new source
            })
    }