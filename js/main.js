// js/main.js

// Array of tool objects
const tools = [
  {
    name: "Resistor Color Code Calculator",
    description: "Determine resistor values based on color bands.",
    image: "images/resistor.jpg",
    link: "tools/resistor-calculator/index.html",
  },
  {
    name: "Ohm's Law Calculator",
    description: "Calculate voltage, current, resistance, or power.",
    image: "images/ohms-law.jpeg",
    link: "tools/ohms-law/index.html",
  },
  {
    name: "Voltage Divider Calculator",
    description: "Compute output voltage from resistor values.",
    image: "images/voltage-divider.jpg",
    link: "tools/voltage-divider/index.html",
  },
  {
    name: "LED Resistor Calculator",
    description: "Find the right resistor for your LED circuit.",
    image: "images/led-resistor.jpg",
    link: "tools/led-resistor/index.html",
  },
  {
    name: "Resistor Combinations Calculator",
    description: "Calculate total resistance for series and parallel resistors.",
    image: "images/resistor-combinations.jpg",
    link: "tools/resistor-combinations/index.html",
  },
];

// Function to render tool cards
function renderToolCards(filter = "") {
  const container = document.getElementById("toolCards");
  container.innerHTML = "";

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(filter.toLowerCase())
  );

  filteredTools.forEach(tool => {
    const card = document.createElement("a");
    card.href = tool.link;
    card.className =
      "block bg-white rounded shadow hover:shadow-xl transition transform hover:scale-105";
    card.innerHTML = `
      <img src="${tool.image}" alt="${tool.name}" class="w-full h-48 object-cover rounded-t">
      <div class="p-4">
        <h2 class="text-xl font-semibold">${tool.name}</h2>
        <p class="mt-2 text-gray-600">${tool.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderToolCards();

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", (e) => {
  renderToolCards(e.target.value);
});
