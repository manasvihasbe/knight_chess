import * as React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Knight from "./Knight";
import BoardSquare from "./BoardSquare";

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

function renderSquare(i: number, knightPosition: [number, number]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

export default function Board({ knightPosition }) {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "97vh",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
