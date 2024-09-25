const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const queryTypeList = document.querySelectorAll(".inner-query-container label");
const message = document.querySelector("#message");
const consent = document.querySelector("#consent");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const error = document.querySelectorAll(".error");
let queryAdded = false;

const addFirstNameError = () => {
  const firstNameError = document.querySelector(".firstname-error");
  if (firstName.validity.valueMissing) {
    firstNameError.style.display = "inline-block";
    firstNameError.innerHTML = "This field is required";
  } else {
    firstNameError.style.display = "none";
  }
};

const addLastNameError = () => {
  const lastNameError = document.querySelector(".lastname-error");
  if (lastName.validity.valueMissing) {
    lastNameError.style.display = "inline-block";
    lastNameError.innerHTML = "This field is required";
  } else {
    lastNameError.style.display = "none";
  }
};

const addEmailError = () => {
  const emailError = document.querySelector(".email-error");
  if (email.validity.valueMissing) {
    emailError.style.display = "inline-block";
    emailError.innerHTML = "This field is required";
  } else if (email.validity.typeMismatch) {
    emailError.style.display = "inline-block";
    emailError.innerHTML = "Please enter a valid email address";
  } else {
    emailError.style.display = "none";
  }
};

const addQueryError = () => {
  const queryError = document.querySelector(".query-error");
  if (!queryAdded) {
    queryError.style.display = "inline-block";
    queryError.innerHTML = "Please select a query type";
  } else {
    queryError.style.display = "none";
  }
};

const clearQuery = () => {
  queryTypeList.forEach((value) => {
    const valueBefore = value.children[0];
    valueBefore.style.opacity = "0";
    value.style.borderColor = "";
    value.parentElement.style.backgroundColor = "";
    value.parentElement.style.borderColor = "";
  });
};

queryTypeList.forEach((val) => {
  val.addEventListener("click", () => {
    const valBefore = val.children[0];
    clearQuery();
    valBefore.style.opacity = "1";
    val.style.borderColor = "hsl(169, 82%, 27%)";
    val.style.borderWidth = "2px";
    val.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
    val.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
    queryAdded = true;
  });
});

const addMessageError = () => {
  const messageError = document.querySelector(".message-error");
  if (message.validity.valueMissing) {
    messageError.style.display = "inline-block";
    messageError.innerHTML = "This field is required";
  } else {
    messageError.style.display = "none";
  }
};

const addConsentError = () => {
  const consentError = document.querySelector('.consent-error');
  if (!consent.checked && consent.validity.valueMissing) {
    consentError.style.display = 'inline-block';
    consentError.innerHTML = 'To submit this form, please consent to being contacted';
  } else {
    consentError.style.display = 'none'
  }
};


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const notification = document.querySelector('.notification');
  addFirstNameError();
  addLastNameError();
  addEmailError();
  addQueryError();
  addMessageError();
  addConsentError();

  if (consent.checkValidity() && message.checkValidity() && firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && queryAdded) {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
    clearQuery();
    consent.click();
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000)
  }
});

message.addEventListener('change', (e) => {
  console.log(e.target.value);
});

form.addEventListener('submit', () => {
  console.log('here');
});
