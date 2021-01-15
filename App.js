import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import ComputerIcon from 'react-native-vector-icons/FontAwesome5';
import PlayerIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

const backgroundcolor = '#1f1f21';
const headercolor = '#ff5c66';
const textcolor = '#fcfcfc';
const {width, height} = Dimensions.get('screen');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamestart: false,
      player: '',
      computerpoint: 0,
      playerpoint: 0,
      count: 5,
      computericonname: '',
      playericonname: '',
      winresult: '',
      result: false,
    };
  }

  iconpress(name) {
    this.setState({count: 5});
    // for user rock press
    if (name == 'rock') {
      this.setState({playericonname: 'hand-rock'});
      setTimeout(() => {
        this.getcomputericonname();
      }, 100);
    }
    // for user paper press
    else if (name == 'paper') {
      this.setState({playericonname: 'hand-paper'});
      setTimeout(() => {
        this.getcomputericonname();
      }, 100);
    }
    // for user secissor press
    else {
      this.setState({playericonname: 'hand-scissors'});
      setTimeout(() => {
        this.getcomputericonname();
      }, 100);
    }
  }

  getcomputericonname() {
    var number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    // for computer rock
    if (number == 1) {
      this.setState({computericonname: 'hand-rock'});
      setTimeout(() => {
        this.getwinner();
      }, 100);
    }
    // for computer paper
    else if (number == 2) {
      this.setState({computericonname: 'hand-paper'});
      setTimeout(() => {
        this.getwinner();
      }, 100);
    }
    // for computer secissor
    else {
      this.setState({computericonname: 'hand-scissors'});
      setTimeout(() => {
        this.getwinner();
      }, 100);
    }
  }

  getwinner() {
    //////////////////////////////////////////////////////////////////////
    if (
      this.state.computericonname == 'hand-rock' &&
      this.state.playericonname == 'hand-rock'
    ) {
      this.setState({result: true, winresult: 'Match Draw'});
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-rock' &&
      this.state.playericonname == 'hand-paper'
    ) {
      this.setState({
        result: true,
        winresult: 'You Win',
        playerpoint: this.state.playerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-rock' &&
      this.state.playericonname == 'hand-scissors'
    ) {
      this.setState({
        result: true,
        winresult: 'Computer Win',
        computerpoint: this.state.computerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    ///////////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-paper' &&
      this.state.playericonname == 'hand-rock'
    ) {
      this.setState({
        result: true,
        winresult: 'Computer Win',
        computerpoint: this.state.computerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-paper' &&
      this.state.playericonname == 'hand-paper'
    ) {
      this.setState({result: true, winresult: 'Match Draw'});
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-paper' &&
      this.state.playericonname == 'hand-scissors'
    ) {
      this.setState({
        result: true,
        winresult: 'You Win',
        playerpoint: this.state.playerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    ///////////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-scissors' &&
      this.state.playericonname == 'hand-rock'
    ) {
      this.setState({
        result: true,
        winresult: 'You Win',
        playerpoint: this.state.playerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-scissors' &&
      this.state.playericonname == 'hand-paper'
    ) {
      this.setState({
        result: true,
        winresult: 'Computer Win',
        computerpoint: this.state.computerpoint + 1,
      });
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
    //////////////////////////////////////////////////////////////////////
    else if (
      this.state.computericonname == 'hand-scissors' &&
      this.state.playericonname == 'hand-scissors'
    ) {
      this.setState({result: true, winresult: 'Match Draw'});
      setTimeout(() => {
        this.gettimer();
      }, 100);
    }
  }

  gettimer() {
    this.interval = setInterval(
      () =>
        this.setState((prevState) => ({
          count: prevState.count - 1,
          result: this.state.count == 1 ? false : true,
          computericonname:
            this.state.count == 1 ? '' : this.state.computericonname,
          playericonname:
            this.state.count == 1 ? '' : this.state.playericonname,
        })),
      1000,
    );
  }

  componentDidUpdate() {
    if (this.state.count === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    if (this.state.gamestart == false) {
      return (
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.headertext}>Rock Paper Scissor</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <View>
              {/* player 1 */}
              <View
                style={{marginTop: (height * 5) / 100, alignItems: 'center'}}>
                <TextInput
                  placeholder="Enter Your Name"
                  placeholderTextColor={headercolor}
                  value={this.state.player}
                  onChangeText={(text) => this.setState({player: text})}
                  style={styles.textinput}
                />
              </View>
              {/* start game */}
              <TouchableOpacity
                activeOpacity={0.6}
                delayPressIn={0}
                onPress={() => {
                  if (this.state.player == '') {
                    ToastAndroid.showWithGravity(
                      `Names are require to play`,
                      ToastAndroid.LONG,
                      ToastAndroid.BOTTOM,
                    );
                  } else {
                    this.setState({gamestart: true});
                  }
                }}
                style={styles.start}>
                <Text style={styles.starttext}>Start</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headertext}>Rock Paper Scissor</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* vs */}
          <View style={styles.upper}>
            <Text style={styles.uppertext}>
              {this.state.player} VS Computer
            </Text>
          </View>
          {/*computer row */}
          <View style={styles.rowcontainer}>
            {/* 1part */}
            <View style={styles.rowpartcontainer}>
              <Text style={styles.playernametext}>Computer</Text>
            </View>
            {/* 2nd part */}
            <View
              style={[styles.rowpartcontainer, {width: (width * 40) / 100}]}>
              <View style={styles.iconcontainer}>
                {this.state.computericonname == '' ? (
                  <View />
                ) : (
                  <ComputerIcon
                    name={this.state.computericonname}
                    size={(width * 20) / 100}
                    color={textcolor}
                  />
                )}
              </View>
            </View>
            {/* 3rd part */}
            <View style={styles.rowpartcontainer}>
              <View style={styles.pointcontainer}>
                <Text style={styles.pointtext}>
                  {this.state.computerpoint} Point
                </Text>
              </View>
            </View>
          </View>
          {/* player row*/}
          <View style={[styles.rowcontainer, {marginTop: (height * 3) / 100}]}>
            {/* 1part */}
            <View style={styles.rowpartcontainer}>
              <Text style={styles.playernametext}>{this.state.player}</Text>
            </View>
            {/* 2nd part */}
            <View
              style={[styles.rowpartcontainer, {width: (width * 40) / 100}]}>
              <View style={styles.iconcontainer}>
                {this.state.playericonname == '' ? (
                  <View />
                ) : (
                  <PlayerIcon
                    name={this.state.playericonname}
                    size={(width * 20) / 100}
                    color={textcolor}
                  />
                )}
              </View>
            </View>
            {/* 3rd part */}
            <View style={styles.rowpartcontainer}>
              <View style={styles.pointcontainer}>
                <Text style={styles.pointtext}>
                  {this.state.playerpoint} Point
                </Text>
              </View>
            </View>
          </View>
          {/* weapon row */}
          <View style={styles.weaponrowcontainer}>
            {/* 1part */}
            <TouchableOpacity
              activeOpacity={0.3}
              delayPressIn={0}
              onPress={() => {
                this.iconpress('rock');
              }}>
              <View style={styles.weaponpartcontainer}>
                <View style={styles.weaponiconcontainer}>
                  <Icon
                    name="hand-rock"
                    size={(width * 10) / 100}
                    color={textcolor}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {/* 2nd part */}
            <TouchableOpacity
              activeOpacity={0.3}
              delayPressIn={0}
              onPress={() => {
                this.iconpress('paper');
              }}>
              <View style={styles.weaponpartcontainer}>
                <View style={styles.weaponiconcontainer}>
                  <Icon
                    name="hand-paper"
                    size={(width * 10) / 100}
                    color={textcolor}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {/* 3rd part */}
            <TouchableOpacity
              activeOpacity={0.3}
              delayPressIn={0}
              onPress={() => {
                this.iconpress('scissor');
              }}>
              <View style={styles.weaponpartcontainer}>
                <View style={styles.weaponiconcontainer}>
                  <Icon
                    name="hand-scissors"
                    size={(width * 10) / 100}
                    color={textcolor}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* note */}
          <View style={styles.upper}>
            <Text style={[styles.uppertext, {color: headercolor}]}>
              Choose your weapon
            </Text>
          </View>
        </ScrollView>
        {this.state.result == true ? (
          <TouchableWithoutFeedback
            onPress={() => this.setState({result: true})}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: '100%',
                position: 'absolute',
              }}>
              <TouchableWithoutFeedback
                onPress={() => this.setState({result: true})}>
                <View
                  style={{
                    height: '30%',
                    width: '60%',
                    borderRadius: 20,
                    backgroundColor: '#3f485c',
                  }}>
                  <View
                    style={{
                      height: '20%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: (width * 4) / 100,
                        letterSpacing: 1,
                      }}>
                      {this.state.winresult}
                    </Text>
                  </View>
                  {/* you choose */}
                  <View
                    style={{
                      height: '20%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: '#ffa159',
                        fontSize: (width * 3) / 100,
                        letterSpacing: 1,
                      }}>
                      You Choose:
                    </Text>
                    <PlayerIcon
                      name={this.state.playericonname}
                      size={(width * 5) / 100}
                      color={headercolor}
                    />
                  </View>
                  {/* computer choose */}
                  <View
                    style={{
                      height: '20%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        color: '#ffa159',
                        fontSize: (width * 3) / 100,
                        letterSpacing: 1,
                      }}>
                      Computer Choose:
                    </Text>
                    <ComputerIcon
                      name={this.state.computericonname}
                      size={(width * 5) / 100}
                      color={headercolor}
                    />
                  </View>
                  {/* wait */}
                  <View
                    style={{
                      height: '35%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        textAlign: 'center',
                        color: headercolor,
                        fontSize: (width * 7) / 100,
                        letterSpacing: 1,
                      }}>
                      {this.state.count}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

// styling---------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundcolor,
  },
  header: {
    height: (height * 8) / 100,
    backgroundColor: headercolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: (width * 5) / 100,
    color: textcolor,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  textinput: {
    width: (width * 90) / 100,
    height: (height * 6) / 100,
    backgroundColor: 'white',
    borderRadius: (width * 5) / 100,
    color: 'black',
    paddingLeft: (width * 4) / 100,
    fontSize: (width * 3) / 100,
  },
  start: {
    marginTop: (height * 5) / 100,
    marginBottom: (height * 5) / 100,
    padding: (width * 5) / 100,
    width: (width * 30) / 100,
    alignSelf: 'center',
    borderRadius: (width * 5) / 100,
    backgroundColor: headercolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starttext: {
    fontSize: (width * 3.5) / 100,
    color: textcolor,
    textAlign: 'center',
    letterSpacing: 1,
  },
  upper: {
    padding: (width * 9) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uppertext: {
    fontSize: (width * 4) / 100,
    color: textcolor,
    textAlign: 'center',
    letterSpacing: 2,
  },
  playernametext: {
    fontSize: (width * 4) / 100,
    color: headercolor,
    textAlign: 'center',
    letterSpacing: 2,
  },
  rowcontainer: {
    height: (height * 20) / 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowpartcontainer: {
    height: '100%',
    width: (width * 30) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconcontainer: {
    width: (width * 35) / 100,
    height: (width * 35) / 100,
    borderRadius: (width * 35) / 100 / 2,
    borderColor: headercolor,
    borderStyle: 'dashed',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointcontainer: {
    padding: (width * 3) / 100,
    borderWidth: 1,
    borderRadius: (width * 2) / 100,
    borderColor: headercolor,
  },
  pointtext: {
    fontSize: (width * 3.5) / 100,
    color: textcolor,
    textAlign: 'center',
    letterSpacing: 1,
  },
  weaponrowcontainer: {
    marginTop: (height * 3) / 100,
    height: (height * 20) / 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fc727b',
  },
  weaponpartcontainer: {
    height: '100%',
    width: (width * 32) / 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weaponiconcontainer: {
    width: (width * 27) / 100,
    height: (width * 27) / 100,
    borderRadius: (width * 27) / 100 / 2,
    borderColor: textcolor,
    borderStyle: 'dotted',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
