const { Extendable } = require('klasa');

module.exports = class extends Extendable {

    constructor(...args) {
        super(...args, ['Guild']);
    }

    get extend() {
        return this.client.mod.create(this);
    }

};
