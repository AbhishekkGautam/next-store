import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Watch X15 Air",
    priceInMrp: "6990",
    discountInPercentage: 64,
    categoryName: "Watches",
    inStock: 12,
    featured: true,
    starRating: 4.6,
    imageSrc:
      "https://www.southwestjournal.com/wp-content/uploads/2019/02/Fitbit_Versa_3QTR_Black_ClockDefault.jpeg",
  },
  {
    _id: uuid(),
    title: "Smart Band M3",
    priceInMrp: "3999",
    discountInPercentage: 70,
    categoryName: "Bands",
    inStock: 20,
    featured: true,
    starRating: 4.2,
    imageSrc:
      "https://5.imimg.com/data5/TestImages/QC/VB/CC/SELLER-74949445/bulk-fitness-waterproof-m3-smart-band-0-87-oled-sports-smart-bracelet-500x500.jpg",
  },
  {
    _id: uuid(),
    title: "Oculus Quest 2",
    priceInMrp: "44499",
    discountInPercentage: 27,
    categoryName: "VR Headsets",
    inStock: 5,
    featured: true,
    starRating: 4.8,
    imageSrc: "https://m.media-amazon.com/images/I/615YaAiA-ML._SX679_.jpg",
  },
  {
    _id: uuid(),
    title: "Nike Adapt BB",
    priceInMrp: "36990",
    discountInPercentage: 40,
    categoryName: "Smart Shoes",
    inStock: 2,
    featured: true,
    starRating: 4.0,
    imageSrc:
      "https://kicksdailyvn.com/wp-content/uploads/2020/08/IMG_9082.png",
  },
];
