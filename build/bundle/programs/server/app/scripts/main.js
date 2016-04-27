(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// scripts/main.js                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
	Meteor.startup(function () {                                          // 2
		Meteor.call('clientConnected', function (err) {                      // 3
			if (err) {                                                          // 4
				console.log(err);                                                  // 5
			}                                                                   //
		});                                                                  //
	});                                                                   //
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=main.js.map
