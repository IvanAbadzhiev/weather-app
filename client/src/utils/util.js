export const getDayByTimestamp = (timestamp) => {
    const date = new Date();
    
    date.setTime(timestamp * 1000); // Timestamp in js is in miliseconds
    date.toUTCString();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}