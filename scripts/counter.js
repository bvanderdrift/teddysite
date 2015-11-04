if (Meteor.isClient) {
  Template.counter.helpers({
    count: function () {
      var singleCounter = counter.findOne();

      if(singleCounter){
        return singleCounter.count;
      }else{
        return "...";
      } 
    }
  });

  Template.counter.events({
    'click #addCount': function () {
      Meteor.call('incrementCount', function(error){
        if(error){
          console.log(error);
        }else{
          analytics.track("Incremented Counter", {
            newCount: counter.findOne().count
          });
        }
      })
    }
  });
}

if (Meteor.isServer) {
  if(counter.find().count() == 0){
    counter.insert({count: 0});
  }
}
