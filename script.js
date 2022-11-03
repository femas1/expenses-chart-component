// GETTING DATA FROM JSON FILE

fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
    })

// GETTING THE BARS

const monBar = document.querySelector('.container__main__heading__days__mon__bar');
const tueBar = document.querySelector('.container__main__heading__days__tue__bar');
const wedBar = document.querySelector('.container__main__heading__days__wed__bar');
const thuBar = document.querySelector('.container__main__heading__days__thu__bar');
const friBar = document.querySelector('.container__main__heading__days__fri__bar');
const satBar = document.querySelector('.container__main__heading__days__sat__bar');
const sunBar = document.querySelector('.container__main__heading__days__sun__bar');

monBar.style.height = "100px"