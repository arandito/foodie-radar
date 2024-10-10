import { Restaurant } from "@/types";

export interface CuisineOption {
  name: string;
  bgColor: string;
}

export const cuisineOptionsDict: Record<string, CuisineOption> = {
  american_restaurant: { name: 'American', bgColor: 'bg-red-500' },
  chinese_restaurant: { name: 'Chinese', bgColor: 'bg-yellow-500' },
  italian_restaurant: { name: 'Italian', bgColor: 'bg-green-500' },
  mexican_restaurant: { name: 'Mexican', bgColor: 'bg-orange-500' },
  japanese_restaurant: { name: 'Japanese', bgColor: 'bg-purple-500' },
  pizza_restaurant: { name: 'Pizza', bgColor: 'bg-red-600' },
  cafe: { name: 'Cafe', bgColor: 'bg-brown-900' },
  korean_restaurant: { name: 'Korean', bgColor: 'bg-blue-500' },
  ramen_restaurant: { name: 'Ramen', bgColor: 'bg-pink-500' },
  bar: { name: 'Bar', bgColor: 'bg-gray-700' },
  coffee_shop: { name: 'Coffee', bgColor: 'bg-yellow-600' },
  thai_restaurant: { name: 'Thai', bgColor: 'bg-purple-600' },
  sushi_restaurant: { name: 'Sushi', bgColor: 'bg-indigo-500' },
  hamburger_restaurant: { name: 'Burger', bgColor: 'bg-yellow-700' },
  brunch_restaurant: { name: 'Brunch', bgColor: 'bg-pink-400' },
  indian_restaurant: { name: 'Indian', bgColor: 'bg-red-700' },
  breakfast_restaurant: { name: 'Breakfast', bgColor: 'bg-yellow-400' },
  seafood_restaurant: { name: 'Seafood', bgColor: 'bg-blue-400' },
  steak_house: { name: 'Steak House', bgColor: 'bg-red-800' },
  french_restaurant: { name: 'French', bgColor: 'bg-blue-600' },
  mediterranean_restaurant: { name: 'Mediterranean', bgColor: 'bg-green-600' },
  barbecue_restaurant: { name: 'Barbecue', bgColor: 'bg-orange-700' },
  sandwich_shop: { name: 'Sandwich', bgColor: 'bg-yellow-300' },
  bakery: { name: 'Bakery', bgColor: 'bg-pink-300' },
  vietnamese_restaurant: { name: 'Vietnamese', bgColor: 'bg-green-400' },
  greek_restaurant: { name: 'Greek', bgColor: 'bg-blue-300' },
  middle_eastern_restaurant: { name: 'Middle Eastern', bgColor: 'bg-orange-600' },
  vegetarian_restaurant: { name: 'Vegetarian', bgColor: 'bg-green-300' },
  spanish_restaurant: { name: 'Spanish', bgColor: 'bg-red-400' },
  ice_cream_shop: { name: 'Ice Cream', bgColor: 'bg-blue-200' },
  vegan_restaurant: { name: 'Vegan', bgColor: 'bg-green-200' },
  brazilian_restaurant: { name: 'Brazilian', bgColor: 'bg-yellow-800' },
  lebanese_restaurant: { name: 'Lebanese', bgColor: 'bg-red-300' },
  turkish_restaurant: { name: 'Turkish', bgColor: 'bg-blue-700' },
  indonesian_restaurant: { name: 'Indonesian', bgColor: 'bg-orange-300' },
};

export const cuisineOptions = [
  { id: 'american_restaurant', name: 'American' },
  { id: 'chinese_restaurant', name: 'Chinese' },
  { id: 'italian_restaurant', name: 'Italian' },
  { id: 'mexican_restaurant', name: 'Mexican' },
  { id: 'japanese_restaurant', name: 'Japanese' },
  { id: 'pizza_restaurant', name: 'Pizza' },
  { id: 'cafe', name: 'Cafe' },
  { id: 'korean_restaurant', name: 'Korean' },
  { id: 'ramen_restaurant', name: 'Ramen' },
  { id: 'bar', name: 'Bar' },
  { id: 'coffee_shop', name: 'Coffee' },
  { id: 'thai_restaurant', name: 'Thai' },
  { id: 'sushi_restaurant', name: 'Sushi' },
  { id: 'hamburger_restaurant', name: 'Burger' },
  { id: 'brunch_restaurant', name: 'Brunch' },
  { id: 'indian_restaurant', name: 'Indian' },
  { id: 'breakfast_restaurant', name: 'Breakfast' },
  { id: 'seafood_restaurant', name: 'Seafood' },
  { id: 'steak_house', name: 'Steak House' },
  { id: 'french_restaurant', name: 'French' },
  { id: 'mediterranean_restaurant', name: 'Mediterranean' },
  { id: 'barbecue_restaurant', name: 'Barbecue' },
  { id: 'sandwich_shop', name: 'Sandwich' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'vietnamese_restaurant', name: 'Vietnamese' },
  { id: 'greek_restaurant', name: 'Greek' },
  { id: 'middle_eastern_restaurant', name: 'Middle Eastern' },
  { id: 'vegetarian_restaurant', name: 'Vegetarian' },
  { id: 'spanish_restaurant', name: 'Spanish' },
  { id: 'ice_cream_shop', name: 'Ice Cream' },
  { id: 'vegan_restaurant', name: 'Vegan' },
  { id: 'brazilian_restaurant', name: 'Brazilian' },
  { id: 'lebanese_restaurant', name: 'Lebanese' },
  { id: 'turkish_restaurant', name: 'Turkish' },
  { id: 'indonesian_restaurant', name: 'Indonesian' },
];

export const homePageRestaurants: Restaurant[] = [
  {
    "address": "255 Bleecker St, New York, NY 10014",
    "editorialSummary": "Funky stop for elevated tacos and other Mexican eats, plus aguas frescas and beer.",
    "googleMapsUri": "https://maps.google.com/?cid=15098474501345957889",
    "id": "ChIJe0S8sZNZwokRAdgEV5COiNE",
    "location": {
      "latitude": 40.731104699999996,
      "longitude": -74.0027424
    },
    "name": "Tacombi",
    "phoneNumber": "(646) 964-5984",
    "photo": {
      "heightPx": 1602,
      "name": "places/ChIJe0S8sZNZwokRAdgEV5COiNE/photos/AdCG2DPZa6ezUredEn0_ympZ1531lF6hRJNAu6griMBTcRVIoDBm74NtV4Wj8CoJPcEBmHOzFg7jeTmhN4zSdkhxegfL1kX9gXhpX52m5mcEwElNZBDWE6zvZVgjJUQoLe58qRDe9AXuhA8Tcl9naJuvhG-ToY0ChmSL4RW_",
      "widthPx": 2400
    },
    "priceLevel": 3,
    "primaryType": "mexican_restaurant",
    "rating": 4.4,
    "types": [
      "mexican_restaurant",
      "restaurant",
      "point_of_interest",
      "food",
      "establishment"
    ],
    "websiteUri": "https://www.tacombi.com/?utm_source=gmb&utm_medium=yext&y_source=1_NDc4NjI0MzYtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
  },
  {
    "address": "120 Hudson St, New York, NY 10013",
    "editorialSummary": "Weekend brunch hot spot serving homestyle American eats with many locally sourced ingredients.",
    "googleMapsUri": "https://maps.google.com/?cid=5611732157661087317",
    "id": "ChIJETquaPVZwokRVYYGSKrg4E0",
    "location": {
      "latitude": 40.719819,
      "longitude": -74.0083829
    },
    "name": "Bubby's",
    "phoneNumber": "(212) 219-0666",
    "photo": {
      "heightPx": 3024,
      "name": "places/ChIJETquaPVZwokRVYYGSKrg4E0/photos/AdCG2DOY431-Ls-X3yxNoWt1HFLwuLKPDRfnUOc52_YhTRgSSAE8si8tYKC4arq9v3GfnA7GsxttOSMtfXU3SqSefwwKvbuGTR5f0WPCAI612gb5k3CPxVWIJFgmQ83o_VVM76gByDCF6rnS0s4JTddwVD-b0djpeV6Vg_G8",
      "widthPx": 4032
    },
    "priceLevel": 3,
    "primaryType": "american_restaurant",
    "rating": 4.4,
    "types": [
      "american_restaurant",
      "breakfast_restaurant",
      "brunch_restaurant",
      "bakery",
      "bar",
      "store",
      "restaurant",
      "point_of_interest",
      "food",
      "establishment"
    ],
    "websiteUri": "https://www.bubbys.com/"
  },
  {
    "address": "54 Prince St, New York, NY 10012",
    "editorialSummary": "Stylish, bright eatery featuring market-driven Italian cuisine, regional wines & apéritifs.",
    "googleMapsUri": "https://maps.google.com/?cid=1658283866188046846",
    "id": "ChIJfe6ZYKFZwokR_mHm7GNoAxc",
    "location": {
      "latitude": 40.723459999999996,
      "longitude": -73.9963118
    },
    "name": "La Pecora Bianca SoHo",
    "phoneNumber": "(212) 380-8202",
    "photo": {
      "heightPx": 1332,
      "name": "places/ChIJfe6ZYKFZwokR_mHm7GNoAxc/photos/AXCi2Q68-Z-NvYQSgIh4qo_EDOxyKAk-6rNckQMHXOhNbo8p_ZwsDTsPaU1S9C85_9wr4GsrWJt2T8oKScZV9KiiZuLb8uyFtR8-VGN3h4dyB5Za8gEv0zXXEpJEPejGCpRmNQrQjjQbaOp5uwdtw9wDwrMie0QdKAcNzGGa",
      "widthPx": 2000
    },
    "priceLevel": 3,
    "primaryType": "italian_restaurant",
    "rating": 4.6,
    "types": [
      "italian_restaurant",
      "restaurant",
      "point_of_interest",
      "food",
      "establishment"
    ],
    "websiteUri": "https://www.lapecorabianca.com/"
  },
  {
    "address": "53 W 35th St, New York, NY 10001",
    "editorialSummary": "Late-night izakaya for soba salad, sushi, yakitori & other Japanese fare in a spartan-looking space.",
    "googleMapsUri": "https://maps.google.com/?cid=16045570988164847655",
    "id": "ChIJh_4leqlZwokRJxjh98xRrd4",
    "location": {
      "latitude": 40.7501561,
      "longitude": -73.98625419999999
    },
    "name": "Izakaya MEW",
    "phoneNumber": "(646) 368-9459",
    "photo": {
      "heightPx": 3024,
      "name": "places/ChIJh_4leqlZwokRJxjh98xRrd4/photos/AXCi2Q5_0tlauzFd9pKnL-AVOx1YlnPXNWnzAXGAIhCOvvp7PaoFAb_uuCftGR7kvqk2-29elcNBaRfFXlIZCfZ5FwvQXUkjQWz6qmQwOS8t_jWljeoJZIQW-Oet4XHDpLSwaxfYMXV0V3l2mduhMP7vu5Mkw7OpuCwGnF3P",
      "widthPx": 4032
    },
    "priceLevel": 3,
    "primaryType": "japanese_restaurant",
    "rating": 4.5,
    "types": [
      "japanese_restaurant",
      "restaurant",
      "point_of_interest",
      "food",
      "establishment"
    ],
    "websiteUri": "http://mewnyc.com/"
  },
];

export const restaurantImages: string[] = [
  "tacombi.jpg",
  "bubbys.jpg",
  "pecora.jpg",
  "izakaya.jpg",
];