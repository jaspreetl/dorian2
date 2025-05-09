import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import img6 from './img6.png'
import img7 from './img7.png'
import img8 from './img8.png'
import img9 from './img9.png'
import img10 from './img10.png'
import img11 from './img11.png'
import img12 from './img12.png'
import img13 from './img13.png'
import img14 from './img14.png'
import img15 from './img15.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    stripe_logo,
    cross_icon
}


export const products = [
    {
        _id: "c0001",
        name: "classic cold brew",
        description: "smooth, slow-steeped cold brew with chocolatey undertones.",
        price: 4.50,
        image: [img1],
        category: "coffee",
        subCategory: "cold",
        sizes: ["small", "medium", "large"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "c0002",
        name: "vanilla oat latte",
        description: "espresso with creamy oat milk and a hint of vanilla.",
        price: 5.20,
        image: [img2],
        category: "coffee",
        subCategory: "cold",
        sizes: ["small", "medium", "large"],
        date: 1716621345448,
        bestseller: true
    },   
    {
        _id: "m0001",
        name: "iced matcha latte",
        description: "vibrant ceremonial-grade matcha served over ice with oat milk.",
        price: 4.90,
        image: [img3],
        category: "matcha",
        subCategory: "cold",
        sizes: ["small", "medium", "large"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "c0003",
        name: "espresso tonic",
        description: "bright espresso poured over sparkling tonic water and citrus.",
        price: 4.70,
        image: [img4],
        category: "coffee",
        subCategory: "cold",
        sizes: ["small", "large"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "m0002",
        name: "hot matcha latte",
        description: "earthy matcha steamed with your choice of milk.",
        price: 4.60,
        image: [img5, img6],
        category: "matcha",
        subCategory: "hot",
        sizes: ["small", "medium", "large"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "c0004",
        name: "drip coffee",
        description: "a rotating single-origin brewed to perfection.",
        price: 3.00,
        image: [img7, img8],
        category: "coffee",
        subCategory: "hot",
        sizes: ["small", "medium", "large"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "c0005",
        name: "caramel cold brew",
        description: "cold brew infused with house-made caramel syrup.",
        price: 5.00,
        image: [img9],
        category: "coffee",
        subCategory: "cold",
        sizes: ["small", "medium", "large"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "c0006",
        name: "mocha",
        description: "espresso and dark chocolate with steamed milk.",
        price: 5.20,
        image: [img10],
        category: "coffee",
        subCategory: "hot",
        sizes: ["small", "medium", "large"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "c0009",
        name: "coffee beans - house blend",
        description: "balanced roast with notes of chocolate and citrus.",
        price: 31.00,
        image: [img11],
        category: "coffee",
        subCategory: "retail",
        sizes: ["250g", "500g"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "m0007",
        name: "ceremonial matcha tin",
        description: "premium, stone-ground matcha for home brewing.",
        price: 32.00,
        image: [img12],
        category: "matcha",
        subCategory: "retail",
        sizes: ["30g", "60g"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "m0008",
        name: "matcha whisk set",
        description: "includes bamboo whisk, scoop, and ceramic bowl.",
        price: 25.00,
        image: [img13],
        category: "matcha",
        subCategory: "merch",
        sizes: [],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "c0010",
        name: "reusable cold cup",
        description: "8oz insulated cup with straw for iced drinks.",
        price: 8.50,
        image: [img14],
        category: "other",
        subCategory: "merch",
        sizes: [],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "c0011",
        name: "brown sugar shaken espresso",
        description: "blonde espresso shaken with brown sugar syrup and oat milk.",
        price: 5.40,
        image: [img15],
        category: "coffee",
        subCategory: "cold",
        sizes: ["small", "medium", "large"],
        date: 1716650000000,
        bestseller: false
    }
];
