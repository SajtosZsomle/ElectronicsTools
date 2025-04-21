const colorCodes = [
    { color: "Black", value: 0, multiplier: 1, tolerance: null },
    { color: "Brown", value: 1, multiplier: 10, tolerance: 1 },
    { color: "Red", value: 2, multiplier: 100, tolerance: 2 },
    { color: "Orange", value: 3, multiplier: 1000, tolerance: null },
    { color: "Yellow", value: 4, multiplier: 10000, tolerance: null },
    { color: "Green", value: 5, multiplier: 100000, tolerance: 0.5 },
    { color: "Blue", value: 6, multiplier: 1000000, tolerance: 0.25 },
    { color: "Violet", value: 7, multiplier: 10000000, tolerance: 0.1 },
    { color: "Gray", value: 8, multiplier: 100000000, tolerance: 0.05 },
    { color: "White", value: 9, multiplier: 1000000000, tolerance: null },
    { color: "Gold", value: null, multiplier: 0.1, tolerance: 5 },
    { color: "Silver", value: null, multiplier: 0.01, tolerance: 10 },
  ];
  
  function populateSelect(id, options, key) {
    const select = document.getElementById(id);
    options.forEach((opt) => {
      if (opt[key] !== null) {
        const option = document.createElement("option");
        option.value = opt.color;
        option.text = opt.color;
        select.appendChild(option);
      }
    });
  }
  
  populateSelect("band1", colorCodes, "value");
  populateSelect("band2", colorCodes, "value");
  populateSelect("multiplier", colorCodes, "multiplier");
  populateSelect("tolerance", colorCodes, "tolerance");
  
  document.getElementById("calculate").addEventListener("click", () => {
    const band1 = document.getElementById("band1").value;
    const band2 = document.getElementById("band2").value;
    const multiplier = document.getElementById("multiplier").value;
    const tolerance = document.getElementById("tolerance").value;
  
    const digit1 = colorCodes.find((c) => c.color === band1).value;
    const digit2 = colorCodes.find((c) => c.color === band2).value;
    const multiplierValue = colorCodes.find((c) => c.color === multiplier).multiplier;
    const toleranceValue = colorCodes.find((c) => c.color === tolerance).tolerance;
  
    const resistance = ((digit1 * 10) + digit2) * multiplierValue;
  
    document.getElementById("result").innerText = `Resistance: ${resistance} Ω ±${toleranceValue}%`;
  });
  