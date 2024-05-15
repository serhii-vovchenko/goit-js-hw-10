let dateTime = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

flatpickr(dateTime, options);
