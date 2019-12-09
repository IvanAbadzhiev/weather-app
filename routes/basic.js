const request = require("superagent");
const NodeCache = require( "node-cache" );
const cache = new NodeCache();

module.exports = ({ router }) => {
    
    router.get("/", (ctx) => {
        ctx.body = "Weather API v0.1";
    })

    router.get("/weather/:city", async (ctx) => {

        const { API_BASE_URL, OPEN_WEATHER_APP_ID } = process.env;
        const { city } = ctx.params;

        // If exists in the cache get it from there
        const response = cache.get( "weather-sofia" );

        if(response) {
            ctx.body = response;
            return response;
        }
        
        await request
            .get(`${API_BASE_URL}?q=${city}&appid=${OPEN_WEATHER_APP_ID}&units=metric`)
            .then(res => {
                //set the response in the cache
                cache.set( "weather-sofia", res.body, 6000 );
                ctx.body = res.body;
            })
            .catch(err => {
                console.log(err);
            });
    });
};