import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {View, StyleSheet} from 'react-native';
import {TextField} from 'react-native-material-textfield';

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        if (this.state.password) {
            this.setState({
                icEye: 'visibility',
                password: false
            });
        } else {
            this.setState({
                icEye: 'visibility-off',
                password: true
            });
        }

    };


    render() {
        return (
            <View>
                <TextField {...this.props}
                           secureTextEntry={this.state.password}
                           label="Password"/>
                <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={25}
                      onPress={this.changePwdType}
                />
            </View>
        );
    }
}


export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 33,
        right: 0
    }

});