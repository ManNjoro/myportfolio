import { nanoid } from "nanoid";

export default [
    {
        id: nanoid(),
        img: './assets/akan.png',
        url: '',
        name: 'Akan Name Generator',
        description: `This is a simple Akan name generator that takes your date of birth as input
        and generates an Akan name based on the day you were born.`
    },
    {
        id: nanoid(),
        img: './assets/store.png',
        url: 'https://github.com/ManNjoro/store_project',
        name: 'Retail Store Management System',
        description: `The proposed system is about management of retail stores, in that the owner of the stores is able to rent the stores and keep track of the loannes. The admin will be able to perform CRUD operations on the stores and customers.`,
    },
    {
        id: nanoid(),
        img: './assets/trendythreads.png',
        url: 'https://github.com/ManNjoro/trendy_threads',
        name: 'Trendy Threads',
        description: `An e-commerce based web application focusing on clothing`
    },
    {
        id: nanoid(),
        img: './assets/vanlife.png',
        url: 'https://vanlife-rent.netlify.app/vans',
        name: 'VanLife Rentals',
        description:`A website for van life enthusiasts to find or rent their vans online.`
    }
]