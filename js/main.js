document.addEventListener('DOMContentLoaded', () => {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');

  let hours = 0;
  let minutes = 0;

  function updateDisplay() {
      hoursInput.value = hours;
      minutesInput.value = minutes;
  }

  function startAddingHours() {
      hours += 1;
      updateDisplay();
  }

  function startSubtractingHours() {
      if (hours > 0) hours -= 1;
      updateDisplay();
  }

  function startAddingMinutes() {
      minutes += 15;
      if (minutes >= 60) {
          minutes = 0;
          startAddingHours();
      }
      updateDisplay();
  }

  function startSubtractingMinutes() {
      if (minutes > 0) {
          minutes -= 15;
      } else if (hours > 0) {
          minutes = 45;
          startSubtractingHours();
      }
      updateDisplay();
  }

  document.getElementById('addHours').addEventListener('click', startAddingHours);
  document.getElementById('subtractHours').addEventListener('click', startSubtractingHours);
  document.getElementById('addMinutes').addEventListener('click', startAddingMinutes);
  document.getElementById('subtractMinutes').addEventListener('click', startSubtractingMinutes);
});
