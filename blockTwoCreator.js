export const createBlockTwo = (flight) => {
  const blockTwo = document.createElement('div');
  const innerBlockOne = createInnerBlockOne(flight);
  const innerBlockTwo = createInnerBlockTwo(flight);
  const innerBlockThree = createInnerBlockThree(flight);

  blockTwo.classList.add('tickets-container__ticket--first-row__block-two');

  blockTwo.appendChild(innerBlockOne);
  blockTwo.appendChild(innerBlockTwo);
  blockTwo.appendChild(innerBlockThree);

  return blockTwo;
};

const createInnerBlockOne = (flight) => {
  const innerBlockOne = document.createElement('div');
  const rowOne = document.createElement('p');
  const rowTwo = document.createElement('p');

  rowOne.innerText = flight.departureTime;
  rowTwo.innerText = flight.departureAirport;

  innerBlockOne.classList.add(
    'tickets-container__ticket--first-row__block-two__inner-block-one'
  );
  rowOne.classList.add('block-two__row-one');
  rowTwo.classList.add('block-two__row-two');

  innerBlockOne.appendChild(rowOne);
  innerBlockOne.appendChild(rowTwo);

  return innerBlockOne;
};

const createInnerBlockTwo = (flight) => {
  const innerBlockTwo = document.createElement('div');
  return innerBlockTwo;
};

const createInnerBlockThree = (flight) => {
  const innerBlockThree = document.createElement('div');
  const rowOne = document.createElement('p');
  const rowTwo = document.createElement('p');

  rowOne.innerText = flight.arrivalTime;
  rowTwo.innerText = flight.arrivalAirport;

  innerBlockThree.classList.add(
    'tickets-container__ticket--first-row__block-two__inner-block-three'
  );
  rowOne.classList.add('block-two__row-one');
  rowTwo.classList.add('block-two__row-two');

  innerBlockThree.appendChild(rowOne);
  innerBlockThree.appendChild(rowTwo);
  return innerBlockThree;
};
