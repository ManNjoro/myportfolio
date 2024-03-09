import { nanoid } from "nanoid";
import akan from  './assets/akan.png';
import store from  './assets/store.png';
import trendythreads from  './assets/trendythreads.png';
import vanlife from  './assets/vanlife.png';
import tenzies from  './assets/tenzies.png';
import quizzical from  './assets/quizzical.png';

export default [
    {
        id: nanoid(),
        img: akan,
        url: 'https://mannjoro.github.io/akanp/assets/index.html',
        name: 'Akan Name Generator',
        description: `This is a simple Akan name generator that takes your date of birth as input
        and generates an Akan name based on the day you were born.`
    },
    {
        id: nanoid(),
        img: store,
        url: 'https://github.com/ManNjoro/store_project',
        name: 'Retail Store Management System',
        description: `The proposed system is about management of retail stores, in that the owner of the stores is able to rent the stores and keep track of the loannes. The admin will be able to perform CRUD operations on the stores and customers.`,
    },
    {
        id: nanoid(),
        img: trendythreads,
        url: 'https://github.com/ManNjoro/trendy_threads',
        name: 'Trendy Threads',
        description: `An e-commerce based web application focusing on clothing`
    },
    {
        id: nanoid(),
        img: vanlife,
        url: 'https://vanlife-rent.netlify.app',
        name: 'VanLife Rentals',
        description:`A website for van life enthusiasts to find or rent their vans online.`
    },
    {
        id: nanoid(),
        img: tenzies,
        url: 'https://mannjoro.github.io/tenzies/',
        name: 'Tenzies',
        description: `A game where players have to roll until all dice.`
    },
    {
        id: nanoid(),
        img: quizzical,
        url: 'https://getquizzical.netlify.app',
        name: 'Quizzical',
        description: `A fun trivia game`
    }
]