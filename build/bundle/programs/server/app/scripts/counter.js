(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// scripts/counter.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
  var counterSubscription;                                             // 2
                                                                       //
  Template.counter.onCreated(function () {                             // 4
    openCounterSubscription();                                         // 5
  });                                                                  //
                                                                       //
  Template.counter.helpers({                                           // 8
    count: function () {                                               // 9
      var singleCounter = counter.findOne({ userId: "" });             // 10
                                                                       //
      if (singleCounter) {                                             // 12
        return singleCounter.count;                                    // 13
      } else {                                                         //
        return "...";                                                  // 15
      }                                                                //
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.counter.events({                                            // 20
    'click #addCount': function () {                                   // 21
      increment("");                                                   // 22
                                                                       //
      if (Meteor.user()) {                                             // 24
        increment(Meteor.userId());                                    // 25
      }                                                                //
    }                                                                  //
  });                                                                  //
                                                                       //
  Template.loggedinCounter.helpers({                                   // 30
    personalCount: function () {                                       // 31
      var uCount = counter.findOne({ userId: Meteor.userId() });       // 32
                                                                       //
      if (!uCount) {                                                   // 34
        Meteor.call('newCount', Meteor.userId(), function (err) {      // 35
          if (err) {                                                   // 36
            console.log(err);                                          // 37
          }                                                            //
        });                                                            //
                                                                       //
        return "...";                                                  // 41
      }                                                                //
                                                                       //
      return uCount.count;                                             // 44
    }                                                                  //
  });                                                                  //
                                                                       //
  increment = function (userId) {                                      // 48
    Meteor.call('incrementCount', userId, function (error) {           // 49
      if (error) {                                                     // 50
        console.log(error);                                            // 51
      } else {                                                         //
        analytics.track("Incremented Counter", {                       // 53
          userId: userId,                                              // 54
          newCount: counter.findOne({ userId: userId }).count          // 55
        });                                                            //
      }                                                                //
    });                                                                //
  };                                                                   //
                                                                       //
  Accounts.onLogin(function () {                                       // 61
    if (counterSubscription) {                                         // 62
      counterSubscription.stop();                                      // 63
    }                                                                  //
                                                                       //
    openCounterSubscription();                                         // 66
  });                                                                  //
                                                                       //
  var openCounterSubscription = function () {                          // 69
    counterSubscription = Meteor.subscribe('counter', Meteor.userId());
  };                                                                   //
}                                                                      //
                                                                       //
if (Meteor.isServer) {                                                 // 74
  checkInitiateCounter = function (userId) {                           // 75
    if (counter.find({ userId: userId }).count() == 0) {               // 76
      counter.insert({ count: 0, userId: userId });                    // 77
    }                                                                  //
  };                                                                   //
                                                                       //
  Accounts.onLogin(function (param) {                                  // 81
    checkInitiateCounter(param.user._id);                              // 82
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=counter.js.map
