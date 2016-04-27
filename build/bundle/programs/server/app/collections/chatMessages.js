(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/chatMessages.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
chatMessages = new Meteor.Collection('chatMessages');                  // 1
                                                                       //
chatMessages.allow({                                                   // 3
	insert: function () {                                                 // 4
		return false;                                                        // 4
	},                                                                    //
	update: function () {                                                 // 5
		return false;                                                        // 5
	},                                                                    //
	remove: function () {                                                 // 6
		return false;                                                        // 6
	}                                                                     //
});                                                                    //
                                                                       //
chatMessages.deny({                                                    // 9
	insert: function () {                                                 // 10
		return true;                                                         // 10
	},                                                                    //
	update: function () {                                                 // 11
		return true;                                                         // 11
	},                                                                    //
	remove: function () {                                                 // 12
		return true;                                                         // 12
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=chatMessages.js.map
