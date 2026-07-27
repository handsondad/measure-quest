const height = document.querySelector('#height');
const heightValue = document.querySelector('#height-value');
const resetButton = document.querySelector('#reset-height');
const person = document.querySelector('#person');
const measureLine = document.querySelector('#measure-line');
const measureLabel = document.querySelector('#measure-label');
const rulerBar = document.querySelector('#ruler-bar');
const resultTitle = document.querySelector('#result-title');
const resultCopy = document.querySelector('#result-copy');
const cubitFact = document.querySelector('#cubit-fact');
const paceFact = document.querySelector('#pace-fact');

function updateScaleLab() {
  if (!height) return;

  const centimeters = Number(height.value);
  const cubit = centimeters * 0.27;
  const cubitsTall = centimeters / cubit;
  const pace = centimeters * 0.415;
  const roomPaces = 2000 / pace;
  const visualScale = centimeters / 170;

  heightValue.value = `${centimeters} cm`;
  heightValue.textContent = `${centimeters} cm`;
  measureLabel.textContent = `${centimeters} cm`;
  person.style.height = `${180 * visualScale}px`;
  measureLine.style.height = `${180 * visualScale}px`;
  rulerBar.style.width = `${Math.max(38, Math.min(57, cubit / 1.4))}%`;
  resultTitle.textContent = `你大约有 ${cubitsTall.toFixed(1)} 肘高`;
  resultCopy.textContent = `若把一肘近似看作身高的 27%，你的手臂长度约为 ${cubit.toFixed(1)} cm。用身体来测量很直观，但每个人的答案都不同——这正是后来需要共同标准的原因。`;
  cubitFact.textContent = `1 肘 ≈ ${cubit.toFixed(1)} cm`;
  paceFact.textContent = `20 m ≈ ${roomPaces.toFixed(1)} 步`;
}

height?.addEventListener('input', updateScaleLab);
resetButton?.addEventListener('click', () => {
  height.value = '170';
  updateScaleLab();
  height.focus();
});
updateScaleLab();
