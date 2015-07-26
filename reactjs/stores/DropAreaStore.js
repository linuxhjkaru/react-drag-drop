var Reflux = require('reflux');
var DropAreaActions = require('../actions/DropAreaActions.js');
var ResourceActions = require('../actions/ResourceActions.js');
var ObjectHelper = require('../helpers/ObjectHelper.js');

var elements = require('../constants/ElementConstants.js').elements;
var combine_elements = require('../constants/ElementConstants.js').combine;

var _index = 0;

var DropAreaStore = Reflux.createStore({
  listenables: [DropAreaActions],

  getInitialState: function(){
    this.drop_element = []
    return this.drop_element;
  },

  onDrop: function(data) {

    if(data.index !== undefined) {
      var index = ObjectHelper.get_index_by_field_value(this.drop_element, "index", data.index);
      if(index > -1) {
        this.drop_element[index] = data;
      }
    }
    else {
      data.index = _index;
      _index++;
      this.drop_element.push(data);
    }
    this.trigger(this.drop_element);
  },

  onCombineDrop: function(source, target){
    var combine_first = source.type + " + " + target.type;
    var combine_second = target.type + " + " + source.type;
    var index_first = ObjectHelper.get_index_by_field_value(combine_elements, "condition", combine_first);
    var index_second = ObjectHelper.get_index_by_field_value(combine_elements, "condition", combine_second);

    if(index_first > -1 || index_second > -1) {
      var index = index_first > -1 ? index_first : index_second;
      var new_element = combine_elements[index];
      var new_element_idx = ObjectHelper.get_index_by_field_value(elements, "type", new_element.result);
      if(new_element_idx > -1) {
        var new_element_data = $.extend(true, {}, elements[new_element_idx]);
        new_element_data.left = source.left;
        new_element_data.top = source.top;
        new_element_data.index = _index;
        _index++;
        this.drop_element.push(new_element_data);

        var src_element_idx = ObjectHelper.get_index_by_field_value(this.drop_element, "index", source.index);

        if(src_element_idx > -1) {
           this.drop_element.splice(src_element_idx, 1);
        }

        if(target.index !== undefined) {
          var target_element_idx = ObjectHelper.get_index_by_field_value(this.drop_element, "index", target.index);

          if(target_element_idx > -1) {
             this.drop_element.splice(target_element_idx, 1);
          }
        }

        ResourceActions.AddResource(new_element_data);
      }
    }
    else {
      if(target.index !== undefined) {
        var target_element_idx = ObjectHelper.get_index_by_field_value(this.drop_element, "index", target.index);

        if(target_element_idx > -1) {
          this.drop_element[target_element_idx] = target;
        }
      }
      else {
        target.index = _index;
        _index++;
        this.drop_element.push(target);
      }
    }
    this.trigger(this.drop_element);
  }
});

module.exports = DropAreaStore;