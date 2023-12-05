function createCalendar(year, month) {
    var day_of_week = new Date(year, month, 1).getDay();
    var days_in_month = new Date(year, month + 1, 0).getDate();
    var calendar = document.querySelector('.days');
    calendar.innerHTML = '';

    // Create blank spaces for days of previous month
    for (var i = 0; i < day_of_week; i++) {
        let blank = document.createElement('li');
        calendar.appendChild(blank);
    }

    // Populate the calendar with the current month's days
    for (var day = 1; day <= days_in_month; day++) {
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
        if (new Date().getDate() === day && new Date().getMonth() === month) {
            dayItem.className = 'active'; // Highlight the current day
        }
        calendar.appendChild(dayItem);
    }
}

// Initialize the calendar
createCalendar(2022, 6); // July is month 6 (0-indexed)

// Add event listeners for prev/next
document.querySelector('.prev').addEventListener('click', function(){
    // Decrease month and update calendar
});

document.querySelector('.next').addEventListener('click', function(){
    // Increase month and update calendar
});
