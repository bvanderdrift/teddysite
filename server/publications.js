Meteor.publish('counter', (userId) => {
	check(userId, String);

	return counter.find({userId: { $in : ["", userId]}});
});

Meteor.publish('ytlinks', () => {
	return links.find();
});

Meteor.publish('chatMessages', (count) => {
	check(count, Number);

	return chatMessages.find({}, {limit: count, sort: {postTime: -1}});
});