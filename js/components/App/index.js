import React, { Component } from 'react';
import withRouter from 'react-router/lib/withRouter';
import { connect } from 'react-redux';

import Wrapper from './Wrapper';
import Header from '../Header';
import PluginList from '../PluginList';
import SearchField from '../SearchField';
import ListHeading from '../ListHeading';

import { loadPlugins } from '../../actions';

import getTag from '../../utils/url';
import capitalize from '../../utils/capitalize';

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
          {tag && (<ListHeading key="ListHeading" text={capitalize(tag)}></ListHeading>)}
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
