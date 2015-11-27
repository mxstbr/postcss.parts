var SearchField = React.createClass({
  render: function() {
    var placeholder = "Search";
    if (this.props.selectedTag !== "" && this.props.selectedTag !== undefined && this.props.selectedTag !== false) {
      placeholder += " in " + this.props.selectedTag.capitalizeFirstLetter();
    }
    return (
      <div className="plugin__search">
        <input className="plugin__search-field" type="search" placeholder={placeholder} autoFocus={true} onChange={this.props.search} />
      </div>
    );
  }
});

module.exports = SearchField;
