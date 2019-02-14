// All application level helper functions should be listed in this file

export const generateReferenceNumber = () => {
  const LETTER_LENGTH = 2;
  const NUMBER_LENGTH = 12;

  let referenceNumber = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  for (let i = 0; i < LETTER_LENGTH; i += 1) {
    referenceNumber += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  referenceNumber += '-';
  for (let i = 0; i < NUMBER_LENGTH; i += 1) {
    referenceNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return referenceNumber;
};

export const numberWithCommas = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
