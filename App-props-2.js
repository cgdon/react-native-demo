import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', marginTop: 100}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}