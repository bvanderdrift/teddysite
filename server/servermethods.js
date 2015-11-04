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

		counter.insert({
			count:0, userId: userId
		});
	},

	removeAllCounters: function(){
		counter.remove({});
	}
});