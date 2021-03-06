counter = new Mongo.Collection("counter");

counter.allow({
	insert() { return false; },
	update() { return false; },
	remove() { return false; },
});

counter.deny({
	insert() { return true; },
	update() { return true; },
	remove() { return true; },
});