//The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

try{
    const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await response.json()
    
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author-name").textContent = `By:${data.user.name}`
} catch(err){
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg5ODQ1ODZ8&ixlib=rb-4.0.3&q=85)`
    
    document.getElementById('author-name').textContent = 'By:Jeffrey Workman'
}

try{
    const responseTwo = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    const data = await responseTwo.json()
    document.getElementById('crypto').innerHTML = `
            <div class='crypto-top'>
                <img class='cryptocoin-img' src='${data.image.small}' alt='${data.name}'/>
                <span class='cyptocoin-name'>${data.name}</span>
            </div>
            <p class='cryptocoin-current-price'><i class="fa-solid fa-bullseye"></i> ₹${data.market_data.current_price.inr}</p>
            <p class='cryptocoin-high_24h'><i class="fa-solid fa-caret-up"></i> ₹${data.market_data.high_24h.inr}</p>
            <p class='cryptocoin-low_24h'><i class="fa-solid fa-caret-down"></i> ₹${data.market_data.low_24h.inr}</p>`
} catch(err){
    console.error(err)
}


function updateTime() {
    const currentDate = new Date()
    document.getElementById('time').textContent = `${currentDate.toLocaleTimeString("en-us", { timeStyle: "short" })}`
}

setInterval(updateTime, 1000)


navigator.geolocation.getCurrentPosition(async position => {
    try{
        const response = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        const data = await response.json()//.json promises a object
        document.getElementById("weather").innerHTML = `
        <div class='weather-inner'>
        <img src=' https://openweathermap.org/img/wn/${data.weather[0].icon}.png' alt='@2xweather icon'class='weather-icon'/>
        <p class=temp>${Math.round(data.main.temp)}°C</p>
        </div>
        <p class=location>${data.name}</p>`
    } catch(err){
        console.error(err)
    }
})



