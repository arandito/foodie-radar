// Import necessary types
import { Restaurant, RecommendationRequest } from '@/types';

// Define your large dictionary of restaurant data
export const mockRestaurants: Restaurant[] = [
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
        "address": "33 Cortlandt Alley, New York, NY 10013",
        "editorialSummary": "Restaurant featuring leather booths and a zinc bar, serving creative American fare.",
        "googleMapsUri": "https://maps.google.com/?cid=346750043012854033",
        "id": "ChIJt_HATrRbwokREfGhs1PnzwQ",
        "location": {
            "latitude": 40.7181159,
            "longitude": -74.0019617
        },
        "name": "Au Cheval",
        "phoneNumber": "(646) 350-2429",
        "photo": {
            "heightPx": 3194,
            "name": "places/ChIJt_HATrRbwokREfGhs1PnzwQ/photos/AdCG2DO74VS8pqVid4gKylBrY5I3sEqrR-wGyiStiU-hpGRPI5S6J6QSmjtPu0JkYr8sucRmdwpQlM8v0dPTW9Ri173Q2AG7UdYPrfL0AQ6lcdmoHFb31AAIGENd6YJ32amaM1wt2spguTOXPy1YZoo5KvgDDevHn0DMeN36",
            "widthPx": 4800
        },
        "priceLevel": 3,
        "primaryType": "american_restaurant",
        "rating": 4.5,
        "types": [
            "american_restaurant",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://auchevalnyc.com/"
    },
    {
        "address": "54 Pearl St, New York, NY 10004",
        "editorialSummary": "Renovated historic tavern with a George Washington link offering pub eats & live music.",
        "googleMapsUri": "https://maps.google.com/?cid=18160583941611163358",
        "id": "ChIJn-PPbBRawokR3o5lQeBaB_w",
        "location": {
            "latitude": 40.7034181,
            "longitude": -74.01136489999999
        },
        "name": "Fraunces Tavern",
        "phoneNumber": "(212) 968-1776",
        "photo": {
            "heightPx": 3199,
            "name": "places/ChIJn-PPbBRawokR3o5lQeBaB_w/photos/AdCG2DPi4_Ej3wDBr4RLIbd9amCToWun5uRjX6rfFjETzNzWAqILyJAkvL_JAMtTPy3t4HA_9mN3vzdDCuXOVkYjo_MgSa-I7cr-5Oq8N8fQYw7QtDPObpa-9pONO16cgBFNP7OW38SOvvOrXvmrrdbbpIRw9uK1O107s5Un",
            "widthPx": 4800
        },
        "priceLevel": 3,
        "primaryType": "american_restaurant",
        "rating": 4.5,
        "types": [
            "american_restaurant",
            "bar",
            "museum",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "http://www.frauncestavern.com/"
    },
    {
        "address": "155 W Houston St, New York, NY 10012",
        "editorialSummary": "",
        "googleMapsUri": "https://maps.google.com/?cid=8426278495129623763",
        "id": "ChIJF8menphZwokR09y2oKUn8HQ",
        "location": {
            "latitude": 40.7280142,
            "longitude": -74.00257669999999
        },
        "name": "Hamburger America",
        "phoneNumber": "",
        "photo": {
            "heightPx": 3060,
            "name": "places/ChIJF8menphZwokR09y2oKUn8HQ/photos/AdCG2DMvUcQy7yvjfIdAaUIWdze3zxybnjkNOn8l4j16uCpblofgpZl3x1bFI4UiVvPsrcBtH6QANcbQM7DqXvT0xb5y6DHfx5Ujyma8CPBsk8rU0dkUFBajPNz9AI39AAqyEDGuwYplJG7GwgKDOc8FsRe1rqfgCkzB-XvO",
            "widthPx": 4080
        },
        "priceLevel": 2,
        "primaryType": "hamburger_restaurant",
        "rating": 4.5,
        "types": [
            "hamburger_restaurant",
            "american_restaurant",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://hamburgeramerica.com/"
    },
    {
        "address": "127 Orchard St, New York, NY 10002",
        "editorialSummary": "From a legendary appetizing shop comes this retro, full-service outpost serving Jewish comfort food.",
        "googleMapsUri": "https://maps.google.com/?cid=8813431814842646952",
        "id": "ChIJ53yq2oZZwokRqIHSP4qZT3o",
        "location": {
            "latitude": 40.7196181,
            "longitude": -73.9895779
        },
        "name": "Russ & Daughters Cafe",
        "phoneNumber": "(212) 475-4881",
        "photo": {
            "heightPx": 3277,
            "name": "places/ChIJ53yq2oZZwokRqIHSP4qZT3o/photos/AdCG2DN_LRLxJ0M0xiQ7TTGelfUztyUtUhLmPbYC61Qi1MsdV8vxJ3Et676DOF6zK6aE5PGvAFuwZlnc9ILN4OIXFPADPp1vCxq9yR1Yx29BCk3sF3Uzhj3a1aV9RDr41GdkYPXNCbpps71K8BDyHcTqNG8luwu-g1PXp4FJ",
            "widthPx": 4588
        },
        "priceLevel": 3,
        "primaryType": "american_restaurant",
        "rating": 4.6,
        "types": [
            "american_restaurant",
            "breakfast_restaurant",
            "brunch_restaurant",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://russanddaughters.com/"
    },
    {
        "address": "Freeman Alley, New York, NY 10002",
        "editorialSummary": "American fare, craft cocktails & Colonial tavern decor draws a hip crowd to this hidden-away spot.",
        "googleMapsUri": "https://maps.google.com/?cid=7142848026959386812",
        "id": "ChIJRcCC14VZwokRvJiDo29-IGM",
        "location": {
            "latitude": 40.72198770000001,
            "longitude": -73.9924573
        },
        "name": "Freemans",
        "phoneNumber": "(212) 420-0012",
        "photo": {
            "heightPx": 608,
            "name": "places/ChIJRcCC14VZwokRvJiDo29-IGM/photos/AdCG2DP-zzBUwfoiBS0cxgjzPzU7SGulzIDEfWge17bdCRYI3o-6ZcApYVegCQigvMoCj4T-xCTjzuCcHI2qaI-4s_wnYTOt01JMaWAQ_3q38mMR_opeVhOUS5j8Uq_bYJLfIRhFdwhF1Erpf8DCS9juK6dVFD1n_PCYZ7sd",
            "widthPx": 1080
        },
        "priceLevel": 3,
        "primaryType": "american_restaurant",
        "rating": 4.4,
        "types": [
            "american_restaurant",
            "brunch_restaurant",
            "bar",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "http://www.freemansrestaurant.com/"
    },
    {
        "address": "200 Broadway, Space LL2010 #2010, New York, NY 10038",
        "editorialSummary": "Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard.",
        "googleMapsUri": "https://maps.google.com/?cid=17825273160339044550",
        "id": "ChIJASNUNhhawokRxjhQOn8XYPc",
        "location": {
            "latitude": 40.7105106,
            "longitude": -74.0089181
        },
        "name": "Shake Shack Fulton Transit CTR - Manhattan",
        "phoneNumber": "(646) 374-3450",
        "photo": {
            "heightPx": 1960,
            "name": "places/ChIJASNUNhhawokRxjhQOn8XYPc/photos/AdCG2DPLnN3k1j0diIP87CKHnnfzqMkkN06SoewVe_whttlJeCjtwQq2ozxId-oyUJm3cg95NBGYYBXWlzFVCYQbsi9dS6-pr83sqpA9FLwKcPdNI6S3anzuteGrf5oShaIZsm42OEJdNxM2lD4PcGzRmle394A-P1Basg6b",
            "widthPx": 4032
        },
        "priceLevel": 3,
        "primaryType": "hamburger_restaurant",
        "rating": 4.2,
        "types": [
            "hamburger_restaurant",
            "sandwich_shop",
            "meal_takeaway",
            "american_restaurant",
            "fast_food_restaurant",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://www.shakeshack.com/location/fulton-transit-ctr-manhattan-ny?utm_source=google&utm_medium=listing"
    },
    {
        "address": "70 Pine St Ground Floor, New York, NY 10005",
        "editorialSummary": "Polished, new American restaurant with global influences inside spacious room with high ceilings.",
        "googleMapsUri": "https://maps.google.com/?cid=15549094825839982866",
        "id": "ChIJ__9LNBZawokREnkOiVx7ydc",
        "location": {
            "latitude": 40.706504699999996,
            "longitude": -74.00777149999999
        },
        "name": "Crown Shy",
        "phoneNumber": "(212) 517-1932",
        "photo": {
            "heightPx": 3586,
            "name": "places/ChIJ__9LNBZawokREnkOiVx7ydc/photos/AdCG2DPNBDiWD0RpB9wpODqVOwcsd9aaLeSXkNtI4zgfukR65849COtnDoiAVLfnGe3Y4nn3ZRyfmLkPntt7i7Q6khknbkDqWogtoqfEzGE7yn4iW6Uf0X3m7zBGxmfQDpV3zuZjTI57sqb36K-ziVQuDctM6beGxPG3zaBS",
            "widthPx": 4800
        },
        "priceLevel": 4,
        "primaryType": "american_restaurant",
        "rating": 4.5,
        "types": [
            "american_restaurant",
            "bar",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://www.crownshy.nyc/"
    },
    {
        "address": "146 Essex St, New York, NY 10002",
        "editorialSummary": "A pawn shop gives way to a happening restaurant & lounge serving creative American fare & cocktails.",
        "googleMapsUri": "https://maps.google.com/?cid=5916795963296968237",
        "id": "ChIJJWCTb4FZwokRLe7HgJSuHFI",
        "location": {
            "latitude": 40.7204282,
            "longitude": -73.9868606
        },
        "name": "Beauty & Essex",
        "phoneNumber": "(212) 614-0146",
        "photo": {
            "heightPx": 720,
            "name": "places/ChIJJWCTb4FZwokRLe7HgJSuHFI/photos/AdCG2DNDeUbaV-E4S2UfOf42CARZes0ZHtUoTWulBuBG3Q6YJ4bhSgcnxMbw_-_jeRQRIn53_ZfyxSRP23h8fWwUeeqUSPu-ksr4dBocHV4UelFwIPoHl8RDq0eu4-8cmGUHcTpgzQp441MFFs-c3ew_9-40KNsImlmiOhaB",
            "widthPx": 1080
        },
        "priceLevel": 4,
        "primaryType": "american_restaurant",
        "rating": 4.4,
        "types": [
            "american_restaurant",
            "restaurant",
            "point_of_interest",
            "food",
            "establishment"
        ],
        "websiteUri": "https://beautyandessex.com/new-york/"
    }
]

// Create a function to simulate API call
export function getMockRecommendations(request: RecommendationRequest): Promise<Restaurant[]> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Filter restaurants based on request parameters
      const filteredRestaurants = mockRestaurants.filter(restaurant => {
        // Add your filtering logic here based on lat, lng, radius, and primaryTypes
        // This is a simple example and may need to be adjusted based on your exact requirements
        return request.primaryTypes.includes(restaurant.primaryType);
      });

      resolve(filteredRestaurants);
    }, 500); // Simulate a 500ms delay
  });
}