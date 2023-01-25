import { flights } from './data';
import './style.css';

const appDiv = document.getElementById('app');

const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('tickets-container');
  const date = document.createElement('p');
  date.classList.add('tickets-container__date');
  date.innerText = `${getDateInItalian()}`;
  wrapper.appendChild(date);
  appDiv.appendChild(wrapper);
};

const getDateInItalian = () => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date().toLocaleDateString('it-IT', options);
};

const createTicket = (logo, flight) => {
  const ticketWrapper = document.createElement('div');
  const firstRow = document.createElement('div');
  const secondRow = document.createElement('div');
  const logoDiv = document.createElement('div');

  ticketWrapper.classList.add('tickets-container__ticket');
  firstRow.classList.add('tickets-container__ticket--first-row');
  secondRow.classList.add('tickets-container__ticket--second-row');
  logoDiv.innerHTML += "<img src="https://loghi-famosi.com/wp-content/uploads/2021/11/Logo-della-ITA-Airways.png" alt="Girl in a jacket">"
  ticketWrapper.appendChild(firstRow)
  ticketWrapper.appendChild(secondRow)
  ticketWrapper.appendChild(logoDiv)
  appDiv.appendChild(ticketWrapper)
};

createWrapper();
createTicket()
