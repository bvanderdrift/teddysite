if (Meteor.isClient) {
	Meteor.startup(() => {
		Meteor.call('clientConnected', (err) => {
			if(err){
				console.log(err);
			}
		});
	});
};