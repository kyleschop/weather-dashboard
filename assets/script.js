var city = $('input[name="searchCity"]');
var searchBtn = $('.searchBtn');
var searchSectionEl = $('#searchSection');
var temp = $('#temperature');
var humidty = $("#humidity");
var windSpeed = $("#wind-speed");
var searchedCity = [];
var storedCity = JSON.parse(localStorage.getItem("searchedCity"));
var APIKey="a0aca8a89948154a4182dcecc780b513";

var latlanUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + APIKey;

var owUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

function makeCityBtn() {
    var cityBtn = $('<button>');
    cityBtn.text(' ');
    for (var i = 0; i < searchedCity.length; i++) {
        var potatoe = JSON.parse(localStorage.getItem("searchedCity"));
    
            if (potatoe[i] !== null) {
                cityBtn.css('margin-top', '5px');
                cityBtn.text(potatoe[i]);
            }
        searchSectionEl.append(cityBtn);
    } 
};

function saveCity() {
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
    makeCityBtn();
};

searchBtn.on('click', search);