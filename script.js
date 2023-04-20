// ::     Settings    ::

const DISCORD_NAME_AND_TAG = "Axorax#3184";
const POPUP_DURATION = 2000;

// ::       End       ::

const popup = document.querySelector(".popup");
const discord = document.querySelector("#discord");

discord.addEventListener("click", () => {
  navigator.clipboard.writeText(DISCORD_NAME_AND_TAG);
  popup.style.transform = "translate(0%)";
  setTimeout(() => {
    popup.style.transform = "translate(300%)";
  }, POPUP_DURATION);
});

document.querySelector(".close").addEventListener("click", () => {
  popup.style.transform = "translate(300%)";
});
