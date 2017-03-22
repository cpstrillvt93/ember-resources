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
    },
    deleteItem(item) {
      console.log("Got to the Route!");
      item.destroyRecord(item);
    },
    createItem(data) {
      console.log("Got to the Route!");
      let item = this.get('store').createRecord('item', data);
      item.save();
    },
  }
});
