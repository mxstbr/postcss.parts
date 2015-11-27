var SearchField = React.createClass({
  render: function() {
    return (
      <div className="plugin__search">
        <input className="plugin__search-field" type="search" placeholder="Search" autoFocus={true} onChange={this.props.search} />
      </div>
    );
  }
});

module.exports = SearchField;
