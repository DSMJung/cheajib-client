import styled from "styled-components/native";
import vegan from "../../assets/vegetarianStage/vegan.png";
import lacto from "../../assets/vegetarianStage/lacto.png";
import lactoOvo from "../../assets/vegetarianStage/lactoOvo.png";
import pasco from "../../assets/vegetarianStage/pasco.png";
import pollo from "../../assets/vegetarianStage/pollo.png";
import flexitarian from "../../assets/vegetarianStage/flexitarian.png";

import shadowVegan from "../../assets/vegetarianStage/shadowVegan.png";
import shadowLacto from "../../assets/vegetarianStage/shadowLacto.png";
import shadowLactoOvo from "../../assets/vegetarianStage/shadowLactoOvo.png";
import shadowPasco from "../../assets/vegetarianStage/shadowPasco.png";
import shadowPollo from "../../assets/vegetarianStage/shadowPollo.png";
import shadowFlexitarian from "../../assets/vegetarianStage/shadowFlexitarian.png";

import { TouchableOpacity } from "react-native";
import { useState } from "react";

const levelNum = {
  vegan: 0,
  lacto: 1,
  lactoOvo: 2,
  pasco: 3,
  pollo: 4,
  flexitarian: 5,
};

const levelImage = {
  vegan,
  shadowVegan,
  lacto,
  shadowLacto,
  lactoOvo,
  shadowLactoOvo,
  pasco,
  shadowPasco,
  pollo,
  shadowPollo,
  flexitarian,
  shadowFlexitarian,
};

const VegetarianStage = (initalState, onChangeLevel) => {
  const [level, setLevel] = useState(initalState && "flexitarian");
  return (
    <StageContainer>
      {Object.keys(levelNum).map((x, i) => (
        <VegetarianItem
          key={i}
          level={x}
          currentLevel={level}
          setCurrentLevel={setLevel}
          onChangeLevel={onChangeLevel}
        />
      ))}
    </StageContainer>
  );
};

const VegetarianItem = ({
  level,
  currentLevel,
  setCurrentLevel,
  onChangeLevel,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onChangeLevel === {} ? onChangeLevel(level) : {};
        setCurrentLevel(level);
      }}
    >
      <VegetarianItemImage
        source={
          levelNum[currentLevel] >= levelNum[level]
            ? levelImage[level]
            : levelImage[
                `shadow${level.charAt(0).toUpperCase() + level.slice(1)}`
              ]
        }
      />
    </TouchableOpacity>
  );
};

const StageContainer = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const VegetarianItemImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export default VegetarianStage;
