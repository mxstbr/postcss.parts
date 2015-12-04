var Readme = React.createClass({
  render: function() {
    return(
      <div className="readme" dangerouslySetInnerHTML={ this._createMarkup(this.props.html) }></div>
    )
  },
  _createMarkup: function(htmlString) {
    console.log(htmlString);
    return {__html: htmlString};
  }
});

module.exports = Readme;
