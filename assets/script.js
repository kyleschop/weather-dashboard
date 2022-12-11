var city = $('input[name="searchCity"]');

function search() {
    console.log(city.val());
}

var searchBtn = $('.searchBtn');
searchBtn.on('click', search)