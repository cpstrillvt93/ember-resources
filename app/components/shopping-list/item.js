import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      // return this.toggleProperty('listItemCompleted');
      console.log('SENDING ACTION!');
      return this.sendAction('toggleDone', this.get('item'));
    },
    delete() {
      console.log("DELETING")
      return this.sendAction('delete', this.get('item'))

    }
  },
});
