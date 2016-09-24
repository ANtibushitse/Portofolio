// --- ---  --- ---configurer son espace de travil avec javascript --- --- -- --
//
// Le .js peux s'écrire  dans plusieurs endroit : Dans le .html au travers de : <script> </script>  et dans un fichier extene comme celui ci. 
//
// Les commentaires s'écrivent comme ceci //
/*Les commentaires multilignes comme cela */
/* --- --- --- ---  Les valeurs -- -- -- --  Les types --- --- --- 
/*Une valeur est un morceau d'information utilisé dans un programme informatique. Les valeurs existent sous différentes formes, appelées des types. Le type d'une valeur  détermine l'oppération qu'il lui est affecté c'est à dire. */
/* ---- ------ ---- ---- ---- ---- ----  ---- Syntaxe . js --- --- --- --- --- --- --- --- --- --- --- -- 
 Chaque instructions doivent se terminer par un ; 
exemple: alert(Hello Word);
 Le nom  des  variables  commencent toujours par une majuscule  var lundi:  ≠ var Lundi; 
*/
var x = 24;
var X = 42
	, y = 108;
// On peut déclarer plusiers variable en une fois  comme ci dessou: 
var nom = "Ntibushitse"
	, prenom = 'Arsène'
	, age = 24;
var ville = "Toulouse";
var dpt = "LRMP";
console.log(age);
console.log(prenom);
console.log(dpt);
console.log((X + y) % 42);
//il est aussi possible d'écrire  une chaîne de caratère sur plusieurs ligne (string) comme suit//
var muultilines = ("OMG je suis sur \nsur plusieurs lignes");
console.log(muultilines);
// CON-CA-TE-NATION
var conc = ("con" + "ca" + "te" + "nation");
console.log(conc);
// type de valeurs
console.log(typeof (nom));
console.log(typeof (dpt));
console.log(typeof (age));
// ------------ Les Booléens ----------
// true false
console.log(nom > age);
console.log(y >= x);