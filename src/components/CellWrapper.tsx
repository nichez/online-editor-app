import { FC } from "react";
import "./cellWrapper.css";
import CodeCell from "./CodeCell";
import { Cell } from "../store";

const CellWrapper: FC = () => {
  const cell: Cell = {
    content: "",
  };

  return (
    <div className="cell-wrapper">
      <CodeCell cell={cell} />
    </div>
  );
};

export default CellWrapper;
