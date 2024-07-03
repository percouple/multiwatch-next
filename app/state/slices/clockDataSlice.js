// frontend/state/loadingSlice.js
import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const initialClock = {
  name: "New Clock",
  userId: nanoid(),
  clockId: nanoid(),
  editing: false,
  lastSessionTime: 0,
  todaySessionTime: 0,
  thisWeekTime: 0,
  allTime: 0,
};

const initialState = {
  currentClocks: [initialClock],
  // We'll use "editing" to simultaneously signify that we are
  // editing a clock, and to store the clock id that we're editing
  // editingClock: null,
  needToUpdateDatabase: false,
};

const clocksSlice = createSlice({
  name: "clocks",
  initialState,
  reducers: {
    // Sets a flag that will notify user/dev if client clocks
    // are different from db clocks
    flagForDBUpdate(state) {
      return { ...state, needToUpdateDatabase: true };
    },
    setCurrentClocks(state, action) {
      return { ...state, currentClocks: action.payload };
    },
    setEditingClock(state, action) {
      const newClocksArray = state.currentClocks.map((clock) => {
        if (clock.clockId === action.payload) {
          return { ...clock, editing: !clock.editing };
        } else {
          return clock;
        }
      });
      return { ...state, currentClocks: newClocksArray };
    },
    updateClock(state, action) {
      state.currentClocks.map((clock) => {
        if (clock.clockId === action.payload.clock.clockId) {
          clock.lastSessionTime = action.payload.secondsPassed;
          clock.todaySessionTime += action.payload.secondsPassed;
          clock.thisWeekTime += action.payload.secondsPassed;
          clock.allTime += action.payload.secondsPassed;

          if (clock.todaySessionTime >= 86400){
            clock.todaySessionTime = 0;
          }
          if (clock.thisWeekTime >= 604800) {
            clock.thisWeekTime = 0;
          }
          return clock;
        }
        return clock;
      });
    },
    addNewClock(state, action) {
      const clock = {
        name: action.payload.name,
        userId: action.payload.userId,
        clockId: action.payload.clockId,
        lastSessionTime: 0,
        todaySessionTime: 0,
        thisWeekTime: 0,
        allTime: 0,
      };
      return { ...state, currentClocks: [...state.currentClocks, clock] };
    },
    deleteClock(state, action) {
      const newClocks = state.currentClocks.filter((clock) => {
        return clock.clockId !== action.payload;
      });
      return {
        ...state,
        currentClocks: newClocks,
      };
    },
    editClock(state, action) {
      const { clockId, name } = action.payload;
      let { allTime, thisWeekTime, todaySessionTime} = action.payload;

      // Handle for inputs greater than parameters
      if (todaySessionTime > 86400) {
        todaySessionTime = 86400 - 1;
      }
      if (thisWeekTime > 604800) {
        thisWeekTime = 604800 - 1;
      }

      const newClocksArray = state.currentClocks.map((clock) => {
        if (clock.clockId === clockId) {
          const newClock = {
            ...clock,
            todaySessionTime: todaySessionTime,
            thisWeekTime: thisWeekTime,
            allTime: allTime,
            name: name,
            editing: false,
          };

          console.log(newClock)
          return newClock;
        } else {
          return clock;
        }
      });
      return { ...state, currentClocks: newClocksArray };
    },
  },
});

export const {
  setCurrentClocks,
  addNewClock,
  deleteClock,
  updateClock,
  updateClockTitle,
  flagForDBUpdate,
  setEditingClock,
  editClock,
} = clocksSlice.actions;
export default clocksSlice.reducer;
