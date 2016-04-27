(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// scripts/routing.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
	layoutTemplate: 'main'                                                // 2
});                                                                    //
                                                                       //
Router.route("/", {                                                    // 5
	name: 'home',                                                         // 6
	template: 'home'                                                      // 7
});                                                                    //
Router.route("/counter", {                                             // 9
	name: 'counter',                                                      // 10
	template: 'counter'                                                   // 11
});                                                                    //
Router.route("/chatter", {                                             // 13
	name: 'chatter',                                                      // 14
	template: 'chatter',                                                  // 15
	before: function () {                                                 // 16
		if (!Meteor.user()) {                                                // 17
			this.redirect('home');                                              // 18
			this.stop();                                                        // 19
		} else {                                                             //
			this.render('chatter');                                             // 21
		}                                                                    //
	}                                                                     //
});                                                                    //
Router.route("/dumper", {                                              // 25
	name: 'dumper',                                                       // 26
	template: 'dumper'                                                    // 27
});                                                                    //
Router.route("/ytvideo/:_id", {                                        // 29
	name: 'ytvideo',                                                      // 30
	template: 'ytvideo',                                                  // 31
	data: function () {                                                   // 32
		return links.findOne({ _id: this.params._id });                      // 33
	}                                                                     //
});                                                                    //
Router.route("/trellotool", {                                          // 36
	name: 'trellotool',                                                   // 37
	template: 'trellotool'                                                // 38
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routing.js.map
