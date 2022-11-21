import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Style from './TimeCounter.module.scss';
import { TimeCounterProps } from './TimeCounter.types';

const TimeCounter: TimeCounterProps = ({ date }) => {
  if (date == undefined) {
    date = new Date();
  }

  const timestamp = new Date(date).getTime();

  const [countDown, setCountDown] = useState(timestamp - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = timestamp - new Date().getTime();
      setCountDown(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const { days, hours, minutes, seconds } = parseCountdown(countDown);

  return (
    <div className={clsx(Style.timeCounter, 'mt-4')}>
      <div className={Style.timeCounterSection}>
        <div className={Style.timeCounterNumber}>{days}</div>
        <div className={Style.timerLabel}>Hari</div>
      </div>
      <div className={Style.timeCounterSection}>
        <div className={Style.timeCounterNumber}>{hours}</div>
        <div className={Style.timeCounterLabel}>Jam</div>
      </div>
      <div className={Style.timeCounterSection}>
        <div className={Style.timeCounterNumber}>{minutes}</div>
        <div className={Style.timeCounterLabel}>Menit</div>
      </div>
      <div className={Style.timeCounterSection}>
        <div className={Style.timeCounterNumber}>{seconds}</div>
        <div className={Style.timeCounterLabel}>Detik</div>
      </div>
    </div>
  );
};

const parseCountdown = (timestamp: number) => {
  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timestamp % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default TimeCounter;
