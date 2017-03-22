import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveList (list) {
      console.log("SAVING");
      list.save()
      .then(() => this.transitionTo('lists'));
    }
  }

});
