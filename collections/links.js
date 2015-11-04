links = new Meteor.Collection("ytlinks");

links.allow({
	insert() { return false; },
	update() { return false; },
	remove() { return false; },
});

links.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});