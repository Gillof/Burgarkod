function createBurgerMenu(){
    var burgerMenu = document.getElementById("chooseBurger");
    var bildVariabel = document.createElement("img");
    for (i=0; i<food.length; i++){
        burgerMenu.innerHTML+= food[i].name +"<br>";

        if (food[i].lactose == true) {
            burgerMenu.innerHTML+= "Laktos" +"<br>";
        }

        if (food[i].gluten) {
            burgerMenu.innerHTML+= "Gluten" +"<br>";
        }

        bildVariabel.setAttribute("src", food[i].pictureSrc);
        burgerMenu.appendChild(bildVariabel);

        burgerMenu.innerHTML+= "<br>";
        createCheckbox("chooseBurger", i);
        burgerMenu.innerHTML+= "<br>";
        burgerMenu.innerHTML+= "<br>";        
    }
}

function createDrinkMenu(){
    var burgerMenu = document.getElementById("chooseDrink");
    var bildVariabel = document.createElement("img");
    for (i=0; i<drink.length; i++){
        burgerMenu.innerHTML+= drink[i].name +"<br>";

        if (drink[i].lactose == true) {
            burgerMenu.innerHTML+= "Laktos" +"<br>";
        }

        if (drink[i].gluten) {
            burgerMenu.innerHTML+= "Gluten" +"<br>";
        }

        bildVariabel.setAttribute("src", drink[i].pictureSrc);
        burgerMenu.appendChild(bildVariabel);

        burgerMenu.innerHTML+= "<br>";
        createCheckbox("chooseDrink", i);
        burgerMenu.innerHTML+= "<br>";
        burgerMenu.innerHTML+= "<br>";
    }
}

function createCheckbox(menuName, IDnr){
    var drinkMenu = document.getElementById(menuName);
    var checkbox=document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.id = menuName+"_"+IDnr; /*"checkboxID";*/

    var label = document.createElement("label");
    label.htmlFor ="id";
    label.appendChild(document.createTextNode("Välj"));

    drinkMenu.appendChild(checkbox);
    drinkMenu.appendChild(label);
}

function fetchCheckedCheckboxes(menuName){
    var activeCheckbox;
    var checkedBoxesIndex = [];
    var loopLength;
    if (menuName === "chooseBurger") {
        loopLength = food.length;
    }
    else if (menuName === "chooseDrink") {
        loopLength = drink.length;
    }
    for (i=0; i<loopLength; i++){
        activeCheckbox = document.getElementById(menuName+"_"+i);
        /*console.log("boxID: "+menuName+"_"+i);*/
        if (activeCheckbox.checked === true){
            checkedBoxesIndex.push(i);
        } 
    }
    /*console.log(checkedBoxesIndex);*/
    return checkedBoxesIndex;
}

function fromCheckboxToBurger(checkedBurgerIndex){
    for (i=0; i<checkedBurgerIndex.length; i++){
        console.log(food[checkedBurgerIndex[i]]);
    }
}

function fromCheckboxToDrink(checkedDrinkIndex){
    for (i=0; i<checkedDrinkIndex.length; i++){
        console.log(drink[checkedDrinkIndex[i]]);
    }    
}



/*var knappSkickaBeställning = document.getElementbyId("knappSkickaBeställning");
knappSkickaBeställning.onclick= buttonFunction1();*/
function buttonFunction1(){
    
    var checkedBurgerIndex = fetchCheckedCheckboxes("chooseBurger");
    var checkedDrinkIndex =    fetchCheckedCheckboxes("chooseDrink");
    
    console.log("Dessa är iklickade");
    console.log(checkedBurgerIndex);
    console.log(checkedDrinkIndex);
    
    fromCheckboxToBurger(checkedBurgerIndex);
    fromCheckboxToDrink(checkedDrinkIndex);

}

function buttonFunction2(){
    console.log("tryckt på andra knappen");
}




// INGRIDS TESTFUNKTIONER
// testar div

function functionTextTillDiv() {
    var variabelNamn = document.getElementById('testdiv');
    variabelNamn.innerHTML+="Text som ploppar upp för att jag tryck på knappen. ";
}

function functionTömDiv() {
    var variabelNamn = document.getElementById('testdiv');
    variabelNamn.innerHTML=" ";
}

// rester

/*var para = document.createElement("P");
var t = document.createTextNode(burgare1.info());
para.appendChild(t);
console.log('katten');*/

//document.getElementById("chooseBurger").innerHTML = "githubföreläsning";
//document.getElementById("chooseBurger").innerHTML = para;
//document.getElementById("chooseBurger").appendChild(para);


/*var obj={
    nbr:5,
	bool:true}
console.log(obj);
obj['str']='sträng sparad i obj';
console.log(obj['str']);*/


/* var el = document.getElementById('dryck');
console.log(el);
console.log('mantuss');
var els = document.getElementsByClassName('gluten');
console.log(els);
els = document.getElementsByTagName('tr');
console.log(els);
els.childNodes; */

/*els = document.getElementsByName('vad är namnet?');
console.log(els);*/


/*console.log(el.previousSibling('ska det stå nåt är?'));*/
/*console.log(el.childNodes);*/


/*var btn = document.createElement('button');
var txt = document.createTextNode('klicka här');
btn.appendChild(txt);
btn.setAttribute('class', 'aButtonClass');
console.log( btn.getAttribute('Class') );
console.log(btn);
el.appendChild(btn);
document.body.appendChild(btn);

document.body.appendChild(burgare1.info())*/



/*function myFunction() {
    //var para = document.createElement("DIV");
    //skapa id här efter (set attribute) (g.classname)
    var para = document.createElement("P");
    var t = document.createTextNode("texten jag vill se!!!!!!");
    para.appendChild(t);
    console.log('katten');
    document.body.appendChild(para);

    var lucia = document.getElementById('chooseBurger');
    lucia.innerHTML+="STSBibllan";
}*/


/*function MenuItem(name, kCal, gluten, lactose, pictureSrc) {
	this.name = name;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.pictureSrc = pictureSrc;
    this.info = function() {
        return this.name + ', kCal: ' + this.kCal;
    }
    this.isGluten = function () {
        return this.gluten;
    }    
    this.isLactose = function () {
        return this.lactose;
    }
}
// function constructBurgers(){
    var burgare1 = new MenuItem('Köttburgare1', '400', true, false, "burgare1.jpg");
    var burgare2 = new MenuItem('Vegburgare1', '300', true,true, "burgare2.jpg");
    var burgare3 = new MenuItem('Köttburgare2', '600', true, false, "burgare3.jpg"); 
    var burgare4 = new MenuItem('Köttburgare3', '300', true, true, "https://www.max.se/ImageVaultFiles/id_715/cf_14/Burgers-Max-Original.jpg");
    var burgare5=new MenuItem('Vegburgare2','600',true, false, "https://www.max.se/ImageVaultFiles/id_715/cf_14/Burgers-Max-Original.jpg");

    var burgerArray = [burgare1, burgare2, burgare3, burgare4, burgare5];
//} 
function createBurgerMenu(){
    var burgerMenu = document.getElementById('chooseBurger');
    var bildVariabel = document.createElement("img");
    for (i=0; i<burgerArray.length; i++){
        burgerMenu.innerHTML+= burgerArray[i].info() +"<br>";

        if (burgerArray[i].isLactose()) {
            burgerMenu.innerHTML+= "Laktos" +"<br>";
        }

        if (burgerArray[i].isGluten()) {
            burgerMenu.innerHTML+= "Gluten" +"<br>";
        }


        bildVariabel.setAttribute("src", burgerArray[i].pictureSrc);
        //bildVariabel.width = 70px;
        //bildVariabel.setAttribute("height", "30");
        //bildVariabel.style.width = '50px';
        burgerMenu.appendChild(bildVariabel);

        burgerMenu.innerHTML+= "<br>";
   }
}*/

/*var dryck1=new MenuItem('cola','200',false, false);
var dryck2=new MenuItem('Juice','150',false, false);
var dryck3=new MenuItem('energidryck','350',false, false);*/