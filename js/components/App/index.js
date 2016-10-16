import React, { Component } from 'react';
import withRouter from 'react-router/lib/withRouter';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';
import Header from '../Header.react';
import PluginList from '../PluginList.react';
import SearchField from '../SearchField.react';
import ListHeading from '../ListHeading.react';

import { loadPlugins } from '../../actions/Plugins';

import getTag from '../../utils/url';
import capitalizeFirstLetter from '../../utils/capitalize';

class App extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.loadPlugins();
  }

  handleSearch(evt) {
    const { location: { pathname , query: { searchTerm }} } = this.props;
    //Create one history slot for having a query so the back button will remove the query
    const action = searchTerm ? 'replace' : 'push';
    this.props.router[action](`${pathname}?searchTerm=${evt.target.value}`)
	}

	render() {
    const { children, location: { query: { searchTerm }, pathname } } = this.props;
    const tag = getTag(pathname);
    let content = children;

    if (!tag && searchTerm) {
      content = <PluginList {...this.props} />
    }

		return(
			<div>
				<Header />
			  <Wrapper>
				  <SearchField value={searchTerm || ""} tag={tag} onChange={this.handleSearch} />
          {tag && (<ListHeading key="ListHeading" text={capitalizeFirstLetter(tag)}></ListHeading>)}
					{content}
			  </Wrapper>
			</div>
		);
	}
}

const mapDispatchToProps = {
  loadPlugins
};

export default connect(undefined, mapDispatchToProps)(withRouter(App));
