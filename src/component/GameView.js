import React, { Component } from "react";
import { Animated, View, TouchableWithoutFeedback, Easing } from "react-native";

export class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.jumping = false;

    this.scorePoint = props.scorePoint;
    this.ropeImage = require("../assets/rope.png");
    this.ropePosition = new Animated.Value(0);
    this.ropeSpeed = 1; // m/s
    this.ropeR = 10;

    this.playerPosition = new Animated.Value(0); // m from ground
    this.jumpSpeed = 0.6; // m/s
    this.jumpHeight = 250; // m
    this.jumpTotalTime = this.jumpHeight / this.jumpSpeed;
  }

  async rollRope() {
    Animated.timing(this.ropePosition, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      this.ropePosition.setValue(0);
      this.ropeHitGround();
      this.rollRope();
    });
  }

  async ropeHitGround() {
    if (this.jumping) {
      this.scorePoint(true);
    } else {
      this.scorePoint(false);
    }
  }

  componentDidMount() {
    this.rollRope();
  }

  handleJump() {
    if (!this.jumping) {
      this.jumping = true;
      Animated.sequence([
        Animated.timing(this.playerPosition, {
          toValue: -this.jumpHeight,
          duration: this.jumpTotalTime / 2,
          useNativeDriver: true,
        }),
        Animated.timing(this.playerPosition, {
          toValue: 0,
          duration: this.jumpTotalTime / 2,
          useNativeDriver: true,
        }),
      ]).start(() => {
        this.jumping = false;
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.scorePoint = nextProps.scorePoint;
    return false;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.handleJump()}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: "red",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Animated.Image
            source={this.ropeImage}
            style={{
              position: "absolute",
              zIndex: this.ropePosition.interpolate({
                inputRange: [0, 0.5, 0.5, 1],
                outputRange: [-1000, -1000, 1000, 1000],
              }),
              transform: [
                {
                  rotateX: this.ropePosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
                {
                  translateY: 50,
                },
              ],
            }}
          />

          <Animated.Image
            source={this.ropeImage}
            style={{
              position: "absolute",
              zIndex: this.ropePosition.interpolate({
                inputRange: [0, 0.5, 0.5, 1],
                outputRange: [-1000, -1000, 1000, 1000],
              }),
              tintColor: "#555",
              transform: [
                {
                  rotateX: this.ropePosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-8deg", "352deg"],
                  }),
                },
                {
                  translateY: 50,
                },
              ],
            }}
          />

          <Animated.View
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: 50,
              height: 50,
              borderRadius: 25,
              transform: [
                {
                  translateY: this.playerPosition,
                },
              ],
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default GameView;
