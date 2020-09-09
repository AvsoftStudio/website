const contactLink = document.querySelector("#Contact p");
const contactPict = document.querySelector("#Contact nav");
const development = document.querySelector("#Development ul");
const wup1 = document.querySelector("#wup1");
const wup2 = document.querySelector("#wup2");

window.onload = () => {
   readTextFile("/data/JSON/footer.json", function(text){
      var data = JSON.parse(text);
      console.log(data);
      filledWup(data);
      filledContact(data);
   });
}

/*Récupère et lit le fichier donné en paramètre*/
function readTextFile(file, callback) {
   var rawFile = new XMLHttpRequest();
   rawFile.overrideMimeType("application/json");
   rawFile.open("GET", file, true);
   rawFile.onreadystatechange = function() {
       if (rawFile.readyState === 4 && rawFile.status == "200") {
           callback(rawFile.responseText);
       }
   }
   rawFile.send(null);
}

/*Remplit la colonne What's Up ?*/
function filledWup(data) {
   if(data.wup.bouton[0] != "" && data.wup.bouton[0] != null){
      wup1.innerHTML = "<h5 itemprop='name' class='mt-0 mb-1'>" + data.wup.title[0] + "</h5>" 
      + data.wup.text[0]
      + data.wup.bouton[0];
   }else{
      wup1.innerHTML = "<h5 itemprop='name' class='mt-0 mb-1'>" + data.wup.title[0] + "</h5>" 
      + data.wup.text[0];
   }
   if(data.wup.bouton[1] != "" && data.wup.bouton[1] != null){
      wup2.innerHTML = "<h5 itemprop='name' class='mt-0 mb-1'>" + data.wup.title[1] + "</h5>" 
      + data.wup.text[1] 
      + data.wup.bouton[1];
   }else{
      wup2.innerHTML = "<h5 itemprop='name' class='mt-0 mb-1'>" + data.wup.title[1] + "</h5>" 
      + data.wup.text[1];
   }
}

function filledDevelopment(data){
   var text = ""
   data.development.forEach(element => {
      text = text 
      + "<li itemprop='item' itemscope itemtype='https://schema.org/Thing' class='media'>"
         + "<img src='" + element.pict + "' class='mr-3' alt='...'>"
   });
   development.innerHTML = "<li itemprop='item' itemscope itemtype='https://schema.org/Thing' class='media'>" +
   "<img src='data/photo/CSE.png' class='mr-3' alt='...'>" +
   "<div itemscope itemtype='https://schema.org/Article' class='media-body'>"+
     "<h5 class='mt-0 mb-1'>CHARACTER SHEET EDITOR</h5>" +
     "<p>A software which allows you to create chracter's sheet for RPG games.</p>"+
   "</div>" +
 "</li>" +
 "<hr size='5' color='white' width='80%' align='left'>"+
 "<li itemprop='item' itemscope itemtype='https://schema.org/Thing' class='media my-4'>"+
   "<img src='data/photo/Tower2.png' class='mr-3' alt='...'>"+
   "<div itemscope itemtype='https://schema.org/Article' class='media-body'>"+
     "<h5 class='mt-0 mb-1'>HIGHTOWER</h5>"+
     "<p>A team of old friends decided to fulfill their childhood dream !<br/>"+
     "Climb the HighTower, a dungeon who nobody returned</p>"+
   "</div>"+
 "</li>"+
 "<hr size='5' color='white' width='80%' align='left'>"+
 "<li itemprop='item' itemscope itemtype='https://schema.org/Thing' class='media'>"+
   "<img src='data/photo/slider/TheSin.jpg' class='mr-3' alt='...'>"+
   "<div itemscope itemtype='https://schema.org/Article' class='media-body'>"+
     "<h5 class='mt-0 mb-1'>ROLL DICE</h5>"+
     "<p>A software that allows you to roll different types of dices</p>"+
   "</div>"+
 +"</li>";
}

function filledContact(data){
   var contact1 = "";
   var contact2 = "";
   data.contact.forEach(element => {
      contact1 = contact1 
      + element[0] +"<br/>"
      + "<a href='"+ element[1] +"'>" + element[1] + "</a><br/>";
      /*La partie contact avec les icones*/
      contact2 = contact2 
      + "<a itemprop='item' itemscope itemtype='https://schema.org/Thing' class='navbar-brand' href='"+ element[1] +"'>"
         + "<img itemprop='image' src='"+ element[2] + "' width='30' height='30' alt='' loading='lazy'>"
         + "<meta itemprop='url' content='"+ element[1] +"'/>"
         + "<meta itemprop='name' content='"+ element[0] + "'/>"
      + "</a>";
   });
   contactLink.innerHTML = contact1;
   contactPict.innerHTML = contact2;
   /*A utiliser uniquement pour les tests*/
   console.log(contact1);
   console.log(contact2);
}

