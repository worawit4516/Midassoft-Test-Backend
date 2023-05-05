function getClockAngle(hh_mm: string): number {
  //Set variable
  let time = hh_mm;
  let hour = Number(time.split(":")[0]);
  let minute = Number(time.split(":")[1]);

  console.log("-----------------------------");
  console.log(`Time is : ${hour} : ${minute}`);

  //Set formular
  //1 Clock has 360°
  //1 Clock has 12 hour = 360/12 = 30° per 1 Hour
  //1 Clock has 60 minute = 360/60 = 6° per 1 Minute
  enum clockAngle {
    minute = 6,
    hour = 30,
  }

  //Calculate Shorter Angle
  function CalculateShorterAngle() {
    //Change 24 HR to 12 HR
    if (hour >= 12) {
      hour = hour - 12;
    }

    // Calculate angle
    let minuteAngle = minute * clockAngle.minute;
    let hourAngle = hour * clockAngle.hour;
    let firstBetweenAngle = Math.abs(hourAngle - minuteAngle);
    let secondBetweenAngle = 360 - firstBetweenAngle;

    console.log(`First angle : ${firstBetweenAngle}°`);
    console.log(`Second angle : ${secondBetweenAngle}°`);

    if (firstBetweenAngle > 180) {
      console.log(`Shorter Angle : ${secondBetweenAngle}`);
      return secondBetweenAngle;
    } else {
      console.log(`Shorter Angle : ${firstBetweenAngle}`);
      return firstBetweenAngle;
    }
  }

  return CalculateShorterAngle();
}

// Example
getClockAngle("09:00");
getClockAngle("17:30");
getClockAngle("20:14");
