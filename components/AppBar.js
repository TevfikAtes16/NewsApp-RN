import React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={{ marginTop: 30, backgroundColor: "green"}}>
      <Appbar.Content title="Home Screen" color="white"/>
    </Appbar.Header>
  );
};

export default Header;
