// DOM elements
const workBox = document.querySelector(".work");
const playBox = document.querySelector(".play");
const studyBox = document.querySelector(".study");
const exerciseBox = document.querySelector(".exercise");
const socialBox = document.querySelector(".social");
const selfCareBox = document.querySelector(".self-care");


const weekLink = "";
const dayLink = "";
const monthLink = "";

// Datafile
const file = "../data.json";

const getData = async () => {
    const res = await fetch(file);
    const data = await res.json();
    return data;
}

const weekClick = async () => {
    const data = await getData();

    data.forEach(task => {
        switch (task.title) {
            case "Work":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            case "Play":
                playBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                playBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            case "Study":
                studyBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                studyBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            case "Exercise":
                exerciseBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                exerciseBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            case "Social":
                socialBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                socialBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            case "Self Care":
                selfCareBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}hrs`;
                selfCareBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}hrs`;
                break;
        
            default:
                break;
        }
    })
};


const dayClick = async () => {
    const data = await getData();

    data.forEach(task => {
        switch (task.title) {
            case "Work":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                workBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            case "Play":
                playBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                playBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            case "Study":
                studyBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                studyBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            case "Exercise":
                exerciseBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                exerciseBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            case "Social":
                socialBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                socialBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            case "Self Care":
                selfCareBox.querySelector("h1").innerText = `${task
                .timeframes.daily.current}hrs`;
                selfCareBox.querySelector("span").innerText = `Last Day - ${task
                .timeframes.daily.previous}hrs`;
                break;
        
            default:
                break;
        }
    })
};

const monthClick = async () => {
    const data = await getData();

    data.forEach(task => {
        switch (task.title) {
            case "Work":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                workBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            case "Play":
                playBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                playBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            case "Study":
                studyBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                studyBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            case "Exercise":
                exerciseBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                exerciseBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            case "Social":
                socialBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                socialBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            case "Self Care":
                selfCareBox.querySelector("h1").innerText = `${task
                .timeframes.monthly.current}hrs`;
                selfCareBox.querySelector("span").innerText = `Last Month - ${task
                .timeframes.monthly.previous}hrs`;
                break;
        
            default:
                break;
        }
    })
};

weekClick();