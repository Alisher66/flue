const formEl = document.querySelector(".consultation__form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameEl = formEl.querySelector("#name");
  const phoneEl = formEl.querySelector("#phone");

  const name = nameEl.value.trim();
  const phone = phoneEl.value.trim();

  if (name != "" && phone != "") {
    const user = {
      name,
      phone,
    };
    sendData(user);
    nameEl.textContent = "";
    phoneEl.textContent = "";
  } else {
    alert("Заполните все поля");
  }
});

function sendData({ name, phone }) {
  alert(`Имя - ${name}, Номер телефона ${phone}`);
}
