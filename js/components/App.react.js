import React, { Component } from "react";
import withRouter from "react-router/lib/withRouter";
import styled from 'styled-components';
import constants from '../constants';
import capitalizeFirstLetter from "../utils/capitalize";

import Header from './Header.react';
import PluginList from './PluginList.react';
import SearchField from './SearchField.react';
import ListHeading from './ListHeading.react';

import { loadPlugins } from "../actions/Plugins";
import { connect } from "react-redux";
import getTag from "../utils/url";

const Wrapper = styled.section`
  max-width: ${constants.maxWidth};
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 2em;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  &:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
`;

class App extends Component {
  constructor(props, context) {
    super(props, context);
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
          {tag && (
            <ListHeading key="ListHeading" text={capitalizeFirstLetter(tag)}></ListHeading>
          )}
					{ content }
			  </Wrapper>
			</div>
		);
	}
}

const mapDispatchToProps = {
  loadPlugins
};

export default connect(undefined, mapDispatchToProps)(withRouter(App));
