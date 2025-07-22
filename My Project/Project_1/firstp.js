
let darkmode = localStorage.getItem("darkmode");
const themeSwitches = document.getElementsByClassName("theme_switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

// Call the function, not just refer to it
if (darkmode === "active") enableDarkmode();

// Loop through all theme switch elements
for (let btn of themeSwitches) {
  btn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode"); // Refresh status
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
}