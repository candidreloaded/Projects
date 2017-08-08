

// //Home page
var weightButton = document.getElementById("weight-button");
var tempButton = document.getElementById("temp-button");
var homeButton = document.getElementById("home");


// //Hide the categories and back button by default
document.getElementById("weight-converter").style.display = "none";
document.getElementById("temp-converter").style.display = "none";

// //Add Event listener as to when the buttons are clicked.
var weightConverter = document.getElementById("weight-converter");

weightButton.addEventListener("click", function(){
    document.getElementById("home-message").style.display = "none";
    tempConverter.style.display = "none";
    weightConverter.style.display = "inline";
});

var tempConverter = document.getElementById("temp-converter");

tempButton.addEventListener("click", function(){
    document.getElementById("home-message").style.display = "none";
    weightConverter.style.display = "none";
    tempConverter.style.display = "inline";
});

// Home button
homeButton.addEventListener("click", function(){
    //Clear weight input and output values
    document.getElementById("select-weight").selectedIndex = 0;
   document.getElementById("input").value = "";
   document.getElementById("poundsOutput").innerHTML = "";
    document.getElementById("gramsOutput").innerHTML = "";
    document.getElementById("kgOutput").innerHTML = "";
    document.getElementById("ozOutput").innerHTML = "";
    //Clear temperature input and output values
    document.getElementById("select-temp").selectedIndex = 0;
    document.getElementById("tempinput").value = "";
     document.getElementById("celciusOutput").innerHTML = "";
    document.getElementById("faOutput").innerHTML = "";
    document.getElementById("kelvinOutput").innerHTML = "";

    weightConverter.style.display = "none";
    tempConverter.style.display = "none";
    document.getElementById("home-message").style.display = "inline";
});


//Weight Converter
document.getElementById("input").addEventListener("input", function(e){
    var input = e.target.value;
    //Weight Index
    switch(document.getElementById("select-weight").selectedIndex){
        case 0: 
            return alert("Please select unit");
        break;

        case 1: //Pounds
            var pounds = input;
            var grams = input/0.0022046;
            var kg = input/2.2046;
            var oz = input * 16;
        break;

         case 2: //Grams
            var pounds = input * 0.0022046;
            var grams = input;
            var kg = input/1000;
            var oz = input/28.35;
        break;

          case 3: //Kilograms
            var pounds = input * 2.20;
            var grams = input * 1000;
            var kg = input;
            var oz = input * 35.27;
        break;

         case 4: //Ounce
            var pounds = input/16;
            var grams = input * 28.35;
            var kg = input/35.27;
            var oz = input * input;
        break;
    }

    document.getElementById("poundsOutput").innerHTML = pounds;
    document.getElementById("gramsOutput").innerHTML = grams;
    document.getElementById("kgOutput").innerHTML = kg;
    document.getElementById("ozOutput").innerHTML = oz;

});

//Temperature converter
document.getElementById("tempinput").addEventListener("input", function(event){
 var tempinput = event.target.value; 
 
 // Temterature Index
  switch(document.getElementById("select-temp").selectedIndex){
  case 0: 
            return alert("Please select unit");
        break;

        case 1: //Celcius
            var celcius = tempinput;
            var fahrenheit = (tempinput * 1.8)+32;
            var kelvin = tempinput + 273;
        break;

        case 2: //Farenheit
            var celcius = (tempinput - 32)*0.5556;
            var fahrenheit = tempinput; 
            var kelvin = 0.56*(tempinput-32)+273;
        break;

        case 3: //Kelvin
            var celcius = tempinput - 273;
            var fahrenheit = 1.8*(tempinput-273)+32; 
            var kelvin = tempinput;
        break;
  }
    document.getElementById("celciusOutput").innerHTML = celcius;
    document.getElementById("faOutput").innerHTML = fahrenheit;
    document.getElementById("kelvinOutput").innerHTML = kelvin;
});
   
 




