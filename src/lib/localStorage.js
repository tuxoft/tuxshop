export const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);

    if (serializedData === null) {
      return undefined;
    }

    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const store = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);

    localStorage.setItem(key, serializedData);
  } catch (error) {}
};