let colors = [
  "Aliceblue",
  "Antiquewhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "Blanchedalmond",
  "Blue",
  "Blueviolet",
  "Brown",
  "Burlywood",
  "Cadetblue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "Cornflowerblue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "Darkblue",
  "Darkcyan",
  "Darkgoldenrod",
  "Darkgray",
  "Darkgreen",
  "Darkgrey",
  "Darkkhaki",
  "Darkmagenta",
  "Darkolivegreen",
  "Darkorange",
  "Darkorchid",
  "Darkred",
  "Darksalmon",
  "Darkseagreen",
  "Darkslateblue",
  "Darkslategray",
  "Darkslategrey",
  "Darkturquoise",
  "Darkviolet",
  "Deeppink",
  "Deepskyblue",
  "Dimgray",
  "Dimgrey",
  "Dodgerblue",
  "Firebrick",
  "Floralwhite",
  "Forestgreen",
  "Fuchsia",
  "Gainsboro",
  "Ghostwhite",
  "Goldenrod",
  "Gold",
  "Gray",
  "Green",
  "Greenyellow",
  "Grey",
  "Honeydew",
  "Hotpink",
  "Indianred",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavenderblush",
  "Lavender",
  "Lawngreen",
  "Lemonchiffon",
  "Lightblue",
  "Lightcoral",
  "Lightcyan",
  "Lightgoldenrodyellow",
  "Lightgray",
  "Lightgreen",
  "Lightgrey",
  "Lightpink",
  "Lightsalmon",
  "Lightseagreen",
  "Lightskyblue",
  "Lightslategray",
  "Lightslategrey",
  "Lightsteelblue",
  "Lightyellow",
  "Lime",
  "Limegreen",
  "Linen",
  "Magenta",
  "Maroon",
  "Mediumaquamarine",
  "Mediumblue",
  "Mediumorchid",
  "Mediumpurple",
  "Mediumseagreen",
  "Mediumslateblue",
  "Mediumspringgreen",
  "Mediumturquoise",
  "Mediumvioletred",
  "Midnightblue",
  "Mintcream",
  "Mistyrose",
  "Moccasin",
  "Navajowhite",
  "Navy",
  "Oldlace",
  "Olive",
  "Olivedrab",
  "Orange",
  "Orangered",
  "Orchid",
  "Palegoldenrod",
  "Palegreen",
  "Paleturquoise",
  "Palevioletred",
  "Papayawhip",
  "Peachpuff",
  "Peru",
  "Pink",
  "Plum",
  "Powderblue",
  "Purple",
  "Rebeccapurple",
  "Red",
  "Rosybrown",
  "Royalblue",
  "Saddlebrown",
  "Salmon",
  "Sandybrown",
  "Seagreen",
  "Seashell",
  "Sienna",
  "Silver",
  "Skyblue",
  "Slateblue",
  "Slategray",
  "Slategrey",
  "Snow",
  "Springgreen",
  "Steelblue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "Whitesmoke",
  "Yellow",
  "Yellowgreen"
];

let names = ["t-shirt", "pants", "watch", "socks", "shoes", "hat", "glasses"];

let products = [];
let counter = 0;
for (let iName = 0; iName < names.length; iName++) {
  for (let iColor = 0; iColor < colors.length; iColor++) {
    let name = `${colors[iColor]} ${names[iName]}`;
    products.push({
      price: `$${names[iName].length}.99`,
      stocked: name.length % 3 !== 0,
      name,
      id: counter
    });
    counter++
  }
}

export default products;
