import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    renderItem({ item }) {
        return <ListItem employee={item} />;
    }

    render() {
        console.log(this.props);
        return (
            <FlatList 
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.key}
                //extraData={this.props.employees}
            />
        );
    }
}

const mapStatesToProps = state => {
    const employees = _.map(state.employees, (value, key) => {
        return { ...value, key };
    });

    return { employees };
};

export default connect(mapStatesToProps, { employeesFetch })(EmployeeList);
