import { useEffect, useState } from 'react';

import Style from './Timer.module.css';

type timerProps = {
  startAt: Date;
};

export const Timer = ({ startAt }: timerProps) => {
  const startAtTimestamp = new Date(startAt).getTime();

  const [countDown, setCountDown] = useState(startAtTimestamp - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = startAtTimestamp - new Date().getTime();
      setCountDown(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [startAtTimestamp]);

  const { days, hours, minutes, seconds } = parseCountdown(countDown);

  return (
    <div id="timer" className={`${Style.timer} mt-4`}>
      <div className={Style.timerSection}>
        <div className={Style.timerNumber}>{days}</div>
        <div className={Style.timerLabel}>Hari</div>
      </div>
      <div className={Style.timerSection}>
        <div className={Style.timerNumber}>{hours}</div>
        <div className={Style.timerLabel}>Jam</div>
      </div>
      <div className={Style.timerSection}>
        <div className={Style.timerNumber}>{minutes}</div>
        <div className={Style.timerLabel}>Menit</div>
      </div>
      <div className={Style.timerSection}>
        <div className={Style.timerNumber}>{seconds}</div>
        <div className={Style.timerLabel}>Detik</div>
      </div>
    </div>
  );
};

const parseCountdown = (timestampDate: number) => {
  const days = Math.floor(timestampDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timestampDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timestampDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timestampDate % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
