const toggle = document.querySelector('.toggle-switch');
const circle = document.querySelector('.circle');
const regularKeys = document.querySelectorAll('.regular-key');
const display = document.querySelector('.display-number');
const deleteBtn = document.querySelector('#delete-btn');
const resetBtn = document.querySelector('#reset-btn');
const equalBtn = document.querySelector('#equal-btn');

var theme = 1;
var styleVariables = [
  '--main-bg',
  '--keypad-bg',
  '--display-bg',
  '--special-keys',
  '--special-shadow',
  '--equals',
  '--equals-shadow',
  '--regular-keys',
  '--regular-shadow',
  '--regular-text',
  '--special-text',
  '--equals-text',
  '--body-text',
];
var themes = [
  ['hsl(222, 26%, 31%)', 'hsl(0, 0%, 90%)', 'hsl(268, 75%, 9%)'],
  ['hsl(223, 31%, 20%)', 'hsl(0, 5%, 81%)', 'hsl(268, 71%, 12%)'],
  ['hsl(224, 36%, 15%)', 'hsl(0, 0%, 93%)', 'hsl(268, 71%, 12%)'],
  ['hsl(225, 21%, 49%)', 'hsl(185, 42%, 37%)', 'hsl(281, 89%, 26%)'],
  ['hsl(224, 28%, 35%)', 'hsl(185, 58%, 25%)', 'hsl(285, 91%, 52%)'],
  ['hsl(6, 63%, 50%)', 'hsl(25, 98%, 40%)', 'hsl(176, 100%, 44%)'],
  ['hsl(6, 70%, 34%)', 'hsl(25, 99%, 27%)', 'hsl(177, 92%, 70%)'],
  ['hsl(30, 25%, 89%)', 'hsl(45, 7%, 89%)', 'hsl(268, 47%, 21%)'],
  ['hsl(28, 16%, 65%)', 'hsl(35, 11%, 61%)', 'hsl(290, 70%, 36%)'],
  ['hsl(221, 14%, 31%)', 'hsl(60, 10%, 19%)', 'hsl(52, 100%, 62%)'],
  ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)'],
  ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)', 'hsl(198, 20%, 13%)'],
  ['hsl(0, 0%, 100%)', 'hsl(60, 10%, 19%)', 'hsl(52, 100%, 62%)'],
];

var displayText = '';

function changeTheme() {
  theme++;
  if (theme > 3) {
    theme = 1;
  }
  circle.classList.value = `circle theme${theme}`;

  for (let i = 0; i < styleVariables.length; i++) {
    document.documentElement.style.setProperty(
      styleVariables[i],
      themes[i][theme - 1]
    );
  }
}
function inputKey(event) {
  displayText += event.target.innerText;
  updateDisplay(displayText);
}
function updateDisplay(text) {
  display.innerText = text;
}

function deleteLast() {
  displayText = displayText.slice(0, -1);
  updateDisplay(displayText);
}
function resetDisplay() {
  displayText = '0';
  updateDisplay(displayText);
}
function calculate() {
  displayText = displayText.replace(/x/g, '*');
  displayText = eval(displayText).toString();
  updateDisplay(displayText);
}

regularKeys.forEach(function addListener(key) {
  key.addEventListener('click', inputKey);
});
deleteBtn.addEventListener('click', deleteLast);
resetBtn.addEventListener('click', resetDisplay);
equalBtn.addEventListener('click', calculate);
toggle.addEventListener('click', changeTheme);
