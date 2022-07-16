const initialState = {
  common: {
    theme: 'light',
    lang: 'ru',
  },
  clock: {
    activeCity: {
      id: 1, city: 'Moscow', timeZone: 3,
    },
    citiesList: [
      {
        id: 1, city: 'Moscow', timeZone: 3,
      },
    ],
  },
  stopwatch: {
    info: { isStart: false, isReset: true },
    time: { main: { ms: 0, sec: 0, min: 0 }, lap: { ms: 0, sec: 0, min: 0 } },
    laps: [],
  },
  pomodoro: {
    timeFocus: 25,
    timeShortBreak: 5,
    timeLongBreak: 15,
    isFocus: true,
    isShortBreak: false,
    isLongBreak: false,
    lap: 0,
  },
  todo: {
    lists: [
      { orderNum: 0, id: 0, name: 'All' },
    ],
    todos: [
      {
        orderNum: 0, idList: 0, id: 0, isCompleted: false, task: 'Example todo',
      },
    ],
  },
};

export default initialState;
