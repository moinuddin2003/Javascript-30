let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let weight = parseInt(document.querySelector('#weight').value);
    let height = parseInt(document.querySelector('#height').value);
    let results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `This is not a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `This is not a valid weight ${weight}`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            results.innerHTML += (`<p>Oh No! You are underWeight. Eat Healthy Food</p>`);
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML += (`<p>Oh Wow You are Healthy</p>`);
        }
        else (bmi > 24.6)
        {
            results.innerHTML += (`<p>Oh No! You are OverWeight</p>`)
        }

    }
});

