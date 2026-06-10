const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calcBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
let category = '';
let color = '';

calcBtn.addEventListener("click", () => {
    const height = heightInput.value;
    const weight = weightInput.value;
    if (height == '' || weight == '') {
        alert("put input");
        return;
    }
    const heightInMeter = height / 100; //since bmi formula needs height in meters and not cm
    const bmival = (weight / (heightInMeter * heightInMeter)).toFixed(1); //here .toFixed is used to limit the decimal of BMI to be calculated upto 1 decimal place!
    const bmi = parseFloat(bmival); //as bcoz of toFixed(1) the bmival is a string so here we convert it back to number for comparison

    if (bmi < 18.5) {
        category = "Underweight";
        message = "Eat more, this world literally has pizza discovered! 😍";
        color = "#60a5fa"; //blue
    } else if (bmi < 25) {
        category = "Normal Weight ✅";
        message = "The golden zone! Stay here 👑";
        color = "#4ade80";  //green
    } else if (bmi < 30) {
        category = "Overweight";
        message = "You're closer than you think! Just a bit more effort 💪";
        color = "#fb923c"; //orange
    } else {
        category = "Obese";
        message = "PLZ IMPROVE! You can do it 💪";
        color = "#ff0000"; //red
    }
    result.innerHTML = `
    <p class="text-3xl font-bold mb-1">${bmi}</p>
    <p class="text-1xl font-semibold" style="color:${color}">${category}</p>
    <p class="text-sm opacity-70 mt-1">${message}</p>
`;
});
