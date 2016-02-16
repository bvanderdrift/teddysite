Template.trellotool.helpers({
	ApiKey: function(){
		return TrelloApiKey;
	},
	Authorized: function(){
		return getTrelloAuthorized();
	}
});

Template.trellotool.events({
	"click .trelloauth": function(){
		var updateAuth = function(){
			setTrelloAuthorized(Trello.authorized());
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
	}
});