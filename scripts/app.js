	/*
	* contentViewTemplate creates the basic structure of the application.
	* It includes header, Interaction bar , Team list Table structure, Result Box structure.
	* It only establishes structures, while they are populated by their respective views.
	*/

	var contentViewTemplate = _.template(`
		<div class="row" id="header">
			<h2>Welcome to Group Formation Page built by <%= data %><h2>
		</div>
		<div class="row" id="interaction">
			<div class="col-xs-3 col-xs-offset-3">
				 <div class="btn btn-warning" id="start">Start</div>
			 </div>
			<div class="col-xs-3">
				<div class="btn btn-warning" id="reset">Reset</div>
			</div> 
		</div>
		<div class="row">
			<div class="col-lg-3 lower">
				<table id="list">

				</table>
			</div>
			<div class="col-lg-9" id="res">
				<div class="row lower">
					<div class="col-lg-3">
							<div class="resultbox" id="groupA">
								<h3>GROUP A</h3>
							</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox"  id="groupB">
							<h3>GROUP B</h3>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox" id="groupC">
							<h3>GROUP C</h3>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox" id="groupD">
							<h3>GROUP D</h3>
						</div>
					</div>
				</div>
				<div class="row lower">
					<div class="col-lg-3">
						<div class="resultbox" id="groupE">
							<h3>GROUP E</h3>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox"  id="groupF">
							<h3>GROUP F</h3>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox" id="groupG">
							<h3>GROUP G</h3>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="resultbox"  id="groupH">
							<h3>GROUP H</h3>
						</div>
					</div>
				</div>
			</div>
		</div>

	`);

	/*
	* It is basic table row element for team list.
	*/
	var listViewTemplate = _.template(`
		<tr class="listItems"> 
			<td><%= name %></td> 
		</tr>
	`);

	/*
	* It is structure of Team details display in the result boxes.
	*/
	var resultViewTemplate = _.template(`
		<img src="<%=logourl%>" class="teamLogo"><p> <%= name %>  - <%= country %></p>
	`);

	/*
	* These arrays keep track of the countries of whose team has been inducted in these groups. Hence prevents 2 teams
	* from same country to be inducted in the same group.
	*/
	var groupa=[],
		groupb=[],
		groupc=[],
		groupd=[],
		groupe=[],
		groupf=[],
		groupg=[],
		grouph=[];

	/*
	*	It is used to Provide my name in the header in the portion "built by anurag"
	*/
	var exampleModel = Backbone.Model.extend({
		data: "anurag"	
	});

	/*
	* this view populates the #content Div with contentViewTemplate. Also it initializes Click events for Start and Reset Buttons.
	*/
	var contentView = Backbone.View.extend({
		el: "#content",
		template: contentViewTemplate,
		events:{
			"click #start": "begin",
			"click #reset": "reset"
		},
		begin:function(){
			this.reset();
			setTimeout(function(){
				new resultView();
			},100);	
		},
		reset:function(){
			_.each(htmlElements,function(element){
				$(element).html("<h3>"+element.substring(1,6).toUpperCase()+" "+element.substring(6,7)+"</h3>");
			});
			$(".listItems").fadeTo("slow",1);
			groupa=[];
			groupb=[];
			groupc=[];
			groupd=[];
			groupe=[];
			groupf=[];
			groupg=[];
			grouph=[];
		},
		initialize:function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model));
		}
	});

	/*
	* This view populates team list table using listViewTemplate.
	*/
	var listView = Backbone.View.extend({
		el: "#list",
		template: listViewTemplate,
		initialize:function(){
			this.render();
		},
		render:function(){
			var ref = this;	
			allTeams.each(function(team){
				ref.$el.append(ref.template({name: team.get("name")}));
			});
		}
	});

	/*
	* It contains entire logic of drawing groups, changing to different group elements, randomizing the sequence,
	* avoiding two teams of same country in same group etc.
	*/
	var resultView = Backbone.View.extend({
		el:"",
		currentModelNo: 0,
		currentGroup:0,
		template: resultViewTemplate,
		getRandom:function(min,max){
			var test1 =  Math.floor((Math.random()*(max-min+1))+min);
			return test1;
		},
		initialize:function(){
			tempAllTeams = allTeams.clone();
			this.startdraw();
		},
		startdraw:function(){
			var safeguard = 0;
			var alert =0;
			var count = 0;
			var min=0;
			var max=7;
			var temp;
			var ref= this;
			var currentArray;
			for(var i=0;i<32;i++){
				if(count==8){
					max=23;
				}
				safeguard=0;
				alert=0;
				switch(this.currentGroup){
					case 0:
					currentArray= groupa;
					break;
					case 1:
					currentArray= groupb;
					break;
						case 2:
					currentArray= groupc;
					break;
					case 3:
					currentArray= groupd;
					break;
					case 4:
					currentArray= groupe;
					break;
					case 5:
					currentArray= groupf;
					break;
					case 6:
					currentArray= groupg;
					break;
					case 7:
					currentArray= grouph;
					break;
				}
				do{
					temp=this.getRandom(min,max);
					safeguard++;
					if(safeguard>32){
						alert=1;
						break;
					}
				}while($.inArray(tempAllTeams.at(temp).get("country"),currentArray)!=-1)
				
				 if(alert==1){
					break;
				}

				currentArray.push(tempAllTeams.at(temp).get("country"));
				this.currentModelNo=temp;
				
				max--;
				count++;
				this.render();
				if(this.currentGroup==7)
					this.currentGroup = 0;
				else
					this.currentGroup++; 
				tempAllTeams.remove(tempAllTeams.at(ref.currentModelNo));
			}
			if(alert==1){
				content.begin();
			}
			$(".resultbox:nth-child(2)").css("color","red");
		},
		donothing:function(){

		},
		render:function(){
			var ref = this;
			var temp = this.currentModelNo;
			this.el = htmlElements[this.currentGroup];
			var tempName = tempAllTeams.at(temp).get("name");
			var tempCountry = tempAllTeams.at(temp).get("country");
			var tempLogoUrl = tempAllTeams.at(temp).get("logourl");
			var index = allTeams.indexOf(allTeams.findWhere({name:tempName}))+1;
			$(this.el).append(this.template({name: tempName,country: tempCountry,logourl:tempLogoUrl}));
			console.log("check");
		}
	});

	/*
	* Here Content view is Initiliazed which in turn initializes Result View upon delegation of Click event on Start or Reset.
	*/
	var content = new contentView({
		model: new exampleModel()
	});

	/*
	* This initializes the list view which presents all the teams in the Left list.
	*/
	new listView();
