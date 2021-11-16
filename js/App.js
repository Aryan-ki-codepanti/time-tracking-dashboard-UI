// DOM elements
const workBox = document.querySelector(".work");
const playBox = document.querySelector(".play");
const studyBox = document.querySelector(".study");
const exerciseBox = document.querySelector(".exercise");
const socialBox = document.querySelector(".social");
const selfCareBox = document.querySelector(".self-care");

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
                .timeframes.weekly.current}`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            case "Play":
                playBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}`;
                playBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            case "Study":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            case "Exercise":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            case "Social":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            case "Self Care":
                workBox.querySelector("h1").innerText = `${task
                .timeframes.weekly.current}`;
                workBox.querySelector("span").innerText = `Last Week - ${task
                .timeframes.weekly.previous}`;
                break;
        
            default:
                break;
        }
    })
};
