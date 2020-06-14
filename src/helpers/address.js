export const getAddress = ({city, street, house_number}) => {
  const address = [];
  if (city) {
    address.push(`г. ${city}`);
  }
  if (street) {
    address.push(`ул. ${street}`);
  }
  if (house_number) {
    address.push(`д. ${house_number}`);
  }

  return address.join(', ');
};