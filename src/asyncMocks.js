import data from "./data/data.json";

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "Producto inexistente.",
      });
    }
  });
};
