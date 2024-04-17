const apiKey = 'a29c32098b1cc25d579981860f3b086b';
const secret = 'dbc6f16232e5fe83';

const text = document.getElementById('text');
const button = document.getElementById('button');
const imagesDiv = document.getElementById('images');

button.addEventListener('click', async () => {
    imagesDiv.innerHTML = '';
    const tag = text.value;
    const data = await fetchData(tag);
    loopData(data);
});

function loopData(dataArray) {
    dataArray.forEach(photo => {
        const imageURL = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        const imgElement = document.createElement('img');
        imgElement.src = imageURL;
        imagesDiv.appendChild(imgElement);
    }); 
}

async function fetchData(tag) {

    const apiKey = 'a29c32098b1cc25d579981860f3b086b';
    
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&format=json&nojsoncallback=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.photos.photo
    } catch (error) {
        console.error("Error fetching ", error);
        return null;
    }

    // const server = 65535;
    // const id = "53659474222";
    // const secret = "09dfa0caaa";

    // const photoUrl = `https://live.staticflickr.com/${serverId}/${photoId}_${secret}.jpg`;

    // `https://live.staticflickr.com/65535/53659474222_09dfa0caaa.jpg;
}