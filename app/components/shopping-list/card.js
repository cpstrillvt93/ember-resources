import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      console.log("EDITING");
      return this.sendAction('edit', this.get('list'));
    },
  },
});
