var TagListItem = require('./TagListItem.react');

var TagList = React.createClass({
  render: function() {
    var tagList = [];
    this.props.tags.forEach(function(tag) {
      tagList.push(<TagListItem name={tag} selectTag={this.props.selectTag} />);
    }.bind(this));

    return(
      <div>
        {tagList}
      </div>
    )
  }
});

module.exports = TagList;
