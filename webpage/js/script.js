function MenuItem(name, kCal, gluten, lactose, pictureSrc){
	this.name=name;
    this.kCal=kCal;
    this.gluten=gluten;
    this.lactose=lactose;
    this.pictureSrc=pictureSrc;
    this.info = function(){
        return this.name + ', kCal: '+this.kCal;
    }
    this.isLactose = function(){
        return this.lactose;
    }
}


/*function constructBurgers(){*/
    var burgare1=new MenuItem('Köttburgare1','400',true, false, "../images/burgare1.jpg");
    var burgare2=new MenuItem('Vegburgare1','300',true,true, "../images/burgare2.jpg")
    var burgare3=new MenuItem('Köttburgare2','600',true, false, "../images/burgare3.jpg"); 
    var burgare4=new MenuItem('Köttburgare3','300',true,true, "https://www.max.se/ImageVaultFiles/id_715/cf_14/Burgers-Max-Original.jpg")
    var burgare5=new MenuItem('Vegburgare2','600',true, false, "https://www.max.se/ImageVaultFiles/id_715/cf_14/Burgers-Max-Original.jpg");

    var burgarArray = [burgare1, burgare2, burgare3, burgare4, burgare5];
/*}*/

function createBurgerMenu(){
    console.log(burgare1.lactose);
    var burgerMenu = document.getElementById('chooseBurger');
    for (i=0; i<burgarArray.length; i++){
        burgerMenu.innerHTML+= burgarArray[i].info() +"<br>";
        
        var bildVariabel = document.createElement("img");
        bildVariabel.setAttribute("src", burgarArray[i].pictureSrc);
        //bildVariabel.width = 70px;
        //bildVariabel.setAttribute("width", "30");
        burgerMenu.appendChild(bildVariabel);
        
        burgerMenu.innerHTML+= "<br>";

        /*burgerMenu.innerHTML+= bildVariabel;*/
        
        /*burgerMenu.innerHTML+= src =burgarArray[i].pictureSrc;*/
        /*if (burgerArray[i].isLactose) {
            console.log("laktosbuegare");
            console.log(burgerArray[i].isLactose);
        }*/
   }
}


var dryck1=new MenuItem('cola','200',false, false);
var dryck2=new MenuItem('Juice','150',false, false);
var dryck3=new MenuItem('energidryck','350',false, false);


/*console.log(burgarArray[0].info());
console.log(burgare1.info());
console.log(dryck3.info());*/

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


var el = document.getElementById('dryck');
console.log(el);
console.log('mantuss');
var els = document.getElementsByClassName('gluten');
console.log(els);
els = document.getElementsByTagName('tr');
console.log(els);
els.childNodes;
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


function myFunction() {
    //var para = document.createElement("DIV");
    //skapa id här efter (set attribute) (g.classname)
    var para = document.createElement("P");
    var t = document.createTextNode("texten jag vill se!!!!!!");
    para.appendChild(t);
    console.log('katten');
    document.body.appendChild(para);
    
    var lucia = document.getElementById('chooseBurger');
    lucia.innerHTML+="STSBibllan";
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
