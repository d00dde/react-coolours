import React, {useEffect} from "react";
import {ColorCard} from "./ColorCard";
import {useAppDispatch, useAppSelector} from "../hooks/appHooks";
import {ColorItem, setColor, setColors} from "../store/colorSlice";
import {ColorHelper} from "../helpers/ColorHelper";
import {SaveColorsHelper} from "../helpers/SaveColorsHelper";

export function ColorsList() {
  const dispatch = useAppDispatch();
  const { colors, colorsCount } = useAppSelector((state) => state.color);
  useEffect(() => {
    const savedColors = SaveColorsHelper.getColors();
    let initialColors: ColorItem[];
    if(savedColors.length) {
      initialColors = savedColors.map((color) => ({
        color,
        isLocked: false,
      }))
    } else {
      initialColors = new Array(colorsCount).fill("").map(()=>({
        color: ColorHelper.getRandomColor(),
        isLocked: false,
      }))
    }
    dispatch(setColors(initialColors));
  }, [colorsCount, dispatch]);
  useEffect(() => SaveColorsHelper.saveColors(colors.map((item) => item.color)), [colors])
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Space") {
      colors.forEach((color, index) => {
        if(color.isLocked) return;
        dispatch(setColor({
          index,
          color: ColorHelper.getRandomColor(),
        }));
      });
    }
  }

  return (
    <div className="colors-list"  tabIndex={0} onKeyDown={handleKeyDown}>
      {colors.map((color, idx) => <ColorCard  item={color} index={idx} key={idx}/>)}
    </div>
  )
}
