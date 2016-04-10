import React, { Component } from "react";

import capitalizeFirstLetter from "../utils/capitalize";

import Header from './Header.react';
import PluginList from './PluginList.react';
import SearchField from './SearchField.react';
import ListHeading from './ListHeading.react';

import * as PluginActions from "../actions/Plugins";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { replace, push } from 'react-router-redux';

class App extends Component {
    
    constructor(props, context) {
        super(props, context);
        this._search = this._search.bind(this);
    }
    
    componentWillMount() {
        const { actions: {loadPlugins}} = this.props;
        loadPlugins();
    }
    
	render() {        
        const { children, location: { query }, params: { tag } } = this.props;
        const { searchTerm } = query;
        let content = children;
        
        if (!tag && searchTerm) {
            content = <PluginList {...this.props} />
        }
        
		return(
			<div>
				<Header />
				<section className="wrapper">
					<SearchField value={searchTerm} tag={tag} search={this._search} />
                    { tag ? <ListHeading key="ListHeading" text={capitalizeFirstLetter(tag)}></ListHeading> : null }
					{ content }
				</section>
			</div>
		);
	}
    
	_search(evt) {
        const { dispatch, location: { pathname , query: { searchTerm }} } = this.props;
        //Create one history slot for having a query so the back button will remove the query
        const action = searchTerm ? replace : push;
        
        dispatch(action(`${pathname}?searchTerm=${evt.target.value}`))
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(PluginActions, dispatch),
        dispatch
    }
}

export default connect(undefined, mapDispatchToProps)(App);