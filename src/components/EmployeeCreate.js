import React, { Component } from 'react';
import { Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeFormUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    nameChanged(value) {
        this.props.employeeFormUpdate({ name: 'name', value });
    }

    phoneChanged(value) {
        this.props.employeeFormUpdate({ name: 'phone', value });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label='Name' 
                        placeholder='John Doe' 
                        value={this.props.name} 
                        onChangeText={this.nameChanged.bind(this)} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label='Phone' 
                        placeholder='0771234567' 
                        value={this.props.phone} 
                        onChangeText={this.phoneChanged.bind(this)} 
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }} >
                    <Text style={styles.pickerTextStyle} >Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeFormUpdate(
                            { name: 'shift', value }
                        )}
                    >
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednessday' value='Wednessday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPressHandler={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeFormUpdate, employeeCreate })(EmployeeCreate);
