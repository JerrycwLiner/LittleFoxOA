// 連結功能由 HTML 的 <a> 元素提供；此檔案保留供日後擴充互動功能。
document.querySelectorAll(".link-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.blur();
  });
});

const unlockForm = document.querySelector("#unlockForm");
const directorPassword = document.querySelector("#directorPassword");
const directorPanel = document.querySelector("#directorPanel");
const directorContent = document.querySelector("#directorContent");
const passwordMessage = document.querySelector("#passwordMessage");
const lockStatus = document.querySelector("#lockStatus");

unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (directorPanel.classList.contains("is-unlocked")) {
    directorPanel.classList.remove("is-unlocked");
    unlockForm.classList.remove("is-unlocked");
    directorContent.hidden = true;
    lockStatus.textContent = "已上鎖";
    event.submitter.textContent = "解鎖並展開";
    directorPassword.value = "";
    directorPassword.disabled = false;
    passwordMessage.textContent = "";
    directorPassword.focus();
    return;
  }

  if (directorPassword.value === "07250520") {
    directorPanel.classList.add("is-unlocked");
    unlockForm.classList.add("is-unlocked");
    directorContent.hidden = false;
    lockStatus.textContent = "已解鎖";
    event.submitter.textContent = "上鎖";
    directorPassword.value = "";
    directorPassword.disabled = true;
    passwordMessage.textContent = "";
    return;
  }

  passwordMessage.textContent = "密碼錯誤，請重新輸入。";
  directorPassword.select();
});
