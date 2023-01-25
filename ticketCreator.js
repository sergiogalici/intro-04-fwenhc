import { createBlockOne } from './blockOneCreator.js';
import { createBlockTwo } from './blockTwoCreator.js';
import { createBlockThree } from './blockThreeCreator.js';
import { createButton } from './button.js';

const createFirstRow = (flight) => {
  // Definisco gli elementi da creare
  const firstRow = document.createElement('div');
  const blockOne = createBlockOne(flight);
  const blockTwo = createBlockTwo(flight);
  const blockThree = createBlockThree(flight);
  const button = createButton('Book now');
  // Applico le relative classi
  firstRow.classList.add('tickets-container__ticket--first-row');
  // Dispongo l'architettura delle appendici
  firstRow.appendChild(blockOne);
  firstRow.appendChild(blockTwo);
  firstRow.appendChild(blockThree);
  firstRow.appendChild(button);
  return firstRow;
};

const createSecondRow = (flight) => {
  const secondRow = document.createElement('div');
  secondRow.classList.add('tickets-container__ticket--second-row');
  return secondRow;
};

export const createTicket = (flight) => {
  // Crea l'elemento principale per il biglietto
  const ticketWrapper = document.createElement('div');
  ticketWrapper.classList.add('tickets-container__ticket');

  // Crea la prima riga del biglietto
  const firstRow = createFirstRow(flight);
  // Crea la seconda riga del biglietto
  const secondRow = createSecondRow(flight);

  // Imposta la corretta architettura delle appendici
  ticketWrapper.appendChild(firstRow);
  ticketWrapper.appendChild(secondRow);

  // Inserisce le rispettive classi agli elementi
  firstRow.classList.add('tickets-container__ticket--first-row');
  secondRow.classList.add('tickets-container__ticket--second-row');
  // Restituisce il wrapper del biglietto completamente creato
  return ticketWrapper;
};
