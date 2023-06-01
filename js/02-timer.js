const calendar = document.querySelector("#datetime-picker");
const startBttn = document.querySelector("[data-start]");
const timer = document.querySelector(".timer")

startBttn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates < this.defaultDate){
            window.alert("Please choose a date in the future")
        }

        // if statement not working 

        startBttn.disabled = false;
        console.log(selectedDates[0]);
        
    },
  };

flatpickr(calendar, options);


startBttn.addEventListener("click", startCountDown);

function startCountDown(){
    const currentTime = new Date();
    const now = currentTime.getTime();
    const distance = selectedDates - now;
    console.log(distance)
    
}