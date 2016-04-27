(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// scripts/accounts.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
	Accounts.ui.config({                                                  // 2
		passwordSignupFields: "USERNAME_ONLY"                                // 3
	});                                                                   //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=accounts.js.map
