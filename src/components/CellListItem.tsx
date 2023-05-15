import "./cellListItem.css";
import { Cell } from "../store";
import CodeCell from "./CodeCell";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return <div className="cell-list-item"><CodeCell cell={cell} /></div>;
};

export default CellListItem;
