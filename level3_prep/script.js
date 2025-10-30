function convertTemperature() {
    const celsiusInput = document.getElementById('celsiusInput');
    const celsius = celsiusInput.value;
    const fahrenheit = (celsius * 9 / 5) + 32;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${celsius}&#176;C = ${fahrenheit}&#176;F </p>`;
    resultDiv.style.display = 'block';
}


function year_to_age() {
    const yearInput = document.getElementById('yearOfBirth');
    const yearNum = yearInput.value;
    const age = document.getElementById('showAge');
    age.innerHTML = `<p> 2025 - ${yearNum} = ${2025 - yearNum} <p>`;
    age.style.display = 'block';
};