import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import Display from 'common/components/UI/Displays';
import useDisplayPomodoro from 'pages/pomodoro/hooks/useDisplayPomodoro';
import useControlPomodoro from 'pages/pomodoro/hooks/useControlPomodoro';
import { formatTimer, getMode } from '../../utils';

import styles from './PomodoroDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const PomodoroDisplay = ({ className }) => {
  const classNames = cx({
    PomodoroDisplay,
    [className]: !!className,
  });

  const [{ isTimerOn, timerMode }] = useControlPomodoro();
  const [timer, lap, countTimer, countLap, changeTimerMode, resetTimer] = useDisplayPomodoro();

  useEffect(() => {
    let tick;
    if (isTimerOn) {
      clearInterval(tick);
      tick = setInterval(countTimer, 1000);
    }

    if (timer === 0) {
      if (timerMode === 'focus') {
        countLap();
      }
      changeTimerMode(getMode(timerMode, lap + 1));
      resetTimer();
    }
    return () => clearInterval(tick);
  }, [isTimerOn, countTimer, changeTimerMode, countLap, lap, resetTimer, timer, timerMode]);

  return (
    <div className={classNames}>
      <Display>{formatTimer(timer)}</Display>
      <div className={styles.PomodoroDisplay__sub}>
        <Display isActive>
          Time to
          {' '}
          {timerMode}
        </Display>
        <Display>{lap}</Display>
      </div>
    </div>
  );
};

export default PomodoroDisplay;

PomodoroDisplay.propTypes = {
  className: PropTypes.string,
};

PomodoroDisplay.defaultProps = {
  className: '',
};
