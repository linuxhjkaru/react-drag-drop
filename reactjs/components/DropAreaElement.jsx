var React = require('react');
var PropTypes = React.PropTypes;
var DropTarget = require('react-dnd').DropTarget;
var DragElement = require('./DragElement.jsx');
var DropAreaActions = require('../actions/DropAreaActions.js');

var dropField = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
    item.left = Math.round(item.left + delta.x);
    item.top = Math.round(item.top + delta.y);
    DropAreaActions.CombineDrop(props.data, item);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


var DropAreaElement = React.createClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired
  },

  render: function(){
    var connectDropTarget = this.props.connectDropTarget;

    var style = {width: "100px", height: "100px", top: this.props.data.top, left: this.props.data.left, position: "absolute"}

    return connectDropTarget(
      <div style={style}>
        <DragElement data={this.props.data} />
      </div>
    );
  }
});

module.exports = DropTarget("Element",  dropField, collect)(DropAreaElement);