let Calculator = {
    state: 0,


    getResult: function() {
        return this.state;
    },

    setState: function(num) {
     
        this.state = num;    

        return this;
    },

    add: function(num) {
        this.state += num;

        return this;
    },

    subtract: function(num) {
        this.state -= num;

        return this;
    },

    multiply: function(num) {

        this.state *= num;
        
        return this;
    },

    divide: function(num) {
        this.state /= num;

        return this;
    },

    reset: function() {
        this.state = 0;
        return this;
    },

    fetchData: function(callback) {
        setTimeout(function() {
            callback(500);
        }, 1000);
        
        return this;
    }
};

module.exports = new Calculator;
