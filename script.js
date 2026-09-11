const API_KEY ="e6cb8d2127af45239d6121704261009"
async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){
        document.getElementById("error").innerText = "Please enter a city name";
        document.getElementById("error").style.display = "block";
        return;
    }

    document.getElementById("error").style.display = "none";
    document.getElementById("loading").style.display = "block";
    document.getElementById("weather").style.display = "none";

    const url=`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.error){
            document.getElementById("error").innerText = "City not found. Please check spelling.";
            document.getElementById("error").style.display = "block";
            document.getElementById("loading").style.display = "none";
            return;
        }

        document.getElementById("weather").style.display="block";

        document.getElementById("location").innerHTML=
        data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerHTML=
        data.current.temp_c + " °C";

        document.getElementById("condition").innerHTML=
        data.current.condition.text;

        document.getElementById("humidity").innerHTML=
        data.current.humidity + "%";

        document.getElementById("wind").innerHTML=
        data.current.wind_kph + " km/h";

        document.getElementById("icon").src=
        "https:" + data.current.condition.icon;

    }

    catch(error){
        document.getElementById("error").innerText = "Something went wrong. Please try again.";
        document.getElementById("error").style.display = "block";
    }

    finally{
        document.getElementById("loading").style.display = "none";
    }

}