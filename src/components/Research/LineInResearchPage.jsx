/** @format */

import React from 'react';
import '../../style/LineInResearchPage.css';

function LineInResearchPage(props) {
  const showPdf = () => {
    window.open(props.url);
  };
  const printPdf = () => {
    const hello = window.open(props.url);
  };

  return (
    <div>
      <div className='theLine'>
        <div className=' col-9 hebrwTextDiv'>
          <div className='hebrewText'>{props.name}</div>
        </div>
        <div className='allButtons'>
          <button className='button1' onClick={printPdf}>
            <span> הדפס</span>
          </button>
          <a href={props.name} download rel={props.url} target='_blank'>
            <button className='button1'>
              <span>הורד</span>
            </button>
          </a>
          <button className='button1' onClick={showPdf}>
            <span> הצג</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LineInResearchPage;
