boards = new Mongo.Collection("boards");
lists = new Mongo.Collection("lists");
trelloUsers = new Mongo.Collection("trelloUsers");

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

var processNewUser = function(userid){
	trelloUsers._collection.insert({
		uid: userid,
		name: "...",
		todos: []
	});

	var member = trelloUsers.findOne({uid: userid});

	Trello.get("/members/" + userid, function(data){
		trelloUsers._collection.update(member._id, {
			$set: {name: data.fullName}
		});
	});
}

var processCard = function(card){
	var members = card.idMembers;

	members.forEach(function(el){
		var member = trelloUsers.findOne({uid: el});

		if(member == null){
			processNewUser(el);
			member = trelloUsers.findOne({uid: el});
		}

		member.todos.push({todo: card.name});
		trelloUsers._collection.update(member._id, {
			$set: {todos: member.todos}
		});
	});
}

var loadCards = function(listid){
	Trello.get("lists/" + listid + "/cards", function(data){
		data.forEach(processCard);
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
	},
	TrelloUsers: function(){
		return trelloUsers.find({});
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
		loadCards(ev.target.id);
		lists._collection.remove({});
	}
});