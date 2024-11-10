
function getWeather(){
    const apiKey = "3bd9b53a9b9d4d36894133733241011";
    const city = document.getElementById("city").value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            if(data.error) {
                document.getElementById("weatherResult").innerHTML = `<p>City not found</p>`
            }

            
            const temp = data.current.temp_c;
            const description = data.current.condition.text;
            const windSpeed = data.current.wind_kph;
            const iconUrl = `https:${data.current.condition.icon}`;
            console.log(data.current.condition);
            
        document.getElementById("weatherResult").innerHTML = `
            <h2>Weather in ${data.location.name}</h2>
            <img src="${iconUrl}" >
            <p>Temperature: ${temp}°C</p>
            <p>Condition: ${description}</p>
            <p>Wind Speed ${windSpeed}</p>`;
        })

        .catch(error => {
            console.error("Error fething data: ",error)
        })


        
    
}