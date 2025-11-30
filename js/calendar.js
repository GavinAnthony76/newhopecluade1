/**
 * Calendar Functionality for Events Page
 * Killeen New Hope SDA Church Website
 */

class ChurchCalendar {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentDate = new Date();
    this.events = [];

    if (this.container) {
      this.init();
    }
  }

  init() {
    this.loadEvents();
    this.render();
    this.attachEventListeners();
  }

  loadEvents() {
    // Sample events - replace with API call or data source
    this.events = [
      {
        id: 1,
        title: 'Sabbath School',
        date: '2024-12-07',
        time: '9:30 AM',
        type: 'worship',
        recurring: 'weekly',
        description: 'Bible study classes for all ages'
      },
      {
        id: 2,
        title: 'Divine Worship',
        date: '2024-12-07',
        time: '11:30 AM',
        type: 'worship',
        recurring: 'weekly',
        description: 'Main worship service'
      },
      {
        id: 3,
        title: 'Community Service Day',
        date: '2024-12-15',
        time: '9:00 AM',
        type: 'community',
        description: 'Serving our Killeen community'
      },
      {
        id: 4,
        title: 'Prayer Meeting',
        date: '2024-12-04',
        time: '7:00 PM',
        type: 'worship',
        recurring: 'weekly',
        description: 'Midweek prayer and Bible study'
      }
    ];
  }

  render() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const headerHTML = '<div class="calendar__header"><button class="calendar__nav" id="prev-month">&larr;</button><h3 class="calendar__title">' + this.getMonthName(month) + ' ' + year + '</h3><button class="calendar__nav" id="next-month">&rarr;</button></div>';

    this.container.innerHTML = '<div class="calendar">' + headerHTML + '<div class="calendar__weekdays">' + this.renderWeekdays() + '</div><div class="calendar__days">' + this.renderDays(year, month) + '</div></div>';
  }

  renderWeekdays() {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays.map(day => '<div class="calendar__weekday">' + day + '</div>').join('');
  }

  renderDays(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let html = '';

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      html += '<div class="calendar__day calendar__day--other-month">' + (daysInPrevMonth - i) + '</div>';
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      const dayEvents = this.getEventsForDate(dateStr);
      const isToday = this.isToday(year, month, day);
      const hasEvents = dayEvents.length > 0;

      const todayClass = isToday ? 'calendar__day--today' : '';
      const eventsClass = hasEvents ? 'calendar__day--has-events' : '';

      html += '<div class="calendar__day ' + todayClass + ' ' + eventsClass + '" data-date="' + dateStr + '"><span class="calendar__day-number">' + day + '</span></div>';
    }

    return html;
  }

  getEventsForDate(dateStr) {
    return this.events.filter(event => event.date === dateStr);
  }

  isToday(year, month, day) {
    const today = new Date();
    return today.getFullYear() === year &&
           today.getMonth() === month &&
           today.getDate() === day;
  }

  getMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

  attachEventListeners() {
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousMonth());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextMonth());
    }
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.render();
    this.attachEventListeners();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.render();
    this.attachEventListeners();
  }
}

// Initialize calendar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('church-calendar')) {
    new ChurchCalendar('church-calendar');
  }
});
