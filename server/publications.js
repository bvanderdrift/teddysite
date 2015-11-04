Meteor.publish('counter', () => {
	return counter.find();
});

Meteor.publish('ytlinks', () => {
	return links.find();
});