import React from "react";
import { FixedSizeList as List } from "react-window";
import "./List.css";

// https://github.com/bvaughn/react-window

const Row = (props) => {
  const { data, style, index, isScrolling } = props;

  return (
    <div className="pop" style={style}>
      {index}
    </div>
  );
};

const Column = (props) => {
  const { data, style, index, isScrolling } = props;

  return <div>{index}</div>;
};

export const Example = () => {
  return (
    <List height={1000} itemCount={1000} itemSize={50} width={"60%"}>
      {Row}
      {/* {Column} */}
    </List>
  );
};
