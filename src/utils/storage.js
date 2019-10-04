export const putData = value => {
  localStorage.setItem("currentParking", JSON.stringify(value));
};
export const getdata = () => {
  const storedData = localStorage.getItem("currentParking");
  const myData = JSON.parse(storedData);
  return myData;
  //   console.log(myData);
};
export const putPastParking = value => {
  localStorage.setItem("pastParking", JSON.stringify(value));
};

export const updateCurentParking = value => {
  localStorage.setItem("currentParking", JSON.stringify(value));
};
