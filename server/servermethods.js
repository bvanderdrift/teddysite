Meteor.methods({
	incrementCount: function(userId){
		check(userId, String);

     	counter.update({userId: userId}, {$inc: {count: 1}});
	},

	dumpVideo: function(ytVideoiD){
		check(ytVideoiD, String);

		links.insert({
			videoid: ytVideoiD
		});
	},

	newCount: function(userId){
		check(userId, String);

		if(counter.find({userId: userId}).count == 0){
			counter.insert({
				count:0, userId: userId
			});
		}
	},

	removeAllCounters: function(){
		counter.remove({});
	},

	clientConnected: function(){
		checkInitiateCounter("");
	}
});