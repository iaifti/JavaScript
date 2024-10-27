const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const buttonInput = document.getElementById('btn');
const bmiResult =  document.getElementById('bmi-result');
const weightConditionE1 =  document.getElementById('weight-condition');
function calculateBMI(){

    const heightValue =  heightInput/100;
    const weightValue =  weightInput*weightInput;

    const bmiValue =   heightValue/weightValue;

    bmiResult.Value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionE1.innerText = "Under weight";
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionE1.innerText = "Normal weight";
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionE1.innerText = "Overweight";
      } else if (bmiValue >= 30) {
        weightConditionE1.innerText = "Obesity";
      }
}

btn.addEventListener("click", calculateBMI);