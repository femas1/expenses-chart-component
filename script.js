// GETTING DATA FROM JSON FILE

fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
    })



// GETTING THE BARS

const monBar = document.querySelector('.container__main__heading__days__mon__bar');

