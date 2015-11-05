if (Meteor.isClient) {
  var counterSubscription;

  Template.counter.onCreated(() => {
    openCounterSubscription();
  });

  Template.counter.helpers({
    count: function () {
      var singleCounter = counter.findOne({userId: ""});

      if(singleCounter){
        return singleCounter.count;
      }else{
        return "...";
      } 
    }
  });

  Template.counter.events({
    'click #addCount': function () {
      increment("");

      if(Meteor.user()){
        increment(Meteor.userId());
      }
    }
  });

  Template.loggedinCounter.helpers({
      personalCount: function(){
        var uCount = counter.findOne({userId: Meteor.userId()});

        if(!uCount){
          Meteor.call('newCount', Meteor.userId(), function(err){
            console.log(err);
          });

          return "...";
        }

        return uCount.count;
      }
  });

  increment = function(userId){
    Meteor.call('incrementCount', userId,function(error){
        if(error){
          console.log(error);
        }else{
          analytics.track("Incremented Counter", {
            userId: userId,
            newCount: counter.findOne({userId: userId}).count
          });
        }
      });
  };

  Accounts.onLogin(() => {
    if(counterSubscription){
      counterSubscription.stop();
    }

    openCounterSubscription();
  });

  var openCounterSubscription = function(){
    counterSubscription = Meteor.subscribe('counter', Meteor.userId());
  };
}

if (Meteor.isServer) {
  checkInitiateCounter = function(userId){
    if(counter.find({userId: userId}).count() == 0){
      counter.insert({count: 0, userId: userId});
    }
  };

  Accounts.onLogin((param) => {
      checkInitiateCounter(param.user._id);
  });
}
