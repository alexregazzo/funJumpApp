import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import GameView from "../component/GameView";

export default function DashboardPage() {
  const [score, setScore] = useState(0);
  function scorePoint(success) {
    if (success) {
      setScore(score + 1);
    } else {
      setScore(0);
    }
  }
  return (
    <>
      <StatusBar />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Fun Jump</Text>
          <Text style={{ fontSize: 30 }}>Score: {score}</Text>
        </View>
        <GameView scorePoint={scorePoint} />
        <View style={{ backgroundColor: "dodgerblue", flex: 0.1 }}>
          <Text>Terceiro</Text>
        </View>
      </View>
    </>
  );
}
