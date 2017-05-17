import Ember from 'ember';

// As you would expect, this is simply inheriting from Ember.Component
// The export default is just exporting this entire child object
export default Ember.Component.extend({
    classNames:['list-filter'],
    value: '',

    // In a component's lifecycle, init is the first method called.  See here: https://guides.emberjs.com/v2.6.0/components/the-component-lifecycle/
    init() { 
        // this._super calls the parent constructor, as you would expect.  I don't think that it's
        // actually a javascript keyword, I think that ember just implemented the _super method themselves
        // 'super' is a keyword, though.
        this._super(...arguments);  
        // Calling a method with two sets of parenthesis means that the first function returns a
        // function, which is then immediately called with the second parenth's parameter(s).  
        // The 'then' is a javascript promise--once filter returns, (I assume that 'results' is the 
        // return value) then the code in the parenthesis executes.
        // The code in the parenths is a new javascript shorthand that means results is used as a parameter
        // for this.set (along with 'results' string).  It's the same as doing:
        // function (results) {return this.set('results', results);}
        this.get('filter')('').then((results) => this.set('results', results));
    },

    actions: {
        handleFilterEntry() {
            console.log('shouldPrintQuickly');
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then((filterResults) => console.log('filterResults: ' + filterResults));//this.set('results', filterResults));
        }
    }
});
