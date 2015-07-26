var React = require('react');
var Reflux = require('reflux');
var ResourceStore = require('../stores/ResourceStore.js');
var DragResource = require('./DragResource.jsx');

var Resource = React.createClass({
  mixins: [Reflux.connect(ResourceStore, "resources")],
  render: function(){
    return (
      <div className="left-div" >
        Resource
          <div>
            {this.state.resources.map(function(resource){
              return (
                <div>
                  <DragResource data={resource} />
                  {resource.type}
                </div>
              )
            })}
          </div>
      </div>
    );
  }
});

module.exports = Resource;