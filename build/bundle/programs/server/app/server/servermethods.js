(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/servermethods.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
	incrementCount: function (userId) {                                   // 2
		check(userId, String);                                               // 3
                                                                       //
		counter.update({ userId: userId }, { $inc: { count: 1 } });          // 5
	},                                                                    //
                                                                       //
	dumpVideo: function (ytVideoiD) {                                     // 8
		check(ytVideoiD, String);                                            // 9
                                                                       //
		links.insert({                                                       // 11
			videoid: ytVideoiD                                                  // 12
		});                                                                  //
	},                                                                    //
                                                                       //
	newCount: function (userId) {                                         // 16
		check(userId, String);                                               // 17
                                                                       //
		if (counter.find({ userId: userId }).count == 0) {                   // 19
			counter.insert({                                                    // 20
				count: 0, userId: userId                                           // 21
			});                                                                 //
		}                                                                    //
	},                                                                    //
                                                                       //
	removeAllCounters: function () {                                      // 26
		counter.remove({});                                                  // 27
	},                                                                    //
                                                                       //
	clientConnected: function () {                                        // 30
		checkInitiateCounter("");                                            // 31
	},                                                                    //
                                                                       //
	postChatMessage: function (userId, message) {                         // 34
		check(userId, String);                                               // 35
		check(message, String);                                              // 36
                                                                       //
		var username = Meteor.users.findOne({ _id: userId }).username;       // 38
		var time = new Date();                                               // 39
                                                                       //
		var newMessage = { sender: {                                         // 41
				userId: userId,                                                    // 42
				username: username                                                 // 43
			},                                                                  //
			message: message,                                                   // 45
			postTime: time                                                      // 46
		};                                                                   //
                                                                       //
		chatMessages.insert(newMessage);                                     // 49
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=servermethods.js.map
