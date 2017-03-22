import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, record) {
    //gets api host
    let api = this.get('host');
    //ember adapter serialize method to create new record with a new id
    // console.log(record);
    let serialized = this.serialize(record, { includeId: true });
    // get list id from the data
    // console.log(serialized);
    let listId = serialized.list_id;
    // include all neccessary parts of url
    // console.log(listId);
    let url = `${api}/lists/${listId}/items`;
    // define data--> serialized is new item
    // console.log(url);
    let data = { item:serialized };

    // use ajax method and pass url, verb, and data
    // console.log(data);
    return this.ajax(url, 'POST', { data });
  },
});
