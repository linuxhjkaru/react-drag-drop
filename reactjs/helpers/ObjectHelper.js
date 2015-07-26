var ObjectHelper = {
  get_index_by_field_value: function(array, field, value){
    var index = array.map(function(elm){
      return eval("elm." + field);
    }).indexOf(value);

    return index;
  },


}

module.exports = ObjectHelper;