import React from "react";
import ImageEditor from "../../utils/imageEditor";

export const ImageEdit = ({ path }) => {
  const props = {
    includeUI: {
      loadImage: {
        path: path,
        name: "SampleImage",
      },
      uiSize: {
        width: "100%",
        height: "450px",
      },
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "filter",
      ],
      menuBarPosition: "bottom",
      // theme: whiteTheme,
    },
    cssMaxWidth: 1200,
    cssMaxHeight: 800,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };

  return (
    <div className="editor-container">
      <ImageEditor {...props} />
      {/* <SlideShow /> */}
    </div>
  );
};
