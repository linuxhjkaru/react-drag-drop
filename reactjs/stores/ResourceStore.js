var Reflux = require('reflux');
var ResourceActions = require('../actions/ResourceActions.js');
var ObjectHelper = require('../helpers/ObjectHelper.js');

var ResourceStore = Reflux.createStore({
  listenables: [ResourceActions],
  getInitialState: function(){
    this.resources = [
      {type: "Water", image_url: "assets/images/water.png"},
      {type: "Earth", image_url: "assets/images/earth.png"},
      {type: "Air", image_url: "assets/images/air.png"},
      {type: "Fire", image_url: "assets/images/fire.png"},
    ]
    return this.resources;
  },

  onAddResource: function(data) {
    var new_element_idx = ObjectHelper.get_index_by_field_value(this.resources, "type", data.type);
    if(new_element_idx < 0) {
      this.resources.push({
        type: data.type,
        image_url: data.image_url
      });
    }

    this.trigger(this.resources)
  }
});

module.exports = ResourceStore;