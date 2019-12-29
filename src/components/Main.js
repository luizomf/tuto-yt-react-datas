import React, { useState } from 'react';

import Form from './Form';
import showDate from '../utils/showDate';
import './Main.css';

export default function Main() {
  const [date, setDate] = useState('');

  const [daysMonthsYears, setDaysMonthsYears] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  return (
    <>
      <h1 className="main-title">Datas</h1>
      <Form
        date={date}
        setDate={setDate}
        daysMonthsYears={daysMonthsYears}
        setDaysMonthsYears={setDaysMonthsYears}
      />

      <p className="date">{showDate(date, daysMonthsYears)}</p>
    </>
  );
}
