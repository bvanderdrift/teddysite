if(Meteor.isClient){
	Template.dumper.helpers({
		links: function(){
			return links.find();
		}
	});

	Template.dumper.events({
		'submit #ytdumpform': function(e){
			e.preventDefault();
			var yturl = $('[name=youtubeLink').val();
			var videoid = yturl.match(/youtube\.com\/watch\?v=(.*)/);
			
			$('[name=youtubeLink').val('');

			if(!videoid || videoid[1] == ''){
				alert('Not a Youtube Video!');
				return;
			}

			if(links.find({link: yturl}).count() == 0){
				links.insert({
					videoid: videoid[1]
				});
			}
		}
	});
}