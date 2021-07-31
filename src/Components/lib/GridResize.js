import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function GridResize({ width, children }) {
  const layout = [
    { i: "60e8932e0f23a11e6d490603", x: 0, y: 0, w: 5, h: 11 },
    { i: "60e96676c3325a762e60e86c", x: 5, y: 0, w: 7, h: 16 },
    { i: "60e967f6c3325a762e60e872", x: 0, y: 11, w: 5, h: 11 },
  ];
  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={width}
      onLayoutChange={(s) => console.log(s)}
    >
      {children}
    </ResponsiveGridLayout>
  );
}

export default GridResize;
