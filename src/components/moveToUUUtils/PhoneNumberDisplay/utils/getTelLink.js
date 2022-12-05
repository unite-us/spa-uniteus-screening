function getTelLink(phoneNumber) {
  const country = (phoneNumber.country_code === '01') ? '1' : phoneNumber.country_code;
  const city = phoneNumber.phone_number.slice(0, 3);
  const number = phoneNumber.phone_number.slice(3, 10);

  return `tel:+${country}${city}${number}`;
}

export default getTelLink;
