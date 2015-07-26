var React = require('react');
var Reflux = require('reflux');
var PropTypes = React.PropTypes;
var DragSource = require('react-dnd').DragSource;

var dragResource = {
  beginDrag: function (props) {
    return {
      type: props.data.type,
      image_url: props.data.image_url,
      left: props.data.left,
      top: props.data.top,
      index: props.data.index
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var DragResource = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired
  },

  render: function(){
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    if(isDragging) {
      return null;
    }

    var style = {width: "80px", height: "80px"}

    return connectDragSource(
      <div style={style}>
        <img src={this.props.data.image_url} ref="element_image" />
      </div>
    );
  }
});

module.exports = DragSource("Element", dragResource, collect)(DragResource);