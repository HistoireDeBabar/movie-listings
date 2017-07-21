## Movie Listings


This is a simple node package that powers the Alexa skill 'Movie Listings' [see here](https://movielistings.co.uk/).
It is a simple wrapper around https://api.cinelist.co.uk/ 👏 to `GET` cinemas and movies with a minimal API.

#### Useage


```
const movieListings = require('movie-listings-sdk');


const cinemas = movieListings.getCinemaByPostcode("LU12HN").then(results => results.cinemas);
const listings = movieListings.getMovieListingsByCinema({id: 7530}).then(results => results.listings);

```

both `getCinemaByPostcode` and `getMovieListingsByCinema` return promises and resolve to objects.
They are designed to be composable, to allow you to fetch cinemas and then the resulting movie listings.

You should ensure you have catch functions (the examples exclude them for brevity).

##### Cinema By Postcode

```
{
   "postcode":"LU12HN",
   "cinemas":[
      {
         "distance":0.6,
         "name":"Cineworld Luton, Luton, Luton",
         "id":"7530"
      },
      {
         "distance":8.6,
         "name":"Knebworth House, Knebworth, Hertfordshire",
         "id":"8053"
      },
      {
         "distance":9.3,
         "name":"Empire Hemel Hempstead, Hemel Hempstead, Hertfordshire",
         "id":"7152"
      },
      {
         "distance":9.4,
         "name":"Alban Arena, St Albans, Hertfordshire",
         "id":"3870"
      },
      {
         "distance":9.6,
         "name":"Cineworld Stevenage, Stevenage, Hertfordshire",
         "id":"7544"
      },
      {
         "distance":9.8,
         "name":"The Odyssey, St Albans, Hertfordshire",
         "id":"9105"
      }
   ]
}
```

##### Movie Listings By Cinema

Full Response Example
```
{
   "status":"ok",
   "listings":[
      {
         "times":[
            "10:20"
         ],
         "title":"Annie (2014)"
      },
      {
         "times":[
            "10:50",
            "14:00",
            "20:20"
         ],
         "title":"Avengers: Age Of Ultron (2015)"
      },
      {
         "times":[
            "17:10"
         ],
         "title":"Avengers: Age Of Ultron (2015)"
      },
      {
         "times":[
            "10:50",
            "14:00",
            "20:20"
         ],
         "title":"Avengers: Age Of Ultron (2015)"
      },
      {
         "times":[
            "10:00"
         ],
         "title":"Big Hero 6 (2014)"
      },
      {
         "times":[
            "10:00"
         ],
         "title":"Big Hero 6 - Movies For Juniors (2015)"
      },
      {
         "times":[
            "11:20"
         ],
         "title":"Cinderella (2015)"
      },
      {
         "times":[
            "14:10"
         ],
         "title":"Fast & Furious 7 (2014)"
      },
      {
         "times":[
            "13:00",
            "15:20"
         ],
         "title":"Home (2014)"
      },
      {
         "times":[
            "12:45",
            "15:30",
            "17:20",
            "18:20",
            "20:10",
            "21:10"
         ],
         "title":"Mad Max - Fury Road (2015)"
      },
      {
         "times":[
            "10:20",
            "12:20",
            "14:20",
            "16:20"
         ],
         "title":"Moomins On The Riviera (2014)"
      },
      {
         "times":[
            "12:30",
            "14:15",
            "15:15",
            "17:00",
            "18:00",
            "19:45",
            "20:45"
         ],
         "title":"Pitch Perfect (2012)"
      },
      {
         "times":[
            "12:30",
            "14:15",
            "15:15",
            "17:00",
            "18:00",
            "19:45",
            "20:45"
         ],
         "title":"Pitch Perfect 2 (2015)"
      },
      {
         "times":[
            "11:10",
            "13:40",
            "16:15",
            "17:40",
            "18:50",
            "20:15",
            "21:15",
            "22:30"
         ],
         "title":"Poltergeist (2015)"
      },
      {
         "times":[
            "10:10"
         ],
         "title":"Shaun The Sheep (2015)"
      },
      {
         "times":[
            "18:30",
            "21:00"
         ],
         "title":"Spooks: The Greater Good (2014)"
      },
      {
         "times":[
            "13:20",
            "16:30",
            "19:40"
         ],
         "title":"Tanu Weds Manu Returns (2015)"
      },
      {
         "times":[
            "10:30"
         ],
         "title":"The SpongeBob Movie: Sponge Out Of Water (2014)"
      },
      {
         "times":[
            "10:30",
            "11:30",
            "13:30",
            "14:30",
            "16:30",
            "17:30",
            "19:30",
            "20:30"
         ],
         "title":"Tomorrowland (2015)"
      },
      {
         "times":[
            "11:50"
         ],
         "title":"Two By Two (2015)"
      },
      {
         "times":[
            "22:40"
         ],
         "title":"Unfriended (2015)"
      }
   ],
   "day":"1"
}

```
