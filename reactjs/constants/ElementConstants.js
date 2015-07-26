var ElementsConstants = {
  combine: [
    {condition: "Air + Air", result: "Pressure"},
    {condition: "Earth + Air", result: "Dust"},
    {condition: "Earth + Earth", result: "Pressure"},
    {condition: "Fire + Earth", result: "Lava"},
    {condition: "Water + Air", result: "Rain"},
    {condition: "Earth + Water", result: "Mud"},
    {condition: "Water + Fire", result: "Steam"},
    {condition: "Water + Water", result: "Sea"}
  ],

  elements: [
    {type: "Water", image_url: "assets/images/water.png"},
    {type: "Earth", image_url: "assets/images/earth.png"},
    {type: "Air", image_url: "assets/images/air.png"},
    {type: "Fire", image_url: "assets/images/fire.png"},
    {type: "Pressure", image_url: "assets/images/pressure.png"},
    {type: "Dust", image_url: "assets/images/dust.png"},
    {type: "Energy", image_url: "assets/images/energy.png"},
    {type: "Lava", image_url: "assets/images/lava.png"},
    {type: "Rain", image_url: "assets/images/rain.png"},
    {type: "Mud", image_url: "assets/images/mud.png"},
    {type: "Steam", image_url: "assets/images/steam.png"},
    {type: "Sea", image_url: "assets/images/sea.png"}
  ]
}

module.exports = ElementsConstants;