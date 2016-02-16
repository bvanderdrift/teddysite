boards = new Mongo.Collection("boards");
lists = new Mongo.Collection("lists");
cards = new Mongo.Collection("cards");

var loadBoards = function(){
	Trello.get("/members/me/boards", function(data){
		data.forEach(function(el){
			boards._collection.insert(el);
		});
	});
}

var loadLists = function(id){
	Trello.get("/boards/" + id + "/lists", function(data){
		data.forEach(function(el){
			lists._collection.insert(el);
		});
	});
}

Template.trellotool.helpers({
	ApiKey: function(){
		return TrelloApiKey;
	},
	Authorized: function(){
		return getTrelloAuthorized();
	},
	Boards: function(){
		return boards.find({});
	},
	Lists: function(){
		return lists.find({});
	}
});

Template.trellotool.events({
	"click .trelloauth": function(){
		var updateAuth = function(){
			setTrelloAuthorized(Trello.authorized());
			loadBoards();
		};

		Trello.authorize({
			type: "popup",
			name: "Trello List Names Tool",
			scope: {
				read:true,
				write:false,
				account:false
			},
			experation: "never",
			success: updateAuth,
			error: updateAuth
		})
	},
	"click .boardbtn": function(ev){
		loadLists(ev.target.id);
		boards._collection.remove({});
	},
	"click .listbtn": function(ev){
		//todo
	}
});