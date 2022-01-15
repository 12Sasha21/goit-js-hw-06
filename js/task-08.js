const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email && password !== "") {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset(formData);
  } else {
    alert("Все поля должны быть заполнены");
  }
}
