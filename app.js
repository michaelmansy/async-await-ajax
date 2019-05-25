//we are basically just redo the same thing as fetch but using async/await

// function getWeather(woeid) {
//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//         .then(result => {
//             console.log(result);
//             return result.json();
//         })
//         .then(data => {
//             // console.log(data);
//             const today = data.consolidated_weather[0];
//             console.log(`Temperature in ${data.title} stay between ${today.min_temp} 
//         and ${today.max_temp}.`);
//         })
//         .catch(error => console.log(error));
// }

// getWeather(2487956);
// getWeather(44418);

async function getWeather(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch (error) {
        alert(error);
    }
}

getWeather(2487956);
getWeather(44418);




