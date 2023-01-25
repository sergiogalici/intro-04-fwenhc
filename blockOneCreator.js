export const createBlockOne = (flight) => {
  const blockOne = document.createElement('div');
  const blockOneLeft = createLogo();
  const blockOneRight = createBlockOneRight(flight);

  // Applico le relative classi
  blockOne.classList.add('tickets-container__ticket--first-row__block-one');
  blockOneLeft.classList.add(
    'tickets-container__ticket--first-row__block-one__left'
  );

  // Dispongo l'architettura delle appendici

  blockOne.appendChild(blockOneLeft);
  blockOne.appendChild(blockOneRight);

  return blockOne;
};

const createLogo = () => {
  const logoDiv = document.createElement('div');
  logoDiv.innerHTML += `<img src="https://loghi-famosi.com/wp-content/uploads/2021/11/Logo-della-ITA-Airways.png" alt="Girl in a jacket">`;
  return logoDiv;
};

const createBlockOneRight = (flight) => {
  const blockOneRight = document.createElement('div');
  const blockOneRightUpper = document.createElement('div');
  const blockOneRightLower = document.createElement('div');

  blockOneRight.classList.add(
    'tickets-container__ticket--first-row__block-one__right'
  );
  blockOneRightUpper.classList.add(
    'tickets-container__ticket--first-row__block-one__left__upper'
  );
  blockOneRightLower.classList.add(
    'tickets-container__ticket--first-row__block-one__left__lower'
  );

  blockOneRightUpper.innerText = flight.companyName;
  blockOneRightLower.innerText = flight.aircraftType;

  blockOneRight.appendChild(blockOneRightUpper);
  blockOneRight.appendChild(blockOneRightLower);
  return blockOneRight;
};
