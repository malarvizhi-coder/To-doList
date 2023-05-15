module.exports = getDate;

function getDate(){
    let today = new Date();
    let currentDay = today.getDay();
    let day = new Date().toLocaleString('en-us', {weekday: 'long', day: 'numeric', month: 'long'});

  return day;
}