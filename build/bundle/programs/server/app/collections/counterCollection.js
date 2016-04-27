(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/counterCollection.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
counter = new Mongo.Collection("counter");                             // 1
                                                                       //
counter.allow({                                                        // 3
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
counter.deny({                                                         // 9
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

//# sourceMappingURL=counterCollection.js.map
