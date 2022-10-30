import React, {useState} from "react";
import {ColorItem, setLock} from "../store/colorSlice";
import {ClipboardHelper} from "../helpers/ClipboardHelper";
import {useAppDispatch} from "../hooks/appHooks";

type Props = {
  index: number,
  item: ColorItem,
}

export function ColorCard({ index, item } : Props) {
  const dispatch = useAppDispatch();
  const [ content, setContent ] = useState(item.color)
  const [ className, setClassName ] = useState("");
  const clickHelper = async () => {
    await ClipboardHelper.setValue(item.color);
    setClassName("fa-sharp fa-solid fa-clipboard");
    setContent("");
    setTimeout(() => {
      setContent(item.color);
      setClassName("");
    }, 200);
  }
  return (
    <div className="color-card" style={{backgroundColor: item.color}}>
      <h2 onClick={clickHelper}>
        <i className={className}>{content}</i>
      </h2>
      <i
        className={`fa-solid fa-lock${item.isLocked ? "" : "-open"}`}
        onClick={() => dispatch(setLock({
          index,
          isLocked: !item.isLocked,
        }))}
      ></i>
    </div>
  );
}
