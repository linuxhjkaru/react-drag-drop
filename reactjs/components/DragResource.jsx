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
      top: props.data.top
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  }
}

var DragResource = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired
  },

  componentDidMount: function() {
    this.props.data.top = React.findDOMNode(this.refs.element_image).offsetTop;
    this.props.data.left = React.findDOMNode(this.refs.element_image).offsetLeft;
  },

  render: function(){
    var connectDragSource = this.props.connectDragSource;
    var style = {width: "80px", height: "80px"};

    return connectDragSource(
      <div style={style}>
        <img src={this.props.data.image_url} ref="element_image" />
      </div>
    );
  }
});

module.exports = DragSource("Element", dragResource, collect)(DragResource);