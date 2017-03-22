import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('SAVING');
      this.sendAction('save', this.get('list'));
    }
  }
});
