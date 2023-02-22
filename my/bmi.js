window.onload = () => {
	let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    let height = parseInt(document
			.getElementById("height").value);

	let weight = parseInt(document
			.getElementById("weight").value);

	let result = document.getElementById("result");

	
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height or Weight !";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight or Height !";
    else {

		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);
		if (bmi < 18.6) result.innerHTML =
			`<h3>BMI : <span>${bmi}</span> <br><br> Status : Underweight</h3>`;
			

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`<h3>BMI : <span>${bmi}</span> <br><br> Status : Normal</h3>`;

		else result.innerHTML =
			`<h3>BMI : <span>${bmi}</span>  <br><br> Status : Overweight</h3>`;
	}
}
