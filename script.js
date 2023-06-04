function updateDateTime() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = now.toLocaleString('default', { month: 'long' });
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Formatting the time (HH:MM:SS)
    var time = hours.toString().padStart(2, '0') + ':' +
               minutes.toString().padStart(2, '0') + ':' +
               seconds.toString().padStart(2, '0');

    // Formatting the date (Day, DD Month YYYY)
    var currentDate = day + ', ' +
                      date.toString().padStart(2, '0') + ' ' +
                      month + ' ' +
                      year;

    // Displaying the day, date, and time in the element with the id "datetime"
    document.getElementById('datetime').textContent = currentDate;
    document.getElementById('time').textContent = time;

    // Updating the time every second (1000 milliseconds)
    setTimeout(updateDateTime, 1000);
  }

  // Calling the updateDateTime() function for the first time
  updateDateTime();