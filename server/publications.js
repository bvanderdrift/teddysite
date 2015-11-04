Meteor.publish('counter', () => {
	return counter.find();
});