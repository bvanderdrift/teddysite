Meteor.publish('counter', (userId) => {
	check(userId, String);

	return counter.find({userId: { $in : ["", userId]}});
});

Meteor.publish('ytlinks', () => {
	return links.find();
});