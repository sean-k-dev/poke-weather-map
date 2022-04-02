const tooltipBlock = document.querySelector('#tooltipBlock')
const tooltipHeading = document.querySelector('#tooltipHeading')
const tooltipImage = document.querySelector('#tooltipImage')
const weatherForecast = document.querySelector('#weatherForecast')
const weatherType = document.querySelector('#weatherType')
const ttipSubsection = document.querySelector('#ttipSubsection')
const musicSource = document.querySelector('#musicSource')
currentScale.innerText = "°C"

// Closing the tooltip

document.querySelector('#closeTooltip').addEventListener('click', closeTooltip)
let celsius = 0
function closeTooltip() {
    document.querySelector('#tooltipBlock').style.visibility = "hidden"
    musicSource.src = ""
    currentScale.innerText = "°C"
}

// Convert between Celsius and Fahrenheit

function toggleCF() {
  let currentScale = document.getElementById('currentScale');
  
  if(currentScale.innerText=="°C"){
    currentScale.innerText="°F";}
  else{
    currentScale.innerText="°C";}

  let currentTemp = document.querySelector('#currentTemp')
  let toFar = celsius * 9/5 + 32

  if(currentTemp.innerText == celsius){
    currentTemp.innerText=toFar;
  } else if (currentTemp.innerText == toFar) {
    currentTemp.innerText=celsius;
  }
}

function littlerootTown() {
    tooltipBlock.style.visibility = "visible"
    tooltipHeading.innerText = "Littleroot Town"
    tooltipImage.src = "img/tooltip/littleroot.png"
    weatherForecast.src = "img/sunny.png"
    weatherType.innerText = "Sunny"
    celsius = 16
    currentTemp.innerText = celsius
    ttipSubsection.innerText = "Sunny spells with cloud forming later on in the afternoon. Large numbers of Wingull spotted stealing food."
    musicSource.src = "https://www.youtube.com/embed/zRGCzCn5azI"
    document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Littleroot_Town";
}

function oldaleTown() {
    tooltipBlock.style.visibility = "visible"
    tooltipHeading.innerText = "Oldale Town"
    tooltipImage.src = "img/tooltip/oldale.png"
    weatherForecast.src = "img/sunny.png"
    weatherType.innerText = "Sunny"
    celsius = 18
    currentTemp.innerText = celsius
    ttipSubsection.innerText = "A fine day with clouds forming later on. Possible outbreak of Roselia in Route 103 to the north."
    musicSource.src = "https://www.youtube.com/embed/PDwGcb-7zlE"
    document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Oldale_Town";
}

function petalburgCity() {
    tooltipBlock.style.visibility = "visible"
    tooltipHeading.innerText = "Petalburg City"
    tooltipImage.src = "img/tooltip/petalburg.png"
    weatherForecast.src = "img/cloudy.png"
    weatherType.innerText = "Cloudy"
    celsius = 17
    currentTemp.innerText = celsius
    ttipSubsection.innerText = "Cloudy with spells of sunshine later on in the day. Large numbers of Wurmple have recently been sighted."
    musicSource.src = "https://www.youtube.com/embed/j1RhmU2md7Q"
    document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Petalburg_City";
}

function rustboroCity() {
    tooltipBlock.style.visibility = "visible"
    tooltipHeading.innerText = "Rustboro City"
    tooltipImage.src = "img/tooltip/rustboro.png"
    weatherForecast.src = "img/partlycloudy.png"
    weatherType.innerText = "Part Cloudy"
    celsius = 19
    currentTemp.innerText = celsius
    ttipSubsection.innerText = "Sightings of Whismur in the town, largely due to the ongoing drilling operation in Rusturf Tunnel."
    musicSource.src = "https://www.youtube.com/embed/eHFnE2cHx3E"
    document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Rustboro_City";
}

function dewfordTown() {
    tooltipBlock.style.visibility = "visible"
    tooltipHeading.innerText = "Dewford Town"
    tooltipImage.src = "img/tooltip/dewford.png"
    weatherForecast.src = "img/rain.png"
    weatherType.innerText = "Raining"
    celsius = 23
    currentTemp.innerText = celsius
    ttipSubsection.innerText = "Persistent rain all day, which may result in minor flooding on the north beach near Granite Cave."
    musicSource.src = "https://www.youtube.com/embed/cQOtMOtLKOc"
    document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Dewford_Town";
}

function slateportCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Slateport City"
  tooltipImage.src = "img/tooltip/slateport.png"
  weatherForecast.src = "img/partlycloudy.png"
  weatherType.innerText = "Part Cloudy"
  celsius = 24
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "A fine day with a mild easterly breeze and sunny spells, ideal weather for people visiting Slateport Beach."
  musicSource.src = "https://www.youtube.com/embed/xOHNU0eS1kU"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Slateport_City";
}

function mauvilleCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Mauville City"
  tooltipImage.src = "img/tooltip/mauville.png"
  weatherForecast.src = "img/sunny.png"
  weatherType.innerText = "Sunny"
  celsius = 21
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "A warn sunny day expected, however be wary of failing power in the city due to issues in New Mauville."
  musicSource.src = "https://www.youtube.com/embed/eHFnE2cHx3E"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Mauville_City";
}

function verdanturfTown() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Verdanturf Town"
  tooltipImage.src = "img/tooltip/verdanturf.png"
  weatherForecast.src = "img/sunny.png"
  weatherType.innerText = "Sunny"
  celsius = 19
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Remaining sunny throughout the day. Large swarms of Geodude spotted coming from Rusturf Tunnel."
  musicSource.src = "https://www.youtube.com/embed/vfMDqrEvbTo"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Verdanturf_Town";
}

function lavaridgeTown() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Lavaridge Town"
  tooltipImage.src = "img/tooltip/lavaridge.png"
  weatherForecast.src = "img/sunny.png"
  weatherType.innerText = "Sunny"
  celsius = 28
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Perfect weather for visiting the hot springs, however please be aware of falling soot from Mt. Chimney."
  musicSource.src = "https://www.youtube.com/embed/PDwGcb-7zlE"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Lavaridge_Town";
}

function mtChimney() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Mt. Chimney"
  tooltipImage.src = "img/tooltip/mtchimney.png"
  weatherForecast.src = "img/fog.png"
  weatherType.innerText = "Foggy"
  celsius = 33
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Cable cars in limited operation. Caution is advised on the mountain due to heavy fog and high humidity."
  musicSource.src = "https://www.youtube.com/embed/Y8jsebdjzG0"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Mt._Chimney";
}

function hoennDesert() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Route 111 Desert"
  tooltipImage.src = "img/tooltip/desert.png"
  weatherForecast.src = "img/caution.png"
  weatherType.innerText = "Sand Storm"
  celsius = 41
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Weather Warning in place: Do not enter the Desert without a suitable Ground Pokémon and Go-Goggles."
  musicSource.src = "https://www.youtube.com/embed/tlXLPqChx94"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Hoenn_Route_111";
}

function fallarborTown() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Fallarbor Town"
  tooltipImage.src = "img/tooltip/fallarbor.png"
  weatherForecast.src = "img/fog.png"
  weatherType.innerText = "Foggy"
  celsius = 18
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Warm, with low level fog building up on the ground. Large piles of ash soot may attract wild Spinda."
  musicSource.src = "https://www.youtube.com/embed/D7_y2QqrhdQ"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Fallarbor_Town";
}

function weatherInstitute() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Weather Institute"
  tooltipImage.src = "img/tooltip/weather.png"
  weatherForecast.src = "img/rain.png"
  weatherType.innerText = "Heavy Rain"
  celsius = 22
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Torrential downpour, likely to ease towards the afternoon all across Route 119. Be wary of wild Tropius."
  musicSource.src = "https://www.youtube.com/embed/fnWPqqT2aEs"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Weather_Institute";
}

function fortreeCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Fortree City"
  tooltipImage.src = "img/tooltip/fortree.png"
  weatherForecast.src = "img/rain.png"
  weatherType.innerText = "Light Rain"
  celsius = 20
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Light rain spells throughout the day. A swarm of wild Lotad have been spotted gathering rain water."
  musicSource.src = "https://www.youtube.com/embed/UnhZBzUx3J0"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Fortree_City";
}

function mtPyre() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Mt. Pyre"
  tooltipImage.src = "img/tooltip/mtpyre.png"
  weatherForecast.src = "img/caution.png"
  weatherType.innerText = "Foggy"
  celsius = 21
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Extremely low visibility, not advised to climb the mountain today. At risk of attack from ghost Pokémon."
  musicSource.src = "https://www.youtube.com/embed/kEmNG9l9F2E"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Mt_Pyre";
}

function lilycoveCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Lilycove City"
  tooltipImage.src = "img/tooltip/lilycove.png"
  weatherForecast.src = "img/partlycloudy.png"
  weatherType.innerText = "Part Cloudy"
  celsius = 24
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Remaining cloudy throughout the day. Travel to Route 124 impeded by a herd of wild Wailmer."
  musicSource.src = "https://www.youtube.com/embed/gGviM2e06ak"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Lilycove_City";
}

function mossdeepCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Mossdeep City"
  tooltipImage.src = "img/tooltip/mossdeep.png"
  weatherForecast.src = "img/partlycloudy.png"
  weatherType.innerText = "Part Cloudy"
  celsius = 21
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Likely to remain warm and cloudy. Beldum spotted due to work taking place at the Mossdeep Space Centre."
  musicSource.src = "https://www.youtube.com/embed/eHFnE2cHx3E"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Mossdeep_City";
}

function sootopolisCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Sootopolis City"
  tooltipImage.src = "img/tooltip/sootopolis.png"
  weatherForecast.src = "img/caution.png"
  weatherType.innerText = "Heatwave"
  celsius = 33
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Please stay indoors, unnatural heatwave occurring due to the effects of an unknown Pokémon."
  musicSource.src = "https://www.youtube.com/embed/3eb_y2h6E74"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Sootopolis_City";
}

function everGrandeCity() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Ever Grande City"
  tooltipImage.src = "img/tooltip/evergrande.png"
  weatherForecast.src = "img/sunny.png"
  weatherType.innerText = "Sunny"
  celsius = 24
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "Weather to remain bright and sunny all across Ever Grande Island. Beware of falling rocks in Victory Road."
  musicSource.src = "https://www.youtube.com/embed/jxgO-KMI-4w"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Ever_Grande_City";
}

function pacifidlogTown() {
  tooltipBlock.style.visibility = "visible"
  tooltipHeading.innerText = "Pacifidlog Town"
  tooltipImage.src = "img/tooltip/pacifidlog.png"
  weatherForecast.src = "img/partlycloudy.png"
  weatherType.innerText = "Part Cloudy"
  celsius = 22
  currentTemp.innerText = celsius
  ttipSubsection.innerText = "A largely mild and cloudy day. Be wary of rough sea conditions if sailing between here and Slateport City."
  musicSource.src = "https://www.youtube.com/embed/gGviM2e06ak"
  document.getElementById('linkToMore').href = "https://bulbapedia.bulbagarden.net/wiki/Pacifidlog_Town";
}

// Draggable Tooltip

dragElement(document.getElementById("tooltipBlock"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}