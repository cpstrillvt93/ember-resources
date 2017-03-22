import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  },
  actions: {
    editList(list) {
      console.log('GOT TO THE ROUTE');
      this.transitionTo('list-edit', list);
    },
  }
});
