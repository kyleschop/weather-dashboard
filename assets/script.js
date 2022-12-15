var city = $('input[name="searchCity"]');
var searchBtn = $('.searchBtn');
var searchSectionEl = $('#searchSection');
var searchedCity = [];

function saveCity() {
    var storedCity = JSON.parse(localStorage.getItem("searchedCity"));

    if(storedCity === null) {
        searchedCity = searchedCity.concat(city.val());
        localStorage.setItem("searchedCity", JSON.stringify(searchedCity));
    } else {
        searchedCity = storedCity;
        searchedCity = searchedCity.concat(city.val());
        localStorage.setItem("searchedCity", JSON.stringify(searchedCity));
    };
};

function search() {
    console.log(city.val());
    saveCity();
};

searchBtn.on('click', search);