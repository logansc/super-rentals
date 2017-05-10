import Ember from 'ember';

export default Ember.Route.extend({
    // Ember will use save this object that we return as an attribute called model
    model() { //This is ES6 shorthand method definition syntax: it is the same as writing model: function()
        return this.get('store').findAll('rental');
    }
});
