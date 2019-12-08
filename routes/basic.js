const request = require("superagent");

module.exports = ({ router }) => {
    
    router.get("/", (ctx) => {
        ctx.body = "Weather API v0.1";
    })

    router.get("/weather/:city", async (ctx) => {

        const { API_BASE_URL, OPEN_WEATHER_APP_ID } = process.env;
        const { city } = ctx.params;
        
        await request
            .get(`${API_BASE_URL}?q=${city}&appid=${OPEN_WEATHER_APP_ID}&units=metric`)
            .then(res => {
                ctx.body = res.body;
            })
            .catch(err => {
                console.log(err);
            });
    });
};