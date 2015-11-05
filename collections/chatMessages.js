chatMessages = new Meteor.Collection('chatMessages');

chatMessages.allow({
	insert() { return false; },
	update() { return false; },
	remove() { return false; },
});

chatMessages.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});