'use strict';

import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import Layout from './Layout';

export default class TabBar extends React.Component {
  static propTypes = {
    ...Animated.View.propTypes,
    shadowStyle: View.propTypes.style,
  };

  render() {
    const tabBarHeight = this.props.tabBarHeight;
    return (
      <Animated.View {...this.props} style={[styles.container, this.props.style, { height: tabBarHeight }]}>
        {this.props.children}
        <View style={[styles.shadow, this.props.shadowStyle]} />
      </Animated.View>
    );
  }
}

TabBar.defaultProps = { tabBarHeight: Layout.tabBarHeight };

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    backgroundColor: 'rgba(50, 50, 50, 0.25)',
    height: 5 * Layout.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? 0 : -Layout.pixel,
  },
});
