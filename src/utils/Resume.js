const _ = require("underscore");

class Resume {
  constructor() {
    this.parts = {};
  }

  addKey = (key, value) => {
    value = value || "";
    value = value.trim();
    if (value) {
      if (_.has(this.parts, key)) {
        value = this.parts[key] + value;
      }

      this.parts[key] = value;
    }
  };

  addObject = (key, options) => {
    var self = this;

    if (!_.has(this.parts, key)) {
      this.parts[key] = {};
    }

    _.forEach(options, function(optionVal, optionName) {
      if (optionVal) {
        self.parts[key][optionName] = optionVal;
      }
    });
  };

  jsoned = () => {
    return JSON.stringify(this.parts);
  };
}

module.exports = function() {
  return new Resume();
};

