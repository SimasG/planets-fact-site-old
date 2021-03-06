// JSON DATA

// You can only use Fetch API when trying to fetch external files outside of your machine, not local ones.
// That's why you have to start a live server instead of developing using files from files:///

// ./data.json -> an argument of the file location you want to access
// const json = fetch('./data.json')
    // returning a promise that resolves with a Response object. 
//   .then(response => response.json())
    // using json() method to extract the JSON body content from the Response
    // second promise resolves with the result of parsing the response body text as JSON.
//   .then(json => console.log(json));



// planets


const venus = document.getElementById('planet-venus');

const H1 = document.querySelector('.main__text-heading');


venus.addEventListener('click', () => {
    console.log('yeoooooooo')
    async function populate() {
        const response = await fetch('./data.json');
        const planetsJson = await response.json();
    
        populateH1(planetsJson);
    }

    populate();
})


// test - populating venus h1
function populateH1(obj) {
    const mainTextContainer = document.querySelector('.main__text');
    const H1 = document.querySelector('.main__text-heading');
    H1.textContent = obj['name'][1];
    mainTextContainer.appendChild(H1);

}





// hamburger menu toggle
const hamburger = document.querySelector('.header__toggle');
const navUl = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const mainTabs = document.querySelector('.main__tabs');
const hero = document.querySelector('.main__hero');




hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
    logo.classList.toggle('active');
    mainTabs.classList.toggle('active');
    hero.classList.toggle('active');

})


// planet pseudo elements
// const planetUnderline = document.querySelectorAll('.planet-name'), ':after';

// planetUnderline.addEventListener('click', () => {
//     console.log("whatsuppppp");
// })



// tabs -> having troubles with tablet/desktop setup
const tabs = document.querySelectorAll('.main__tab');
const mainContainer = document.querySelector('.main__container');
const contents = document.querySelectorAll('.main__hero');

mainContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
        tabs.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        contents.forEach(content => {
            content.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})
