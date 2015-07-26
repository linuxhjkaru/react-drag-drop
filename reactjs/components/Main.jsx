var React = require('react');
var Resource = require('./Resource.jsx');
var DropArea = require('./DropArea.jsx');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Resource />
        <DropArea />
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(Main);