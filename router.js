import React from 'react'
import {View} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import songList from './src/components/songList'
import songDetails from './src/components/songDetails';

const Routes = () => (
   <Router>
      

      <Scene key = "root">
         <Scene key = "songList" component = {songList} title = "Song List" initial = {true} />
         <Scene key = "songDetails" component = {songDetails} title = "Song Details" back={true}/>
      </Scene>
   </Router>
)
export default Routes