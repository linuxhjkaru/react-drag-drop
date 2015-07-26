var React = require('react');
var Reflux = require('reflux');
var DropAreaStore = require('../stores/DropAreaStore.js');
var DropAreaElement = require('./DropAreaElement.jsx');

var DroppedElement = React.createClass({
  mixins: [Reflux.connect(DropAreaStore, "elements")],

  render: function(){
    return (
      <div>
        {this.state.elements.map(function(element){
          return <DropAreaElement data={element} />
        })}
      </div>
    );
  }
});

module.exports = DroppedElement;