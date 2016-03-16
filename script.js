'use strict';

var todo = {};
todo.database = {
	expensive: [{
		"title": "Canoe",
		"price": "$$$$",
		"activity": "food",
		"content": "Check out the view at the top of the Financial District, from one of Toronto's top restaurants.",
		"url": "http://oliverbonacini.com/Canoe.aspx",
		"urlDesc": "Canoe website",
		"address": "66 Wellington St. W, Toronto, ON",
		"image": "images/canoe.jpeg",
		"photoCredit": "Canoe website"
	}, {
		"title": "Medieval Times Dinner and Tournament",
		"price": "$$$$",
		"activity": "food",
		"content": "Along with dinner (no cutlery to be found here), Medieval Times entertains with a medieval jousting tournament. Make sure to cheer for your favourite knight.",
		"url": "http://www.medievaltimes.com/",
		"urlDesc": "Medieval Times website",
		"address": "10 Dufferin St. Toronto, ON",
		"image": "images/medieval-times.jpg",
		"photoCredit": "Medieval Times website"
	}, {
		"title": "Have Afternoon Tea at the Royal York Hotel",
		"price": "$$$$",
		"activity": "food",
		"content": "The Library Bar in the beautiful Fairmont Royal York hotel offers a luxurious afternoon tea menu.",
		"url": "http://www.fairmont.com/royal-york-toronto/",
		"urlDesc": "Fairmont Royal York website",
		"address": "100 Front St. W, Toronto, ON",
		"image": "images/royal-york.jpg",
		"photoCredit": "Fairmont Royal York website"
	}, {
		"title": "Get an IV drip",
		"price": "$$$$",
		"activity": "hungover",
		"content": "If you partied a bit to hard last night, and you will spend any money to make that headache go away, IV hangover 'cures' are available in Toronto. There are a few places that will hook you up to an IV to re-hydrate, whether or not they actually work is still questionable - but it will cost you.",
		"url": "http://www.thestar.com/life/health_wellness/2015/12/29/can-you-cure-a-hangover-with-the-party-girl-iv-drip.html",
		"urlDesc": "Toronto Star article",
		"address": "Multiple Locations",
		"image": "images/iv.jpg",
		"photoCredit": "Toronto Star"
	}, {
		"title": "See a Toronto Sports Team Play",
		"price": "$$$$",
		"activity": "hungover",
		"content": "Go to see a game of one of the many Toronto sports teams - If you can afford the $15 beer while you watch, it will almost be the hair of the dog! The main professional teams are the Blue Jays (baseball), Maple Leafs (hockey), Argonauts (football), Raptors (Basketball) and Toronto FC (soccer).",
		"url": "http://www.toronto.ca/links.htm#sports",
		"urlDesc": "City of Toronto Sports Teams",
		"address": "Multiple Locations",
		"image": "images/Rogers_Centre.jpg",
		"photoCredit": "MLB website"
	}, {
		"title": "Relax at Elmwood Spa",
		"price": "$$$$",
		"activity": "hungover",
		"content": "After a rough night, you can try to relax - the Elmwood Spa has water therapies and spa treatments to pamper your hangover away.",
		"url": "http://www.elmwoodspa.com/",
		"urlDesc": "Elmwood Spa website",
		"address": "18 Elm St., Toronto, ON",
		"image": "images/spa.jpg",
		"photoCredit": "Elmwood Spa website"
	}, {
		"title": "HackerYou Course",
		"price": "$$$$",
		"activity": "walk",
		"content": "Sign up for a HackerYou web development course! We think they are great!",
		"url": "http://hackeryou.com/",
		"urlDesc": "HackerYou website",
		"address": "483 & 485 Queen St. W, Toronto, ON",
		"image": "images/hackerYou1.jpg",
		"photoCredit": "M.K. Reyes"
	}, {
		"title": "Visit the CN Tower",
		"price": "$$$$",
		"activity": "walk",
		"content": "A staple for any Toronto tourist, going to the top of the CN tower is also a fun experience for locals. See the city that you love from a whole new angle.",
		"url": "http://www.cntower.ca/intro.html",
		"urlDesc": "CN Tower website",
		"address": "301 Front St. W, Toronto, ON",
		"image": "images/glassfloor.jpg",
		"photoCredit": "CN Tower website"
	}, {
		"title": "Ripley's Aquarium",
		"price": "$$$$",
		"activity": "walk",
		"content": "See the beauty of the aquatic world, in the heart of downtown. The aquarium hosts many special events with the beautiful sea creatures as a backdrop.",
		"url": "https://www.ripleyaquariums.com/canada/",
		"urlDesc": "Ripley's Aquarium website",
		"address": "288 Bremner Blvd., Toronto, ON ",
		"image": "images/aquarium.jpg",
		"photoCredit": "Ripley's Aquarium Facebook page"
	}, {
		"title": "Try a Float Tank",
		"price": "$$$$",
		"activity": "walk",
		"content": "Bring relaxation to a new level by trying a float tank.",
		"url": "http://float-toronto.com/",
		"urlDesc": "Float Toronto website",
		"address": "1159 Queen St. W, Toronto, ON",
		"image": "images/float-tank.jpg",
		"photoCredit": "Float Toronto website"
	}, {
		"title": "Escape Rooms",
		"price": "$$$$",
		"activity": "run",
		"content": "A popular trend with thrillseekers, escape rooms can get your adrenaline pumping as you try to beat the clock to escape your situation.",
		"url": "http://www.blogto.com/sports_play/2014/08/the_top_7_room_escape_games_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/escapegames.jpg",
		"photoCredit": "BlogTO article"
	}, {
		"title": "Join an Axe Throwing League",
		"price": "$$$$",
		"activity": "run",
		"content": "Check out this new trend in fitness. Batl Axe Throwing has a few venues across Toronto, and is also available for private bookings.",
		"url": "https://batlgrounds.com/",
		"urlDesc": "Batl Axe Throwing website",
		"address": "Multiple Locations",
		"image": "images/ax.jpg",
		"photoCredit": "The Globe and Mail"
	}, {
		"title": "Sign up for Class Pass",
		"price": "$$$$",
		"activity": "run",
		"content": "Class Pass allows you to access a number of gyms and fitness classes across the city for a single fee per month.",
		"url": "https://classpass.com/",
		"urlDesc": "ClassPass website",
		"address": "Multiple Locations",
		"image": "images/classPass.jpg",
		"photoCredit": "ClassPass website"
	}, {
		"title": "Edge Walk",
		"price": "$$$$",
		"activity": "run",
		"content": "If you have ever seen the tallest structure in Toronto and thought 'I want to stand on top of that', this activity is for you.",
		"url": "http://www.edgewalkcntower.ca/",
		"urlDesc": "CN Tower Edge Walk website",
		"address": "301 Front St. W, Toronto, ON",
		"image": "images/edgewalk.jpg",
		"photoCredit": "CN Tower Edge Walk website"
	}],
	under50: [{
		"title": "Food and Wine Expo",
		"price": "$$$",
		"activity": "food",
		"content": "In November, The Food and Wine Expo takes over the MTCC to treat it's guests with dishes and wine from around the globe.",
		"url": "http://www.foodandwineexpo.ca/sitepages/",
		"urlDesc": "Food and Wine Expo website",
		"address": "255 Front St. W, Toronto, ON",
		"image": "images/wine.jpg",
		"photoCredit": "Pexels"
	}, {
		"title": "Have an Epic Caesar at Brunch",
		"price": "$$$",
		"activity": "food",
		"content": "Hunter's Landing in Cityplace and William's Landing in Liberty Village have 'The Landing Cure', a caesar that includes a lobster tail, a pizza slice and chorizo. This concoction has been voted the best caesar in Toronto by a few different publications, including Taste Toronto.",
		"url": "http://hunterslanding.ca/",
		"urlDesc": "Hunter's Landing website",
		"address": "Multiple Locations",
		"image": "images/caesar-hunters.jpg",
		"photoCredit": "Hunter's Landing website"
	}, {
		"title": "Winterlicious or Summerlicious",
		"price": "$$$",
		"activity": "food",
		"content": "Toronto semi-annual food festivals have more than 200 restaurants offering prix-fixe menus at a greatly reduced cost. It's a great time to try a restaurant that normally wouldn't fit within your budget.",
		"url": "http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=e0e8a417e9dd2410VgnVCM10000071d60f89RCRD",
		"urlDesc": "Winterlicious/Summerlicious website",
		"address": "Multiple Locations",
		"image": "images/winterlicious.jpg",
		"photoCredit": "Winterlicious/Summerlicious Facebook page"
	}, {
		"title": "Have an Epic Caesar at Brunch",
		"price": "$$$",
		"activity": "hungover",
		"content": "Hunter's Landing in Cityplace and William's Landing in Liberty Village have 'The Landing Cure', a caesar that includes a lobster tail, a pizza slice and chorizo. This concotion has been voted the best caesar in Toronto by a few different publications, including Taste Toronto.",
		"url": "http://hunterslanding.ca/",
		"urlDesc": "Hunter's Landing website",
		"address": "Multiple Locations",
		"image": "images/caesar-hunters.jpg",
		"photoCredit": "Hunter's Landing website"
	}, {
		"title": "Pub Crawl",
		"price": "$$$",
		"activity": "hungover",
		"content": "To battle the wickedness of the hangover the next day, you could always check out the many pubs and bars that the city has to offer.",
		"url": "http://www.blogto.com/eat_drink/2015/05/the_top_10_bars_and_pubs_on_queen_st_west/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/pubCrawl.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Have a Board Game Day at Snakes and Lattes",
		"price": "$$$",
		"activity": "hungover",
		"content": "Snakes and Lattes is a board game cafe, so for a change of pace, bring a friend and challenge them to one of the many games on their shelves. Don't worry if you don't know the rules - staff are happy to explain their favourite games to customers.",
		"url": "http://www.snakesandlattes.com/",
		"urlDesc": "Snakes and Lattes website",
		"address": "Multiple Locations",
		"image": "images/snakes-and-lattes.jpg",
		"photoCredit": "Snakes and Lattes website"
	}, {
		"title": "Archery Tag",
		"price": "$$$",
		"activity": "run",
		"content": "Channel your inner Katniss Everdeen, and challenge your friends to a game of archery tag. Don't kill them though.",
		"url": "http://www.archerydistrict.com/",
		"urlDesc": "Archery District website",
		"address": "770 Birchmount Rd., Unit 22, Toronto, ON",
		"image": "images/archery-tag.jpg",
		"photoCredit": "Archery District website"
	}, {
		"title": "Toronto Sky Zone",
		"price": "$$$",
		"activity": "run",
		"content": "Get in a game of trampoline dodgeball, or just bounce around during open jump time in sky zone's trampoline gym.",
		"url": "http://www.skyzone.com/ca/toronto",
		"urlDesc": "Sky Zone website",
		"address": "45 Esandar Dr., Unit 1A, Toronto, ON",
		"image": "images/sky-zone.jpg",
		"photoCredit": "Sky Zone website"
	}, {
		"title": "Rent a table at SPiN",
		"price": "$$$",
		"activity": "run",
		"content": "SPiN is a ping pong bar, so grab a group of friends and change up your normal bar routine.",
		"url": "http://toronto.wearespin.com/",
		"urlDesc": "SPiN website",
		"address": "461 King St. W, Toronto, ON",
		"image": "images/spin.jpg",
		"photoCredit": "Torontoist article"
	}, {
		"title": "Pursuit OCR",
		"price": "$$$",
		"activity": "run",
		"content": "Self-described as 'bringing back recess', this indoor obstacle course at Queen and Dufferin was made for adults. Jump around in the ball pit!",
		"url": "http://pursuitocr.com/",
		"urlDesc": "Pursuit OCR website",
		"address": "444 Dufferin St., Toronto, ON",
		"image": "images/pursuitOCR.jpg",
		"photoCredit": "Pursuit OCR website"
	}, {
		"title": "Visit Casa Loma",
		"price": "$$$",
		"activity": "walk",
		"content": "Casa Loma, Toronto's castle in the middle of the city, was built by Sir Henry Pellatt in 1911. It took three years to build and cost $3.5 million. It is now open to the public as a museum and entertainment venue.",
		"url": "http://www.casaloma.org/",
		"urlDesc": "Casa Loma website",
		"address": "1 Austin Terr. Toronto, ON",
		"image": "images/casa-loma.jpg",
		"photoCredit": "Casa Loma website"
	}, {
		"title": "Haunted Walk",
		"price": "$$$",
		"activity": "walk",
		"content": "Hear about the haunted history of old Toronto year-round in the Distillery District. The original haunted walk is also given downtown in the warmer months.",
		"url": "http://hauntedwalk.com/toronto-tours/",
		"urlDesc": "Haunted Walk website",
		"address": "Multiple Locations",
		"image": "images/hauntedWalk.jpg",
		"photoCredit": "Haunted Walk website"
	}, {
		"title": "Go see a Mirvish show",
		"price": "$$$",
		"activity": "walk",
		"content": "The Mirvish company has an ogoing season of some of broadway's best musicals and plays. See a performance at one of their incredible venues, located throughout downtown.",
		"url": "http://www.mirvish.com/",
		"urlDesc": "Mirvish website",
		"address": "Multiple Locations",
		"image": "images/mirvish.jpg",
		"photoCredit": "Mirvish website"
	}],
	under10: [{
		"title": "Rent a bike",
		"price": "$$",
		"activity": "run",
		"content": "Toronto's bike share program has bike stalls all around the city. Bikes are rented on a membership basis, so make sure to check out their website for details.",
		"url": "http://www.bikesharetoronto.com/",
		"urlDesc": "Bike Share Toronto website",
		"address": "Multiple Locations",
		"image": "images/bike.jpg",
		"photoCredit": "Bike Share Toronto website"
	}, {
		"title": "Play laser tag",
		"price": "$$",
		"activity": "run",
		"content": "Challenge your friends in this spin on the classic childhood game.",
		"url": "http://www.laserquest.com/public/locations/ON-Toronto%20East.cfm",
		"urlDesc": "Laser Quest website",
		"address": "1980 Eglinton Ave. E, Scarborough, ON",
		"image": "images/lazer.jpg",
		"photoCredit": "Laser Quest website"
	}, {
		"title": "Go swimming at a Toronto pool",
		"price": "$$",
		"activity": "run",
		"content": "Check out one of Toronto's many public pools, open to the general public, to cool down on those blisteringly hot summer days.",
		"url": "http://www.blogto.com/toronto/the_best_public_swimming_pools_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/pool.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Kensington Market",
		"price": "$$",
		"activity": "hungover",
		"content": "The city's ecletic Kensington Market neighbourhood has many types of food options. You are guaranteed to find your hangover cure here.",
		"url": "http://www.kensington-market.ca/Default.asp?id=news&l=1&a=article&cid=81",
		"urlDesc": "Kensington Market Community site",
		"address": "Nassau St., Toronto, ON",
		"image": "images/kensington.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Relax in Trinity Bellwoods",
		"price": "$$",
		"activity": "hungover",
		"content": "Weekends at Trinity Bellwoods park are busy for trying to find a place to put down a picnic blanket, but it's a great place to find a spot in the sun during the summer. Many do bring alcohol to the park, but be careful - open container tickets are often given.",
		"url": "http://www.blogto.com/sports_play/2012/07/toronto_parks_trinity_bellwoods_park/",
		"urlDesc": "BlogTO article",
		"address": "790 Queen St. W, Toronto, ON ",
		"image": "images/bellwoods.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Grab a Specialty Coffee",
		"price": "$$",
		"activity": "hungover",
		"content": "Toronto is very snobby about their coffee. Luckily, there are many independent coffee shops, so that coffee snob doesn't have to go to a big chain to caffinate.",
		"url": "http://www.blogto.com/eat_drink/2015/01/the_top_30_cafes_in_toronto_by_neighbourhood/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/coffee.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Toronto Island",
		"price": "$$",
		"activity": "walk",
		"content": "Jump on the Toronto ferry and make your way to the Toronto Island, where there are tons of activities to do. The ferry ride itself offers great photo ops with Toronto's skyline as a backdrop.",
		"url": "http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=34e9dada600f0410VgnVCM10000071d60f89RCRD",
		"urlDesc": "Toronto Island Ferry website",
		"address": "9 Queens Quay W, Toronto, ON",
		"image": "images/island.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Get Lost in Honest Ed's",
		"price": "$$",
		"activity": "walk",
		"content": "The historic Toronto discount store founded by Ed Mirvish will be open until the end of 2016, but until then, you can still get lost among its many rooms of bargains.",
		"url": "http://www.mirvish.com/honesteds",
		"urlDesc": "Mirvish website",
		"address": "581 Bloor St. W, Toronto, ON",
		"image": "images/honestEds.jpeg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Shop along Queen St. West",
		"price": "$$",
		"activity": "walk",
		"content": "Queen Street West was included in Vogue's list of the top 15 coolest neighbourhoods in the world.",
		"url": "http://www.vogue.com/slideshow/1080625/fifteen-coolest-street-style-neighborhoods/",
		"urlDesc": "Vogue article",
		"address": "Queen St. W, Toronto, ON",
		"image": "images/queenWest.jpg",
		"photoCredit": "Metro News"
	}, {
		"title": "Kensington Market",
		"price": "$$",
		"activity": "food",
		"content": "The city's ecletic Kensington Market neighbourhood has many types of food options, and mostly at great prices.",
		"url": "http://www.kensington-market.ca/Default.asp?id=news&l=1&a=article&cid=81",
		"urlDesc": "Kensington Market Community site",
		"address": "Nassau St., Toronto, ON",
		"image": "images/kensington.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Get a Bao at Banh Mi Boys",
		"price": "$$",
		"activity": "food",
		"content": "For less than $5, you can get a delicious bahn mi sandwich on a steamed bao bun, at one of their two locations in Toronto.",
		"url": "http://www.banhmiboys.com/",
		"urlDesc": "Banh Mi Boys website",
		"address": "392 Queen St. W or 399 Yonge St., Toronto, ON",
		"image": "images/ban.jpg",
		"photoCredit": "Bahn Mi Boys website"
	}, {
		"title": "Food Fesitivals",
		"price": "$$",
		"activity": "food",
		"content": "There are a number of food festivals that the city hosts every summer.",
		"url": "http://www.blogto.com/eat_drink/2015/06/the_top_10_food_events_in_toronto_for_summer_2015/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/foodfest.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Grab a Specialty Coffee",
		"price": "$$",
		"activity": "food",
		"content": "Toronto is very snobby about their coffee. Luckily, there are many independent coffee shops, so that coffee snob doesn't have to go to a big chain to caffinate.",
		"url": "http://www.blogto.com/eat_drink/2015/01/the_top_30_cafes_in_toronto_by_neighbourhood/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/coffee.jpg",
		"photoCredit": "BlogTO website"
	}],
	free: [{
		"title": "Shakespeare In The Park",
		"price": "$",
		"activity": "hungover",
		"content": "Pack a picnic, bring your friends and enjoy this summer theatre tradition, presented by Canadian Stage.",
		"url": "https://www.canadianstage.com/Online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=F1B884FB-B4C2-4EF5-ABA1-D553DFADAB91&menu_id=B78B09F6-74A7-4E03-A8A8-FEC29A55F2F3&sToken=1%2Cb7eab25f%2C56c01244%2CAE2883FD-2BBA-42F5-8712-A57B81DDFEEE%2CIAHxNuULJKmVLbTlw6Zp4PKjsfo%3D",
		"urlDesc": "Canadian Stage website",
		"address": "1873 Bloor St. W, Toronto, ON",
		"image": "images/shakespeare.jpg",
		"photoCredit": "Canadian Stage website"
	}, {
		"title": "Outdoor Movie Nights",
		"price": "$",
		"activity": "hungover",
		"content": "Free outdoor movies have become a summer tradition in Toronto. Between TIFF in the park to the Harbourfront 'sail-in' cinema, there are many locations and films to choose from.",
		"url": "http://www.blogto.com/film/2015/06/free_outdoor_movies_in_toronto_for_summer_2015/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/outdoorMovies.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Toronto's Half House",
		"price": "$",
		"activity": "hungover",
		"content": "The owner of 54 1/2 St. Patrick Street refused to sell and have their house demolished. See the result of that battle in person.",
		"url": "http://www.blogto.com/city/2015/08/the_10_weirdest_houses_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "54 1/2 St. Patrick St., Toronto, ON",
		"image": "images/halfHouse.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Amsterdam Brewery Tour",
		"price": "$",
		"activity": "hungover",
		"content": "The Amsterdam BrewHouse on Queens Quay offers free tours and tastings most days of the week.",
		"url": "http://amsterdambrewhouse.com/",
		"urlDesc": "Amsterdam Brewhouse website",
		"address": "245 Queens Quay W, Toronto, ON",
		"image": "images/amsterdam.jpg",
		"photoCredit": "Amsterdam Brewhouse website"
	}, {
		"title": "Free Concerts",
		"price": "$",
		"activity": "hungover",
		"content": "Toronto is a city full of festivals, especially in the summer. Enjoy the free outdoor concert festivals that the city has to offer and save your money for a folding chair!",
		"url": "http://www.blogto.com/music/2015/05/the_top_10_free_concerts_and_music_festivals_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/concertcrowd.jpg",
		"photoCredit": "blogTO website"
	}, {
		"title": "Climb the Baldwin Steps",
		"price": "$",
		"activity": "run",
		"content": "These steps start at the intersection of Davenport and Spadina Road, and lead up to Casa Loma and Spadina House. They were featured in the movie 'Scott Pilgrim vs. The World'.",
		"url": "http://www.blogto.com/sports_play/2015/11/the_top_5_places_to_climb_stairs_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "486 Davenport Rd., Toronto, ON",
		"image": "images/baldwin-steps.jpg",
		"photoCredit": "Still from Scott Pilgrim vs. the World"
	}, {
		"title": "Skating",
		"price": "$",
		"activity": "run",
		"content": "There are many arenas and outdoor rinks across the city that offer free skate times. Skating at Nathan Phillips Square has become a winter tradition for many Torontonians.",
		"url": "http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=a3cadada600f0410VgnVCM10000071d60f89RCRD",
		"urlDesc": "City of Toronto website",
		"address": "Multiple Locations",
		"image": "images/skating.jpg",
		"photoCredit": "Toronto Sun"
	}, {
		"title": "Yoga in High Park",
		"price": "$",
		"activity": "run",
		"content": "Flow Active offers free yoga meetups frequently throughout the summer in High Park.",
		"url": "http://www.meetup.com/flow-active/",
		"urlDesc": "FlowActive Meetup website",
		"address": "1873 Bloor St. W, Toronto, ON",
		"image": "images/flow-active.jpeg",
		"photoCredit": "Flow Active Meetup website"
	}, {
		"title": "Harbourfront Centre",
		"price": "$",
		"activity": "walk",
		"content": "Harbourfront Centre is the home to many artistic programs in Toronto. The Power Plant art gallery is free, and is a great place to see new up and coming artist's work.",
		"url": "http://www.harbourfrontcentre.com/",
		"urlDesc": "Harbourfront Centre website",
		"address": "235 Queens Quay W, Toronto, ON",
		"image": "images/harbourfront.jpg",
		"photoCredit": "Harbourfront Centre website"
	}, {
		"title": "Toronto Museums",
		"price": "$",
		"activity": "walk",
		"content": "Many of Toronto's museums have a night once a week that entry is free, or pay-what-you-can. The ROM has Friday Night Live and the AGO has First Thursdays where a party starts after the buildings close.",
		"url": "http://www.blogto.com/toronto/the_best_museums_in_toronto/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/rom.jpg",
		"photoCredit": "Global News"
	}, {
		"title": "Ryerson Image Centre",
		"price": "$",
		"activity": "walk",
		"content": "Ryerson houses their collection of photography as well as host the various exhibits that come through, for the purposes of art and new media education. Entry is free, and there are daily free tours at 2:30 p.m.",
		"url": "http://www.ryerson.ca/ric/",
		"urlDesc": "Ryerson Image Centre website",
		"address": "33 Gould St., Toronto, ON",
		"image": "images/ryerson.jpg",
		"photoCredit": "Ryerson Image Centre website"
	}, {
		"title": "Free Downtown Tours",
		"price": "$",
		"activity": "walk",
		"content": "The 'Tour Guys' organization offers free tours of downtown Toronto. Make sure to tip your guide if you love the experience!",
		"url": "http://www.tourguys.ca/#!free-downtown-toronto-tour/cczy",
		"urlDesc": "Tour Guys website",
		"address": "Downtown Toronto",
		"image": "images/tour.jpg",
		"photoCredit": "Tour Guys website"
	}, {
		"title": "Amsterdam Brewery Tour",
		"price": "$",
		"activity": "walk",
		"content": "The Amsterdam BrewHouse on Queens Quay offers free tours and tastings most days of the week.",
		"url": "http://amsterdambrewhouse.com/",
		"urlDesc": "Amsterdam Brewhouse website",
		"address": "245 Queens Quay W, Toronto, ON",
		"image": "images/amsterdam.jpg",
		"photoCredit": "Amsterdam Brewhouse website"
	}, {
		"title": "See Graffiti Alley",
		"price": "$",
		"activity": "walk",
		"content": "There is an alley just south of Queen street, between Bathurst and Spadina that has been filled with vibrant graffiti murals. Comedian Rick Mercer often films his famous weekly 'rants' using the colourful murals as a backdrop.",
		"url": "http://www.blogto.com/arts/2015/06/free_tours_of_torontos_graffiti_alley_on_this_summer/",
		"urlDesc": "BlogTO article",
		"address": "Graffiti Alley, Toronto, ON",
		"image": "images/graffitiAlley.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "See the Cherry Blossoms in High Park",
		"price": "$",
		"activity": "walk",
		"content": "There are many sakura trees in the Hillside Gardens area of High Park that bloom every spring for a few days. Be warned though - if you are excited to see the cherry blossoms in High Park, so is everyone else in Toronto.",
		"url": "http://www.highparktoronto.com/cherry-trees.php",
		"urlDesc": "High Park Toronto website",
		"address": "1873 Bloor St. W, Toronto, ON",
		"image": "images/cherry-blossoms.jpg",
		"photoCredit": "Toronto Star"
	}, {
		"title": "Nuit Blanche",
		"price": "$",
		"activity": "walk",
		"content": "Every year on a fall night, artists place art installations all over the city for spectators to enjoy for free from sundown to sunrise. ",
		"url": "http://nuitblancheto.ca/",
		"urlDesc": "Nuit Blanche Toronto website",
		"address": "Multiple Locations",
		"image": "images/nuitBlanche.jpg",
		"photoCredit": "BlogTO website"
	}, {
		"title": "Riverdale Farm",
		"price": "$",
		"activity": "walk",
		"content": "The animals at Riverdale Farm have been selected to best represent animals found on a turn-of-the-century Ontario farm. Visit the farm in spring when new additions are welcomed!",
		"url": "http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=b06fdada600f0410VgnVCM10000071d60f89RCRD",
		"urlDesc": "City of Toronto website",
		"address": "201 Winchester St., Toronto, ON",
		"image": "images/riverdale.jpg",
		"photoCredit": "City of Toronto website"
	}, {
		"title": "High Park Zoo",
		"price": "$",
		"activity": "walk",
		"content": "In the early 1900's, deer were kept inside High Park. Since then, High Park Zoo has become home to bison, deer, llamas, peacocks and highland cattle.",
		"url": "http://www.highparktoronto.com/zoo.php",
		"urlDesc": "High Park Toronto website",
		"address": "1873 Bloor St. W, Toronto, ON",
		"image": "images/zoo.jpg",
		"photoCredit": "High Park Toronto website"
	}, {
		"title": "Allan Gardens",
		"price": "$",
		"activity": "walk",
		"content": "Visit this greenhouse filled with a variety of plants year-round. Allan Gardens greenhouse is over 100 years old, making the architecture of the outside of the building just as beautiful as what is inside.",
		"url": "http://torontobotanicalgarden.ca/get-gardening/public-gardens/allan-gardens/",
		"urlDesc": "Toronto Botanical Gardens website",
		"address": "19 Horticultural Ave., Toronto, ON",
		"image": "images/allan-gardens.jpg",
		"photoCredit": "Toronto Botanical Gardens website"
	}, {
		"title": "Canadian Opera Company Free Concerts",
		"price": "$",
		"activity": "walk",
		"content": "From September to May, the Canadian Opera Company offers free concerts in their Richard Bradshaw Amphitheatre. Each concert showcases a variety of genres to expand your musical palette.",
		"url": "http://www.coc.ca/PerformancesAndTickets/FreeConcertSeries.aspx",
		"urlDesc": "Canadian Opera Company website",
		"address": "145 Queen St. W, Toronto, ON",
		"image": "images/cocFreeConcert.jpg",
		"photoCredit": "Canadian Opera Company website"
	}, {
		"title": "Distillery Christmas Market",
		"price": "$",
		"activity": "walk",
		"content": "Each fall leading into the Christmas season, the Distillery District becomes a vibrant christmas market. Visit the market to witness the spirited atmosphere.",
		"url": "http://www.torontochristmasmarket.com/",
		"urlDesc": "Toronto Christmas Market website",
		"address": "65 Trinity St., Toronto, ON",
		"image": "images/christmas-market.jpg",
		"photoCredit": "Toronto Christmas Market website"
	}, {
		"title": "Toronto Parks",
		"price": "$",
		"activity": "walk",
		"content": "Relax in one of Toronto's many parks or parkettes. ",
		"url": "http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=5c98dada600f0410VgnVCM10000071d60f89RCRD",
		"urlDesc": "City of Toronto website",
		"address": "Multiple Locations",
		"image": "images/park.jpg",
		"photoCredit": "City of Toronto website"
	}, {
		"title": "Celebrity Sightings at TIFF",
		"price": "$",
		"activity": "walk",
		"content": "For two weeks in September, celebrities descend upon Toronto to attend glamorous movie premieres and promote their films premiering at TIFF. King street gets closed off for pedestrians to wander, hoping to catch a glimpse of their celebrity crushes.",
		"url": "http://tiff.net/festivals/festival16",
		"urlDesc": "TIFF website",
		"address": "Multiple Locations",
		"image": "images/tiff.jpg",
		"photoCredit": "TIFF website"
	}, {
		"title": "Go to a Gallery Opening",
		"price": "$",
		"activity": "food",
		"content": "Gallery receptions usually have both free food and alcohol. Check out which gallery's event calendars you should keep an eye on.",
		"url": "http://www.gotstuffed.ca",
		"urlDesc": "Got Stuffed website",
		"address": "Multiple Locations",
		"image": "images/art-gallery.jpg",
		"photoCredit": "Pixabay"
	}, {
		"title": "Get Free Stuff on your Birthday",
		"price": "$",
		"activity": "food",
		"content": "Many businesses in Toronto offer free items or treats for birthdays. See if you can take advantage on yours this year!",
		"url": "http://www.blogto.com/toronto/lists/10_places_in_toronto_to_get_free_stuff_on_your_birthday/",
		"urlDesc": "BlogTO article",
		"address": "Multiple Locations",
		"image": "images/birthday.jpg",
		"photoCredit": "Free Images"
	}, {
		"title": "Amsterdam Brewery Tour",
		"price": "$",
		"activity": "food",
		"content": "The Amsterdam BrewHouse on Queens Quay offers free tours and tastings most days of the week.",
		"url": "http://amsterdambrewhouse.com/",
		"urlDesc": "Amsterdam Brewhouse website",
		"address": "245 Queens Quay W, Toronto, ON",
		"image": "images/amsterdam.jpg",
		"photoCredit": "Amsterdam Brewhouse website"
	}]
};

$(function () {
	todo.init();
});

todo.init = function () {
	$('.answers button').on('click', function () {
		window.location.reload(true);
	});

	$('header button').on('click', function () {
		$('#top').hide();
		$('#questions').fadeIn();
	});

	$('form').on('submit', function (e) {
		// don't refresh page
		e.preventDefault();
		$('#questions').hide();
		$('#answers').fadeIn();
		// save the user's answers
		todo.choiceBudget = $('input[name=budget]:checked').val();
		todo.choiceActivity = $('input[name=activity]:checked').val();
		todo.sort();
	});
}; // end of init function

todo.sort = function () {
	// get the objects sorted by budget
	var budgetOptions = todo.database[todo.choiceBudget];
	var resultList = [];
	// console.log(todo.choiceBudget);
	// console.log(budgetOptions);
	// find out the activity level and match to budget level
	for (var i = 0; i < budgetOptions.length; i = i + 1) {
		var card = budgetOptions[i];
		//only print answers that match activity level
		if (card.activity === todo.choiceActivity) {
			resultList.push(card);
		}
	} // end of for loop

	for (var i = 0; i < resultList.length; i = i + 1) {
		var cardIndex = resultList[i];
		// console.log(cardIndex);
		todo.image = cardIndex['image'];
		todo.cardRendered = '<div class="carousel-cell"><div class="imageContainer" style="background:url(' + todo.image + ')" ><div class="mobilePurple"></div></div><div class="purple"></div><div class="overlay"><h2>' + cardIndex['title'] + '</h2><p>' + cardIndex['content'] + '</p><p class="credit">Photo: ' + cardIndex['photoCredit'] + '</p><div class="colContainer clearfix"><div class="col col1"><i class="fa fa-bookmark-o"></i><a href="' + cardIndex['url'] + '" target="_blank">' + cardIndex['urlDesc'] + '</a></div><div class="col col2"><i class="fa fa-map-marker"></i>' + cardIndex['address'] + '</div></div></div></div>';

		$('.answers .main-carousel').append(todo.cardRendered);
	} //end of for loop
	todo.compile();
}; //end of todo.sort function

todo.compile = function () {
	$('.answers .main-carousel').flickity({
		imagesLoaded: true,
		wrapAround: true,
		pageDots: false
	});
};
