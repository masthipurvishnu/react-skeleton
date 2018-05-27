var React = require('react');
var ListItem = require('./ListItem.jsx');
var createReactClass = require('create-react-class');

var ingredients = [
  {"id":1, "text":"vegi patti"},
  {"id":2, "text":"cheese"},
  {"id":3, "text":"alepenos"},
  {"id":4, "text":"tamatos"}
  ];
//
var List = createReactClass({
  render: function(){
    var listItem = ingredients.map(function(item){
      return <ListItem key={item.id}
              ingredient={item.text} />
    });
    
    return (<ul>{listItem}</ul>);

  }
});

module.exports  = List;
