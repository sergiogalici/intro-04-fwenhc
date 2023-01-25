export const createBlockThree = (flight) => {
  const blockThree = document.createElement('p');
  blockThree.classList.add('tickets-container__ticket--first-row__block-three');
  blockThree.innerText = `€ ${flight.price}`;
  return blockThree;
};
