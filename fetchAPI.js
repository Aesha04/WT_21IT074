async function fetchData() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const dogImg = document.createElement('img');
    dogImg.src = data.message;
    document.getElementById('dog').appendChild(dogImg);
}