function convertSecondsToTime(seconds) {
    return (
      (Math.trunc(seconds / 60) + "").padStart(2, "0") +
      ":" +
      ((seconds % 60) + "").padStart(2, "0")
    );
  }

  function convertTimeToSeconds(time) {
    return Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]);
  }

  function getClockTime(id) {    
   return document.getElementById(id).innerText;;
  }
  
  function setClockTime(id, time) {
    document.getElementById(id).innerText = time;
  }

  function updateClock(clockId){
    let time = getClockTime(clockId);
    let numericTime = convertTimeToSeconds(time);
    numericTime--;
    let formattedTime = convertSecondsToTime(numericTime);
    setClockTime(clockId, formattedTime);
  }