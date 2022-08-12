
let time;
let date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


setInterval(() => {
    time = new Date();
    let local = time.toLocaleString();
    document.getElementById("m1").innerHTML = (local.slice(10, 22));
    document.getElementById("m2").innerHTML = (local.slice(0,9));

    time = new Date();
    let london = time.toLocaleString('en-GB', { timeZone: 'Europe/London' });
    document.getElementById("london").innerHTML = (london.slice(12, 20));
    let dubai = time.toLocaleString('en-GB', { timeZone: 'Asia/Dubai' });
    document.getElementById("dubai").innerHTML = (dubai.slice(12, 20));
    let kolkata = time.toLocaleString('en-GB', { timeZone: 'Asia/kolkata' });
    document.getElementById("kolkata").innerHTML = (kolkata.slice(12, 20));
    let paris = time.toLocaleString('en-GB', { timeZone: 'Europe/paris' });
    document.getElementById("paris").innerHTML = (paris.slice(12, 20));
    let singapore = time.toLocaleString('en-GB', { timeZone: 'Asia/singapore' });
    document.getElementById("singapore").innerHTML = (singapore.slice(12, 20));
    let newyork = time.toLocaleString('en-GB', { timeZone: 'America/New_York' });
    document.getElementById("newyork").innerHTML = (newyork.slice(12, 20));
    let moscow = time.toLocaleString('en-GB', { timeZone: 'Europe/Moscow' });
    document.getElementById("moscow").innerHTML = (moscow.slice(12, 20));
    let tokyo = time.toLocaleString('en-GB', { timeZone: 'Asia/Tokyo' });
    document.getElementById("tokyo").innerHTML = (tokyo.slice(12, 20));
    let losangeles = time.toLocaleString('en-GB', { timeZone: 'America/Los_angeles' });
    document.getElementById("losangeles").innerHTML = (losangeles.slice(12, 20));
    let rome = time.toLocaleString('en-GB', { timeZone: 'Europe/Rome' });
    document.getElementById("rome").innerHTML = (rome.slice(12, 20));
    let sydney = time.toLocaleString('en-GB', { timeZone: 'Australia/Sydney' });
    document.getElementById("sydney").innerHTML = (sydney.slice(12, 20));

    let muscat = time.toLocaleString('en-GB', { timeZone: 'Asia/muscat' });
    document.getElementById("muscat").innerHTML = (muscat.slice(12, 20));




}, 1000);


function utc_0000(){

    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone: 'Atlantic/Reykjavik', });
    window.alert("Current time in UTC:+00:00 is : "+currentTime.slice(12, 20));

}
function utc_0100(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Africa/Algiers',});
    window.alert("Current time in UTC:+01:00 is : "+currentTime.slice(12, 20));

}
function utc_0200(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Europe/Vienna'  , });
    window.alert("Current time in UTC:+02:00 is : "+currentTime.slice(12, 20));

}
function utc_0300(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Europe/Vienna'  , });
    window.alert("Current time in UTC:+03:00 is : "+currentTime.slice(12, 20));

}
function utc_0330(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Asia/Tehran' , });
    window.alert("Current time in UTC:+03:30 is : "+currentTime.slice(12, 20));

}
function utc_0400(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Asia/Dubai',  });
    window.alert("Current time in UTC:+04:00 is : "+currentTime.slice(12, 20));

}
function utc_0430(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Asia/Kabul'  , });
    window.alert("Current time in UTC:+04:30 is : "+currentTime.slice(12, 20));

}
function utc_0500(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Antarctica/Mawson', });
    window.alert("Current time in UTC:+05:00 is : "+currentTime.slice(12, 20));

}
function utc_0530(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone: 'Asia/Kolkata'   , });
    window.alert("Current time in UTC:+05:30 is : "+currentTime.slice(12, 20));

}
function utc_0545(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Asia/Kathmandu' , });
    window.alert("Current time in UTC:+05:45 is : "+currentTime.slice(12, 20));

}
function utc_0600(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:    'Asia/Dhaka' , });
    window.alert("Current time in UTC:+06:00 is : "+currentTime.slice(12, 20));

}
function utc_0630(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Indian/Cocos'  , });
    window.alert("Current time in UTC:+06:30 is : "+currentTime.slice(12, 20));

}
function utc_0700(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Asia/Bangkok'  , });
    window.alert("Current time in UTC:+07:00 is : "+currentTime.slice(12, 20));

}
function utc_0800(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Asia/Hong_Kong'  , });
    window.alert("Current time in UTC:+08:00 is : "+currentTime.slice(12, 20));

}
function utc_0845(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Australia/Eucla' , });
    window.alert("Current time in UTC:+08:45 is : "+currentTime.slice(12, 20));

}
function utc_0900(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:    'Asia/Dili', });
    window.alert("Current time in UTC:+09:00 is : "+currentTime.slice(12, 20));

}
function utc_0930(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Australia/Adelaide' , });
    window.alert("Current time in UTC:+09:30 is : "+currentTime.slice(12, 20));

}
function utc_1000(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone: 'Australia/Hobart'   , });
    window.alert("Current time in UTC:+10:00 is : "+currentTime.slice(12, 20));

}
function utc_1030(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone: 'Australia/Lord_Howe'   , });
    window.alert("Current time in UTC:+10:30 is : "+currentTime.slice(12, 20));

}
function utc_1100(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Antarctica/Casey'  , });
    window.alert("Current time in UTC:+11:00 is : "+currentTime.slice(12, 20));

}
function utc_1200(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Pacific/Auckland'  , });
    window.alert("Current time in UTC:+12:00 is : "+currentTime.slice(12, 20));

}
function utc_1300(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Pacific/Apia' , });
    window.alert("Current time in UTC:+13:00 is : "+currentTime.slice(12, 20));

}
function utc_1400(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Pacific/Kiritimati'  , });
    window.alert("Current time in UTC:+14:00 is : "+currentTime.slice(12, 20));

}
function utc_1(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Atlantic/Azores'   , });
    window.alert("Current time in UTC:-01:00 is : "+currentTime.slice(12, 20));

}
function utc_2(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'America/Noronha'  , });
    window.alert("Current time in UTC:-02:00 is : "+currentTime.slice(12, 20));

}
function utc_3(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Atlantic/Stanley'  , });
    window.alert("Current time in UTC:-03:00 is : "+currentTime.slice(12, 20));

}
function utc_30(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'America/St_Johns'  , });
    window.alert("Current time in UTC:-03:30 is : "+currentTime.slice(12, 20));

}
function utc_4(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'Atlantic/Bermuda' , });
    window.alert("Current time in UTC:-04:00 is : "+currentTime.slice(12, 20));

}
function utc_5(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'America/New_York'  , });
    window.alert("Current time in UTC:-05:00 is : "+currentTime.slice(12, 20));

}
function utc_6(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'America/Chicago' , });
    window.alert("Current time in UTC:+-06:00 is : "+currentTime.slice(12, 20));

    
}
function utc_7(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'America/Phoenix' , });
    window.alert("Current time in UTC:-07:00 is : "+currentTime.slice(12, 20));

}
function utc_8(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'America/Los_Angeles' , });
    window.alert("Current time in UTC:-08:00 is : "+currentTime.slice(12, 20));

}
function utc_9(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:   'America/Nome' , });
    window.alert("Current time in UTC:-09:00 is : "+currentTime.slice(12, 20));

}
function utc_930(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:    'Pacific/Marquesas' , });
    window.alert("Current time in UTC:-09:30 is : "+currentTime.slice(12, 20));


}
function utc_10(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:    'America/Adak' , });
    window.alert("Current time in UTC:-10:00 is : "+currentTime.slice(12, 20));

}
function utc_11(){
    time = new Date();
    let currentTime = time.toLocaleString('en-GB', { timeZone:  'Pacific/Niue' , });
    window.alert("Current time in UTC:-11:00 is : "+currentTime.slice(12, 20));

}
