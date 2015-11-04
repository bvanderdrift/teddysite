Meteor.methods({
	incrementCount: function(){
     	counter.update({_id: counter.findOne()._id}, {$inc: {count: 1}});
	},

	dumpVideo: function(ytVideoiD){
		links.insert({
			videoid: ytVideoiD
		});
	}
});