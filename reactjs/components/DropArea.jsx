var React = require('react');
var PropTypes = React.PropTypes;
var DropTarget = require('react-dnd').DropTarget;
var DroppedElement = require('./DroppedElement.jsx');
var DropAreaActions = require('../actions/DropAreaActions.js');
var DragElement = require('./DragElement.jsx');

var dropField = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
    if(delta !== null) {
      item.left = Math.round(item.left + delta.x);
      item.top = Math.round(item.top + delta.y);
      DropAreaActions.Drop(item);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


var DropArea = React.createClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired
  },

  render: function(){
    var connectDropTarget = this.props.connectDropTarget;

    return connectDropTarget(
      <div className="right-div">
        <DroppedElement />
      </div>
    );
  }
});

module.exports = DropTarget("Element",  dropField, collect)(DropArea);