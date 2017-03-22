import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone(item) {
      console.log('GOT TO THE ROUTE');
      item.toggleProperty('done');
      item.save();
    }
  }
});
