//My api key
var apikey = {
    key: '6e7ce205-6ad7-4f0f-873c-f4541c8d0320'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Error to run request, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var text = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){



    //Show API information

        text = text + `
        
        <div class="media">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
            </div>
        </div>
    
        `;

        document.getElementById("coins").innerHTML = text;
        
    }
})
.catch((error) => {
    console.error(error.message);
});