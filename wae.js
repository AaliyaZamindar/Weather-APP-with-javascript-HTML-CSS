window.addEventListener("load", () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long);
      console.log(lat);
      const location = "longitude is : " + long + " and latitude is : " + lat;
      const glocation = document.getElementById("location");
      glocation.innerHTML = location;
    });
  }
});
const api = `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=46e70dc27f87fa0b18ec1ac12a4c0307`;
// const api = `api.openweathermap.org/data/2.5/weather?id=2172797&appid=46e70dc27f87fa0b18ec1ac12a4c0307`;
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var temperature = document.getElementById("temperature");
    var temp1 = data.main.temp;
    console.log(typeof temp1);
    //console.log(temp1);
    var TEMP = "temperature is " + temp1 + "K";
    temperature.innerHTML = TEMP;
    var description = document.getElementById("description");

    if (temp1 <= 273) {
      console.log("hey");
      // console.log(img3);
      const divCold = document.getElementById("image3");
      const img3 = document.getElementById("cold");
      const coldweather = "weather is freezing cold";
      divCold.classList.add("showClass");
      description.innerHTML = coldweather;

      // console.log("weather is freezing cold");
    } else if (274 < temp1 < 303) {
      const divCold = document.getElementById("image3");
      const divRainy = document.getElementById("image2");
      divCold.classList.remove("showClass");
      divCold.classList.add("hiddenClass");
      divRainy.classList.add("showClass");
      const img2 = document.getElementById("rains");
      const rainyweather = "weather is cool and it can rain today";
      description.innerHTML = rainyweather;

      // console.log(img2);
      //console.log("weather is cool and it can rain today");
    } else {
      const divRainy = document.getElementById("image2");
      const divSun = document.getElementById("image1");
      const img1 = document.getElementById("sun");
      divRainy.classList.remove("showClass");
      divRainy.classList.add("hiddenClass");
      divSun.classList.add("showClass");
      const hotweather = "weather is hot";
      description.innerHTML = hotweather;
    }
    // console.log("weather is very hot")
  });
