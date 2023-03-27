import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import PeopleFaceData from '../../Common/Dummy/PoepleFaceData';
import Icons from '../../Common/Icons';
import PeopleFace from './PeopleFace';
import styles from './styles';

const ReminderView = () => {
  return (
    <View style={styles.ReminderContainerView}>
      <View style={styles.ReminderView}>
        {/* Top */}
        <View style={styles.PeopleAndInvite}>
          <View style={styles.People}>
            <FlatList
              horizontal
              data={PeopleFaceData}
              renderItem={PeopleFace}
            />
          </View>
          <View style={styles.InviteDotView}>
            <TouchableOpacity style={styles.InviteButton}>
              <View style={styles.ButtonFlex}>
                <Image source={Icons.ThickPlus} style={styles.Plus} />
                <Text style={styles.InviteText}>Invite</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dotButton}>
              <Image source={Icons.dots} style={styles.dot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom */}
      </View>
    </View>
  );
};

export default ReminderView;
