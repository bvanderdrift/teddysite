(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('counter', function (userId) {                          // 1
	check(userId, String);                                                // 2
                                                                       //
	return counter.find({ userId: { $in: ["", userId] } });               // 4
});                                                                    //
                                                                       //
Meteor.publish('ytlinks', function () {                                // 7
	return links.find();                                                  // 8
});                                                                    //
                                                                       //
Meteor.publish('chatMessages', function (count) {                      // 11
	check(count, Number);                                                 // 12
                                                                       //
	return chatMessages.find({}, { limit: count, sort: { postTime: -1 } });
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publications.js.map
