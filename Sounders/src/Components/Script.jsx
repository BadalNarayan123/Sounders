import React, { useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let backButton = document.getElementById('back');
    let seeMoreButtons = document.querySelectorAll('.seeMore');
    let courasol = document.querySelector('.courasol');
    let listHTML = document.querySelector('.courasol .list');

    const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';
      courasol.classList.remove('prev', 'next');

      let items = document.querySelectorAll('.courasol .list .item');
      if (type === 'next') {
        listHTML.appendChild(items[0]);
        courasol.classList.add('next');
      } else {
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        courasol.classList.add('prev');
      }

      setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nextButton.onclick = function () {
      showSlider('next');
    };
    prevButton.onclick = function () {
      showSlider('prev');
    };

    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        courasol.classList.add('showDetail');
      };
    });

    backButton.onclick = function () {
      courasol.classList.remove('showDetail');
    };
  }, []);

  return (
    <>
      {/* Your JSX here */}
    </>
  );
};

export default Script;
