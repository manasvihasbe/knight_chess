import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <span
      ref={drag}
      style={{
        fontSize: 64,
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      ♘
    </span>
  );
}
