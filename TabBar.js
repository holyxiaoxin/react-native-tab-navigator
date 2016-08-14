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
    const { tabBarHeight, tabBarBorderTopWidth } = this.props;
    return (
      <Animated.View {...this.props} style={[styles.container, this.props.style, { height: tabBarHeight }]}>
        {this.props.children}
        <View style={[styles.shadow, this.props.shadowStyle, { height: tabBarBorderTopWidth }]} />
      </Animated.View>
    );
  }
}

TabBar.defaultProps = { tabBarHeight: Layout.tabBarHeight, tabBarBorderTopWidth: Layout.tabBarBorderTopWidth };

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
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? 0 : -Layout.pixel,
  },
});
