import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  ViroAnimations.registerAnimations({
    rotate:{
      duration:2500,
      properties:{
        rotateY:'+=90'
      }
    }
  })
  
  ViroMaterials.createMaterials({
    texture: {
      diffuseTexture: require('./assets/door51L.jpg')
    }
  })
  return (
    <ViroARScene>
     <ViroAmbientLight color={"#ffffff"}/>
      <Viro3DObject 
      source={require('./assets/MR-V03.obj')}
      position={[0, 0, -1]}
        scale={[0.01, 0.01, 0.01]}
      animation={{name: 'rotate', loop:true, run: true}}
      materials={"texture"}
      type="OBJ"

      />

      <Viro3DObject
        source={require('./assets/objTower1.obj')}
        position={[-1, 0, -1]}
        scale={[0.05, 0.05, 0.05]}
        animation={{ name: 'rotate', loop: true, run: true }}
        materials={"texture"}
        type="OBJ"

      />

      <Viro3DObject
        source={require('./assets/objTower2.obj')}
        position={[2, 0, -3]}
        scale={[0.3, 0.3, 0.3]}
        animation={{ name: 'rotate', loop: true, run: true }}
        materials={"texture"}
        type="OBJ"

      />

      <Viro3DObject
        source={require('./assets/objTower3.obj')}
        position={[6, 0, -4]}
        scale={[0.3, 0.3, 0.3]}
        animation={{ name: 'rotate', loop: true, run: true }}
        materials={"texture"}
        type="OBJ"

      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
