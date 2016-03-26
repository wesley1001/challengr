import React, {
  View,
  Text
} from 'react-native'

import HandleRoutes from '../containers/HandleRoutes';
import LoginAuth from '../containers/Login'
import SendChallenges from '../containers/SendChallenge'
import ChallengeList from '../containers/ChallengeList'
import Leaderboard from '../containers/Leaderboard'
import { Scene, Router, Actions } from 'react-native-router-flux';

const ScrollableTabView = require('react-native-scrollable-tab-view');

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene type="replace" key="signUp" initial={true} component={LoginAuth} />
    <Scene type="replace" key="createChallenge" component={SendChallenges} />
    <Scene type="replace" key="myChallenges" component={ChallengeList} />
    <Scene type="replace" key="Leaderboard" component={Leaderboard} />
  </Scene>
);
//the view should hold each container
const App = () => (
 <View style={{ flex: 1 }}>
  <ScrollableTabView>
     <Router scenes={scenes} tabLabel="MyChallenges"/>
     <View tabLabel="Nav">
       <HandleRoutes />
     </View>
  </ScrollableTabView>
 </View>
)

export default App


