const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const reveal = document.getElementById("reveal");
const runawayZone = document.getElementById("runawayZone");
const headline = document.getElementById("headline");
const dateValue = document.getElementById("dateValue");
const timeValue = document.getElementById("timeValue");
const locationValue = document.getElementById("locationValue");

let isRunning = false;

const rawQuery = window.location.search || (window.location.hash ? `?${window.location.hash.replace(/^#/, "")}` : "");
const params = new URLSearchParams(rawQuery);
const name = params.get("name");
const date = params.get("date");
const time = params.get("time");
const locationParam = params.get("location");

if (name) {
  headline.textContent = `${name}, Will you be my Valentine?`;
}
if (date) {
  dateValue.textContent = date;
}
if (time) {
  timeValue.textContent = time;
}
if (locationParam) {
  locationValue.textContent = locationParam;
}

const moveNoButton = () => {
  if (isRunning) return;
  isRunning = true;
  const zoneRect = runawayZone.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 12;

  const maxX = zoneRect.width - btnRect.width - padding * 2;
  const maxY = zoneRect.height - btnRect.height - padding * 2;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX) + padding);
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY) + padding);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  setTimeout(() => {
    isRunning = false;
  }, 180);
};

const isCloseToButton = (clientX, clientY) => {
  const btnRect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    clientX - (btnRect.left + btnRect.width / 2),
    clientY - (btnRect.top + btnRect.height / 2)
  );
  return distance < 140;
};

const handleApproach = (event) => {
  if (isCloseToButton(event.clientX, event.clientY)) {
    moveNoButton();
  }
};

const handleTouchStart = (event) => {
  if (!event.touches || !event.touches.length) return;
  const touch = event.touches[0];
  if (isCloseToButton(touch.clientX, touch.clientY)) {
    moveNoButton();
  }
};

const handleTouchMove = (event) => {
  if (!event.touches || !event.touches.length) return;
  const touch = event.touches[0];
  if (isCloseToButton(touch.clientX, touch.clientY)) {
    moveNoButton();
  }
};

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: true });
runawayZone.addEventListener("mousemove", handleApproach);
runawayZone.addEventListener("touchstart", handleTouchStart, { passive: true });
runawayZone.addEventListener("touchmove", handleTouchMove, { passive: true });

yesBtn.addEventListener("click", () => {
  reveal.classList.add("active");
  yesBtn.textContent = "Yay!";
  yesBtn.disabled = true;
  yesBtn.style.cursor = "default";
  yesBtn.style.transform = "none";
  noBtn.style.display = "none";
});
