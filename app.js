
const arrowCalcuator = document.querySelector("img");
const form = document.querySelector("form");
const currentAge = document.querySelector(".age");

const calculateAge = (dayOfBirth, monthOfBirth, yearOfBirth) => {
    const years = new Date().getFullYear() - yearOfBirth;
    const months = new Date().getMonth() - monthOfBirth;
    const days = (new Date().getDate() - dayOfBirth) - 1;
    updateUi(days, months, years)
}

const updateUi = (day, month, year) => {
    const age = `
        <p><span class="years">${year}</span>years</p>
        <p><span class="months">${month}</span>months</p>
        <p><span class="days">${day}</span>days</p>
    `;
    currentAge.innerHTML = age;
}

form.addEventListener("keyup", event => {
    event.preventDefault();
    const dayOfBirth = form.day.value;
    const monthOfBirth = form.month.value;
    const yearOfBirth = form.year.value;
    calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);
})



