Router.configure({
	layoutTemplate: 'main'
})

Router.route("/", {
	name: 'home',
	template: 'home'
});
Router.route("/counter", {
	name: 'counter',
	template: 'counter'
});
Router.route("/chatter", {
	name: 'chatter',
	template: 'chatter',
	before: function(){
		if(!Meteor.user()){
			this.redirect('home');
			this.stop();
		}else{
			this.render('chatter');
		}
	}
});
Router.route("/dumper", {
	name: 'dumper',
	template: 'dumper'
});
Router.route("/ytvideo/:_id", {
	name: 'ytvideo',
	template: 'ytvideo',
	data: function(){
		return links.findOne({_id: this.params._id});
	}
});
Router.route("/trellotool", {
	name: 'trellotool',
	template: 'trellotool'
});