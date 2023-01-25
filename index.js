import { flights } from './data';
import { createTicket } from './ticketCreator.js';
import './style.css';

export const appDiv = document.getElementById('app');

const ticket = createTicket(flights[0]);
appDiv.appendChild(ticket);

/*const container = createWrapper();
const header = createHeader();
const tickersWrapper = createInnerWrapper();*/

// container.append(header, tickersWrapper, cartWrapper);
