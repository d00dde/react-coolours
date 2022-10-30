import React from "react";
import {useAppDispatch} from "../hooks/appHooks";
import {setCount} from "../store/colorSlice";
import {SaveColorsHelper} from "../helpers/SaveColorsHelper";

const OPTIONS = [3, 4, 5, 6, 7, 8];

export function ColorsCountSelector() {
  const dispatch = useAppDispatch();
  const changeHelper = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SaveColorsHelper.clear();
    dispatch(setCount(+e.target.value));
  }

  return(
    <select className="colors-selector" onChange={changeHelper} >
      {OPTIONS.map((item) => <option value={item} key={item}>{item} colors </option>)}
    </select>
  );
}
