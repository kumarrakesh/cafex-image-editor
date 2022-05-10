import React, { useState, useEffect, useRef } from "react";
import TuiImageEditor from "tui-image-editor";

import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

const getNumber = (value) => Number(value.replace("px", ""));

const resizeElement = (element, percentage, props = [], values = []) => {
  props.forEach((key, idx) => {
    element.style[key] = values[idx] * percentage + "px";
  });
};

const ImageEditor = (props) => {
  const [zoom, setZoom] = useState(1);
  const maxZoom = 2;
  const minZoom = 0.5;
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const instance = useRef(null);
  const rootEl = useRef(null);

  useEffect(() => {
    instance.current = new TuiImageEditor(rootEl.current, {
      ...props,
    });
    instance.current.on("objectActivated", function (evt, a, b) {
      setLoaded(false);
      setZoom(1);
    });
    return () => {
      instance.current.destroy();
      instance.current = null;
    };
  }, [instance, props]);

  const zoomChange = (type) => {
    let updated = zoom;
    if (type === "in") {
      updated = updated + 0.25;
    } else {
      updated = updated - 0.25;
    }
    setZoom(updated);
    let maxHeight = height;
    let maxWidth = width;
    if (!loaded) {
      const canvas = document.querySelector("canvas");
      maxHeight = getNumber(canvas.style.maxHeight);
      maxWidth = getNumber(canvas.style.maxWidth);
      setHeight(maxHeight);
      setWidth(maxWidth);
      setLoaded(true);
    }
    resizeElement(
      document.querySelector(".tui-image-editor"),
      updated,
      ["height", "width"],
      [maxHeight, maxWidth]
    );
    resizeElement(
      document.querySelector(".tui-image-editor-canvas-container"),
      updated,
      ["maxHeight", "maxWidth"],
      [maxHeight, maxWidth]
    );
    document.querySelectorAll("canvas").forEach((element) => {
      resizeElement(
        element,
        updated,
        ["maxHeight", "maxWidth"],
        [maxHeight, maxWidth]
      );
    });
  };

  return (
    <div className="PR">
      <div className="zoom">
        <button
          className={maxZoom <= zoom && "disabled"}
          onClick={() => zoomChange("in")}
        >
          +
        </button>
        {zoom * 100}%
        <button
          className={minZoom >= zoom && "disabled"}
          onClick={() => zoomChange("out")}
        >
          -
        </button>
      </div>
      <div ref={rootEl} />
    </div>
  );
};

export default ImageEditor;
