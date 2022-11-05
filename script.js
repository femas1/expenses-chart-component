// GETTING DATA FROM JSON FILE

fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        let highestValue = 150;

        let monValue = data[0].amount;
        let tueValue = data[1].amount;
        let wedValue = data[2].amount;
        let thuValue = data[3].amount;
        let friValue = data[4].amount;
        let satValue = data[5].amount;
        let sunValue = data[6].amount;
        
        monBar.style.height = `${(highestValue * monValue) / wedValue}px`;
        tueBar.style.height = `${(highestValue * tueValue) / wedValue}px`;
        wedBar.style.height = `${highestValue}px`;
        thuBar.style.height = `${(highestValue * thuValue) / wedValue}px`;
        friBar.style.height = `${(highestValue * friValue) / wedValue}px`;
        satBar.style.height = `${(highestValue * satValue) / wedValue}px`;
        sunBar.style.height = `${(highestValue * sunValue) / wedValue}px`;
        
    })

// GETTING THE BARS

const monBar = document.querySelector('.container__main__heading__days__mon__bar');
const tueBar = document.querySelector('.container__main__heading__days__tue__bar');
const wedBar = document.querySelector('.container__main__heading__days__wed__bar');
const thuBar = document.querySelector('.container__main__heading__days__thu__bar');
const friBar = document.querySelector('.container__main__heading__days__fri__bar');
const satBar = document.querySelector('.container__main__heading__days__sat__bar');
const sunBar = document.querySelector('.container__main__heading__days__sun__bar');

const bars = document.querySelectorAll('.bar');
const hoverValues = document.querySelectorAll('.barValue');

bars.forEach(bar => {
    bar.addEventListener('mouseover', () => {
        bar.previousElementSibling.classList.remove('hidden')
    })
})

bars.forEach(bar => {
    bar.addEventListener('mouseout', () => {
        bar.previousElementSibling.classList.add('hidden')
    })
})
 


// FUNCTIONS FOR HOVER 

const enlightenBar = function (bar) {
    bar.style.filter = "brightness(150%)"
}

const darkenBar = function (bar) {
    bar.style.filter = "brightness(100%)"
}

// APPLYING HOVER EFFECT TO ALL BARS 

monBar.addEventListener('mouseover', () => enlightenBar(monBar));
monBar.addEventListener('mouseout', () => darkenBar(monBar));
tueBar.addEventListener('mouseover', () => enlightenBar(tueBar));
tueBar.addEventListener('mouseout', () => darkenBar(tueBar));
wedBar.addEventListener('mouseover', () => enlightenBar(wedBar));
wedBar.addEventListener('mouseout', () => darkenBar(wedBar));
thuBar.addEventListener('mouseover', () => enlightenBar(thuBar));
thuBar.addEventListener('mouseout', () => darkenBar(thuBar));
friBar.addEventListener('mouseover', () => enlightenBar(friBar));
friBar.addEventListener('mouseout', () => darkenBar(friBar));
satBar.addEventListener('mouseover', () => enlightenBar(satBar));
satBar.addEventListener('mouseout', () => darkenBar(satBar));
sunBar.addEventListener('mouseover', () => enlightenBar(sunBar));
sunBar.addEventListener('mouseout', () => darkenBar(sunBar));