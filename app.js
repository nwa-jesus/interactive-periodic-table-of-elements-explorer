const elements = [
  [1,"H","Hydrogen","1.008","nonmetal",1,1],[2,"He","Helium","4.0026","noble-gas",18,1],
  [3,"Li","Lithium","6.94","alkali-metal",1,2],[4,"Be","Beryllium","9.0122","alkaline-earth",2,2],[5,"B","Boron","10.81","metalloid",13,2],[6,"C","Carbon","12.011","nonmetal",14,2],[7,"N","Nitrogen","14.007","nonmetal",15,2],[8,"O","Oxygen","15.999","nonmetal",16,2],[9,"F","Fluorine","18.998","halogen",17,2],[10,"Ne","Neon","20.180","noble-gas",18,2],
  [11,"Na","Sodium","22.990","alkali-metal",1,3],[12,"Mg","Magnesium","24.305","alkaline-earth",2,3],[13,"Al","Aluminium","26.982","post-transition-metal",13,3],[14,"Si","Silicon","28.085","metalloid",14,3],[15,"P","Phosphorus","30.974","nonmetal",15,3],[16,"S","Sulfur","32.06","nonmetal",16,3],[17,"Cl","Chlorine","35.45","halogen",17,3],[18,"Ar","Argon","39.948","noble-gas",18,3],
  [19,"K","Potassium","39.098","alkali-metal",1,4],[20,"Ca","Calcium","40.078","alkaline-earth",2,4],[21,"Sc","Scandium","44.956","transition-metal",3,4],[22,"Ti","Titanium","47.867","transition-metal",4,4],[23,"V","Vanadium","50.942","transition-metal",5,4],[24,"Cr","Chromium","51.996","transition-metal",6,4],[25,"Mn","Manganese","54.938","transition-metal",7,4],[26,"Fe","Iron","55.845","transition-metal",8,4],[27,"Co","Cobalt","58.933","transition-metal",9,4],[28,"Ni","Nickel","58.693","transition-metal",10,4],[29,"Cu","Copper","63.546","transition-metal",11,4],[30,"Zn","Zinc","65.38","transition-metal",12,4],[31,"Ga","Gallium","69.723","post-transition-metal",13,4],[32,"Ge","Germanium","72.630","metalloid",14,4],[33,"As","Arsenic","74.922","metalloid",15,4],[34,"Se","Selenium","78.971","nonmetal",16,4],[35,"Br","Bromine","79.904","halogen",17,4],[36,"Kr","Krypton","83.798","noble-gas",18,4],
  [37,"Rb","Rubidium","85.468","alkali-metal",1,5],[38,"Sr","Strontium","87.62","alkaline-earth",2,5],[39,"Y","Yttrium","88.906","transition-metal",3,5],[40,"Zr","Zirconium","91.224","transition-metal",4,5],[41,"Nb","Niobium","92.906","transition-metal",5,5],[42,"Mo","Molybdenum","95.95","transition-metal",6,5],[43,"Tc","Technetium","[98]","transition-metal",7,5],[44,"Ru","Ruthenium","101.07","transition-metal",8,5],[45,"Rh","Rhodium","102.91","transition-metal",9,5],[46,"Pd","Palladium","106.42","transition-metal",10,5],[47,"Ag","Silver","107.87","transition-metal",11,5],[48,"Cd","Cadmium","112.41","transition-metal",12,5],[49,"In","Indium","114.82","post-transition-metal",13,5],[50,"Sn","Tin","118.71","post-transition-metal",14,5],[51,"Sb","Antimony","121.76","metalloid",15,5],[52,"Te","Tellurium","127.60","metalloid",16,5],[53,"I","Iodine","126.90","halogen",17,5],[54,"Xe","Xenon","131.29","noble-gas",18,5],
  [55,"Cs","Caesium","132.91","alkali-metal",1,6],[56,"Ba","Barium","137.33","alkaline-earth",2,6],[57,"La","Lanthanum","138.91","lanthanide",3,8],[58,"Ce","Cerium","140.12","lanthanide",4,8],[59,"Pr","Praseodymium","140.91","lanthanide",5,8],[60,"Nd","Neodymium","144.24","lanthanide",6,8],[61,"Pm","Promethium","[145]","lanthanide",7,8],[62,"Sm","Samarium","150.36","lanthanide",8,8],[63,"Eu","Europium","151.96","lanthanide",9,8],[64,"Gd","Gadolinium","157.25","lanthanide",10,8],[65,"Tb","Terbium","158.93","lanthanide",11,8],[66,"Dy","Dysprosium","162.50","lanthanide",12,8],[67,"Ho","Holmium","164.93","lanthanide",13,8],[68,"Er","Erbium","167.26","lanthanide",14,8],[69,"Tm","Thulium","168.93","lanthanide",15,8],[70,"Yb","Ytterbium","173.05","lanthanide",16,8],[71,"Lu","Lutetium","174.97","lanthanide",17,8],[72,"Hf","Hafnium","178.49","transition-metal",4,6],[73,"Ta","Tantalum","180.95","transition-metal",5,6],[74,"W","Tungsten","183.84","transition-metal",6,6],[75,"Re","Rhenium","186.21","transition-metal",7,6],[76,"Os","Osmium","190.23","transition-metal",8,6],[77,"Ir","Iridium","192.22","transition-metal",9,6],[78,"Pt","Platinum","195.08","transition-metal",10,6],[79,"Au","Gold","196.97","transition-metal",11,6],[80,"Hg","Mercury","200.59","transition-metal",12,6],[81,"Tl","Thallium","204.38","post-transition-metal",13,6],[82,"Pb","Lead","207.2","post-transition-metal",14,6],[83,"Bi","Bismuth","208.98","post-transition-metal",15,6],[84,"Po","Polonium","[209]","post-transition-metal",16,6],[85,"At","Astatine","[210]","halogen",17,6],[86,"Rn","Radon","[222]","noble-gas",18,6],
  [87,"Fr","Francium","[223]","alkali-metal",1,7],[88,"Ra","Radium","[226]","alkaline-earth",2,7],[89,"Ac","Actinium","[227]","actinide",3,9],[90,"Th","Thorium","232.04","actinide",4,9],[91,"Pa","Protactinium","231.04","actinide",5,9],[92,"U","Uranium","238.03","actinide",6,9],[93,"Np","Neptunium","[237]","actinide",7,9],[94,"Pu","Plutonium","[244]","actinide",8,9],[95,"Am","Americium","[243]","actinide",9,9],[96,"Cm","Curium","[247]","actinide",10,9],[97,"Bk","Berkelium","[247]","actinide",11,9],[98,"Cf","Californium","[251]","actinide",12,9],[99,"Es","Einsteinium","[252]","actinide",13,9],[100,"Fm","Fermium","[257]","actinide",14,9],[101,"Md","Mendelevium","[258]","actinide",15,9],[102,"No","Nobelium","[259]","actinide",16,9],[103,"Lr","Lawrencium","[266]","actinide",17,9],[104,"Rf","Rutherfordium","[267]","transition-metal",4,7],[105,"Db","Dubnium","[268]","transition-metal",5,7],[106,"Sg","Seaborgium","[269]","transition-metal",6,7],[107,"Bh","Bohrium","[270]","transition-metal",7,7],[108,"Hs","Hassium","[277]","transition-metal",8,7],[109,"Mt","Meitnerium","[278]","unknown",9,7],[110,"Ds","Darmstadtium","[281]","unknown",10,7],[111,"Rg","Roentgenium","[282]","unknown",11,7],[112,"Cn","Copernicium","[285]","transition-metal",12,7],[113,"Nh","Nihonium","[286]","post-transition-metal",13,7],[114,"Fl","Flerovium","[289]","post-transition-metal",14,7],[115,"Mc","Moscovium","[290]","post-transition-metal",15,7],[116,"Lv","Livermorium","[293]","post-transition-metal",16,7],[117,"Ts","Tennessine","[294]","halogen",17,7],[118,"Og","Oganesson","[294]","noble-gas",18,7]
];

const categoryNames = {
  "alkali-metal": "Alkali metal",
  "alkaline-earth": "Alkaline earth metal",
  "transition-metal": "Transition metal",
  "post-transition-metal": "Post-transition metal",
  metalloid: "Metalloid",
  nonmetal: "Other nonmetal",
  halogen: "Halogen",
  "noble-gas": "Noble gas",
  lanthanide: "Lanthanide",
  actinide: "Actinide",
  unknown: "Unknown properties"
};

const grid = document.querySelector("#periodic-grid");
const search = document.querySelector("#search");
const categoryFilter = document.querySelector("#category-filter");
const resultCount = document.querySelector("#result-count");
let selectedNumber = 1;

const tiles = elements.map(([number, symbol, name, mass, category, group, period]) => {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = `element ${category}`;
  tile.style.gridColumn = group;
  tile.style.gridRow = period;
  tile.style.setProperty("--index", number);
  tile.dataset.number = number;
  tile.dataset.category = category;
  tile.dataset.search = `${number} ${symbol} ${name}`.toLowerCase();
  tile.setAttribute("role", "gridcell");
  tile.setAttribute("aria-label", `${name}, atomic number ${number}, ${categoryNames[category]}`);
  tile.setAttribute("aria-selected", number === selectedNumber ? "true" : "false");
  tile.title = `${name} (${symbol}) · ${number}`;
  tile.innerHTML = `<span class="element-number">${number}</span><span class="element-symbol">${symbol}</span><span class="element-name">${name}</span>`;
  tile.addEventListener("click", () => selectElement(number));
  grid.append(tile);
  return tile;
});

function selectElement(number) {
  const element = elements[number - 1];
  if (!element) return;
  selectedNumber = number;
  const [atomicNumber, symbol, name, mass, category, group, period] = element;
  document.querySelector("#detail-symbol").textContent = symbol;
  document.querySelector("#detail-number").textContent = String(atomicNumber).padStart(2, "0");
  document.querySelector("#detail-name").textContent = name;
  document.querySelector("#fact-number").textContent = atomicNumber;
  document.querySelector("#fact-mass").textContent = mass;
  document.querySelector("#fact-group").textContent = category === "lanthanide" || category === "actinide" ? "3*" : group;
  document.querySelector("#fact-period").textContent = period > 7 ? (period === 8 ? "6*" : "7*") : period;
  document.querySelector("#detail-category").textContent = categoryNames[category];
  tiles.forEach((tile) => tile.setAttribute("aria-selected", Number(tile.dataset.number) === number ? "true" : "false"));
}

function updateResults() {
  const query = search.value.trim().toLowerCase();
  const category = categoryFilter.value;
  let matches = 0;
  tiles.forEach((tile) => {
    const match = tile.dataset.search.includes(query) && (category === "all" || tile.dataset.category === category);
    tile.classList.toggle("is-dimmed", !match);
    if (match) matches++;
  });
  resultCount.textContent = `${matches} ${matches === 1 ? "element" : "elements"}`;
}

search.addEventListener("input", updateResults);
categoryFilter.addEventListener("change", updateResults);
document.querySelector("#random-button").addEventListener("click", () => {
  const choices = elements.filter((element) => categoryFilter.value === "all" || element[4] === categoryFilter.value);
  const pick = choices[Math.floor(Math.random() * choices.length)];
  search.value = "";
  categoryFilter.value = "all";
  updateResults();
  selectElement(pick[0]);
  document.querySelector(`[data-number="${pick[0]}"]`).focus({ preventScroll: true });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    updateResults();
    search.blur();
  }
});

document.querySelector(".group-headings").innerHTML = Array.from({ length: 18 }, (_, index) => `<span>${index + 1}</span>`).join("");
document.querySelector(".series-labels").innerHTML = '<span>6</span><span>Lanthanides · 57–71</span><span>7</span><span>Actinides · 89–103</span>';