exports.hello = function() {
    return 6;
}

var returnSeven = function() {
    return 7;
}

function returnEight() {
    return 8;
}

export {returnSeven};
export {returnEight};

//this.get('filter')('').then((results) => this.set('results', ))