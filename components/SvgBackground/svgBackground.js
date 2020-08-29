import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
export default function WavyHeader({ customStyles }) {
    return (
      <View>
        <View style={{ backgroundColor: '#a2d9ff', height: hp('90%') }}>
        <Svg viewBox="0 0 1440 320"><Path fill="#a2d9ff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,149.3C480,139,600,117,720,138.7C840,160,960,224,1080,234.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></Path></Svg>
        </View>
      </View>
    );
  }