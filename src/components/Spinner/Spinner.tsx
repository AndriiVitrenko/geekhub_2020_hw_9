import React from 'react';
import './spinner.css';
import spinnerLogo from '../../logo.svg';

export default function Spinner() {
  return (
    <div className="spinner_wrapper">
      <img alt="spinner" src={spinnerLogo} className="spinner" />
    </div>
  );
}
