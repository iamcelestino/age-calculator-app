
const form = document.querySelector("form");
const currentAge = document.querySelector(".age");
const errorMessage = document.querySelectorAll(".error__message");
const validErrorMessage = document.querySelectorAll(".valid__error");
const inputs = document.querySelectorAll("input");
const descriptions = document.querySelectorAll(".description");

const calculateAge = (dayOfBirth, monthOfBirth, yearOfBirth) => {

    const years = (new Date().getFullYear() - yearOfBirth);
    const months = (new Date().getMonth() - monthOfBirth);
    const days = ((new Date().getDate() - dayOfBirth) - 1) * (-1);

    if ((dayOfBirth > 31) && (monthOfBirth > 12) &&  (yearOfBirth > new Date().getFullYear())){
        validErrorMessage.forEach(error => {
            error.classList.remove("valid__error");

            inputs.forEach(item => {
                item.classList.add("inputError")
            })
        })
    }
    else if((dayOfBirth > 31)) {
        validErrorMessage[0].classList.remove("valid__error");

        descriptions.forEach(description => {
            description.style.color = "hsl(0, 100%, 67%)"
        } );

        inputs.forEach(item => {
            item.classList.add("inputError");
        });
    } 
    else if((monthOfBirth > 12)) {
        validErrorMessage[1].classList.remove("valid__error");

        descriptions.forEach(description => {
            description.style.color = "hsl(0, 100%, 67%)"
        } )

        inputs.forEach(item => {
            item.classList.add("inputError");
        })
    }
    else if((yearOfBirth  > new Date().getFullYear())) {
        validErrorMessage[2].classList.remove("valid__error");

        descriptions.forEach(description => {
            description.style.color = "hsl(0, 100%, 67%)"
        } )
        
        inputs.forEach(item => {
            item.classList.add("inputError");
        })
    }
    else if((dayOfBirth === "") || (monthOfBirth === "") || (yearOfBirth === "")) {
        errorMessage.forEach(error => {
            error.classList.remove("error__message");

            descriptions.forEach(description => {
                description.style.color = "hsl(0, 100%, 67%)"
            } );
            
            inputs.forEach(item => {
                item.classList.add("inputError");
            })
        })
    } 
    else {
        updateUi(days, months, years);
    }
}

const updateUi = (day, month, year) => {
    const age = `
        <p><span class="years">${year}</span>years</p>
        <p><span class="months">${month}</span>months</p>
        <p><span class="days">${day}</span>days</p>
    `;
    currentAge.innerHTML = age;
}

function getUserBirthday(event) {
    event.preventDefault();
    const dayOfBirth = form.day.value.trim();
    const monthOfBirth = form.month.value.trim();
    const yearOfBirth = form.year.value.trim();
    calculateAge(dayOfBirth, monthOfBirth, yearOfBirth);
   
}

form.addEventListener("submit", getUserBirthday);







