Meteor.subscribe('chatMessages', 10);

Template.chatter.helpers({
	messages: function(){
		return chatMessages.find({}, {sort: {postTime: 1}});
	}
});

Template.chatter.events({
	'submit #postMessage': function(e){
		e.preventDefault();

		var tb = $('[name=messageTextBox]');
		var messageText = tb.val();

		Meteor.call('postChatMessage', Meteor.userId(), messageText, (err) => {
			if(err){
				console.log(err);
			};
		});

		//Empty textbox
		tb.val("");
	}
})