import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

export default {
    fontsize: hp("1.6%")
}