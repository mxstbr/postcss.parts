var TagListItem = React.createClass({
  render: function() {
    return(
      <div className="tag" onClick={this._selectTag}>
				<h2 className="tag__name">{this.props.name.capitalizeFirstLetter()}</h2>
			</div>
    );
  },
  _selectTag: function() {
    this.props.selectTag(this.props.name);
  }
});

module.exports = TagListItem;
