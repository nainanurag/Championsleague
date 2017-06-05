/*
*Team model Definition
*/
var team = Backbone.Model.extend({
	default:{
		name: "unknown",
		country: "unknown",
		champion: 0,
		logourl: "unknown"
	}
});

/*
*Team Model Collection to contain all Models.
*/
var teamCollection = Backbone.Collection.extend({
	model: team
});


var team1 = new team({name:"Bayern",country:"GER",champion:1,logourl:"./static/logos/bayern.png"});
var team2 = new team({name:"Barcelona",country:"ESP",champion:1,logourl:"./static/logos/barcelona.png"});
var team3 = new team({name:"Benfica",country:"POR",champion:1,logourl:"./static/logos/benfica.png"});
var team4 = new team({name:"Chelsea",country:"ENG",champion:1,logourl:"./static/logos/chelsea.png"});
var team5 = new team({name:"Juventus",country:"ITA",champion:1,logourl:"./static/logos/juventus.png"});
var team6 = new team({name:"Paris",country:"FRA",champion:1,logourl:"./static/logos/paris.png"});
var team7 = new team({name:"PSV",country:"NED",champion:1,logourl:"./static/logos/psv.png"});
var team8 = new team({name:"Zenit",country:"RUS",champion:1,logourl:"./static/logos/zenit.png"});
var team9 = new team({name:"CSKA Moskva",country:"RUS",champion:0,logourl:"./static/logos/cskamoskva.png"});
var team10 = new team({name:"Dinamo Zagreb",country:"CRO",champion:0,logourl:"./static/logos/dinamozagreb.png"});
var team11 = new team({name:"Dynamo Kyiv",country:"UKR",champion:0,logourl:"./static/logos/dynamokyiv.png"});
var team12 = new team({name:"Galatasaray",country:"TUR",champion:0,logourl:"./static/logos/galatasaray.png"});
var team13 = new team({name:"Gent",country:"BEL",champion:0,logourl:"./static/logos/gent.png"});
var team14 = new team({name:"BATE",country:"BLR",champion:0,logourl:"./static/logos/bate.png"});
var team15 = new team({name:"Leverkusen",country:"GER",champion:0,logourl:"./static/logos/leverkusen.png"});
var team16 = new team({name:"Lyon",country:"FRA",champion:0,logourl:"./static/logos/lyon.png"});
var team17 = new team({name:"M. Tel-Aviv",country:"ISR",champion:0,logourl:"./static/logos/tel-aviv.png"});
var team18= new team({name:"Malmo",country:"SWE",champion:0,logourl:"./static/logos/malmo.png"});
var team19= new team({name:"Man. City",country:"ENG",champion:0,logourl:"./static/logos/mancity.png"});
var team20= new team({name:"Man. United",country:"ENG",champion:0,logourl:"./static/logos/manunited.png"});
var team21= new team({name:"Mönchengladbach",country:"GER",champion:0,logourl:"./static/logos/monchen.png"});
var team22= new team({name:"Olympiacos",country:"GER",champion:0,logourl:"./static/logos/olympiacos.png"});
var team23= new team({name:"Arsenal",country:"ENG",champion:0,logourl:"./static/logos/arsenal.png"});
var team24= new team({name:"Porto",country:"POR",champion:0,logourl:"./static/logos/porto.png"});
var team25= new team({name:"Atletico",country:"ESP",champion:0,logourl:"./static/logos/atletico.png"});
var team26= new team({name:"Real Madrid",country:"ESP",champion:0,logourl:"./static/logos/realmadrid.png"});
var team27= new team({name:"Roma",country:"ITA",champion:0,logourl:"./static/logos/roma.png"});
var team28= new team({name:"Sevilla",country:"ESP",champion:0,logourl:"./static/logos/sevilla.png"});
var team29= new team({name:"Shakhtar Donetsk",country:"UKR",champion:0,logourl:"./static/logos/shakhtar.png"});
var team30= new team({name:"Valencia",country:"ESP",champion:0,logourl:"./static/logos/valencia.png"});
var team31= new team({name:"Wolfsburg",country:"GER",champion:0,logourl:"./static/logos/wolfsburg.png"});
var team32= new team({name:"Astana",country:"KAZ",champion:0,logourl:"./static/logos/astana.png"});

/*
* allTeams Collection instance and all teams are added to this collection.
*/
var allTeams = new teamCollection([team1,team2,team3,team4,team5,team6,team7,team8,team9,team10,team11,team12,team13,team14,team15,team16,team17,team18,team19,team20,team21,team22,team23,team24,team25,team26,team27,team28,team29,team30,team31,team32]);
/*
*	tempAllteams is clone of allTeams. It is used for creating random sequence.
*/
var tempAllTeams = allTeams.clone();

var htmlElements = ["#groupA","#groupB", "#groupC" , "#groupD" , "#groupE", "#groupF" , "#groupG" , "#groupH" ];