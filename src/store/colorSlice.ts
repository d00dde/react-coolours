import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ColorItem = {
  color: string,
  isLocked: boolean,
}

type ColorsState = {
  colors: ColorItem[];
  colorsCount: number;
}

type ColorPayload = {
  index: number,
  color: string,
}

type LockPayload = {
  index: number,
  isLocked: boolean,
}

const initialState: ColorsState = {
  colors: [],
  colorsCount: 3,
};

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<ColorItem[]>) => {
      state.colors = action.payload;
    },
    setColor: (state, action: PayloadAction<ColorPayload>) => {
      state.colors[action.payload.index].color = action.payload.color;
    },
    setLock: (state, action: PayloadAction<LockPayload>) => {
      state.colors[action.payload.index].isLocked = action.payload.isLocked;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.colorsCount = action.payload;
    }
  },
});

export const { setColors, setColor, setLock, setCount } = colorsSlice.actions;

export default colorsSlice.reducer;
