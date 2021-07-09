import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

function Resize({ onResizeStop, children }) {
  const [size, setSize] = useState({ width: 100, height: 100 });

  function handleResize(event, { element, size, handle }) {
    setSize({ width: size.width, height: size.height });
  }

  return (
    <Resizable
      onResizeStop={onResizeStop}
      height={size.height}
      width={size.width}
      onResize={handleResize}
      lockAspectRatio
      handle={
        <HamburgerIcon position="absolute" right={0} cursor="se-resize" />
      }
    >
      <div
        style={{
          width: size.width + "px",
          height: size.height + "px",
        }}
      >
        {children}
      </div>
    </Resizable>
  );
}

export default Resize;
