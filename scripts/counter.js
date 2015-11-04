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
      console.log("Upped!");
      counter.update({_id: counter.findOne()._id}, {$inc: {count: 1}});
    }
  });
}

if (Meteor.isServer) {
  if(counter.find().count() == 0){
    counter.insert({count: 0});
  }
}
