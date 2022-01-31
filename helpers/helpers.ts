import moment from 'moment';

export const decode = (string: string) => {
  const enc = encodeURI(string);
  const dec = decodeURI(enc);
  return dec.replace(new RegExp('&#039;', 'g'), `'`);
};

export const formatDate = (date: string) => moment(date).format('DD MMMM YYYY');
