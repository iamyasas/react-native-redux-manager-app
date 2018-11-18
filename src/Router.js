import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponenet = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'> 
                    <Scene key='loginForm' component={LoginForm} title='Please login' initial />
                </Scene>
                
                <Scene key='main'>
                    <Scene 
                        key='employeeList' 
                        rightTitle='Add'
                        onRight={() => Actions.employeeCreate()}
                        component={EmployeeList} 
                        title='Employees' 
                        initial 
                    />
                    <Scene key='employeeCreate' component={EmployeeCreate} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponenet;
