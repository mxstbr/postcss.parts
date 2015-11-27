var ListHeading = React.createClass({
  render: function() {
    return(
      <div className="search__heading">
        <div className="search__heading-back" onClick={this._selectTag}>
          <svg width="24" height="24" viewBox="0 0 24 24"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" fill="none"><path d="M.5.5h10v10h-10zM13.5.5h10v10h-10zM.5 13.5h10v10h-10zM13.5 13.5h10v10h-10z"/></g></svg>
        </div>
        <h2>{this.props.text}</h2>
      </div>
    );
  },
  _selectTag: function() {
    this.props.selectTag("");
  }
});

module.exports = ListHeading;
