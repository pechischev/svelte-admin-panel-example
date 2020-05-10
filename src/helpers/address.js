export const getAddress = ({city, street, house}) => {
  const address = [];
  if (city) {
    address.push(`г. ${city}`);
  }
  if (street) {
    address.push(`ул. ${street}`);
  }
  if (house) {
    address.push(`д. ${house}`);
  }

  return address.join(', ');
};