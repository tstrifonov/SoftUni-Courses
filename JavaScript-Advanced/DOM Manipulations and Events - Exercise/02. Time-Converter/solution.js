function attachEventsListeners() {
  const inputDays = document.querySelector("#days");
  const inputHours = document.querySelector("#hours");
  const inputMinutes = document.querySelector("#minutes");
  const inputSeconds = document.querySelector("#seconds");

  const buttonDays = document.querySelector("#daysBtn");
  const buttonHours = document.querySelector("#hoursBtn");
  const buttonMinutes = document.querySelector("#minutesBtn");
  const buttonSeconds = document.querySelector("#secondsBtn");

  buttonDays.addEventListener("click", () => {
    inputDays.value = inputDays.value / 1;
    inputHours.value = inputDays.value * 24;
    inputMinutes.value = inputDays.value * 1140;
    inputSeconds.value = inputDays.value * 86400;
  });

  buttonHours.addEventListener("click", () => {
    inputDays.value = inputHours.value / 24;
    inputHours.value = inputHours.value / 1;
    inputMinutes.value = inputHours.value * 60;
    inputSeconds.value = inputHours.value * 60 * 60;
  });

  buttonMinutes.addEventListener("click", () => {
    inputDays.value = inputMinutes.value / 1140;
    inputHours.value = inputMinutes.value / 60;
    inputMinutes.value = inputMinutes.value / 1;
    inputSeconds.value = inputMinutes.value * 60;
  });

  buttonSeconds.addEventListener("click", () => {
    inputDays.value = inputSeconds.value / 86400;
    inputHours.value = inputSeconds.value / 60 / 60;
    inputMinutes.value = inputSeconds.value / 60;
    inputSeconds.value = inputSeconds.value / 1;
  });
}
