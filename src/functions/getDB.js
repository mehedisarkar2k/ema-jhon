export const getDB = () => {
  const local = localStorage.getItem("cart");

  if (local) return JSON.parse(local);
  else return null;
};

export const setDB = (data) => {
  const storage = {};
  for (const d of data) {
    storage[d.key] = d.quantity;
  }
  const stringifyData = JSON.stringify(storage);

  localStorage.setItem("cart", stringifyData);
};

// export const margeToUI = (data, setData) => {
//   const storageData = getDB();
// };
