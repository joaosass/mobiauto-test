export const updateData = (currentData: any, newData: any) => {
  const currentDataKeys = Object.keys(currentData);
  const newDataKeys = Object.keys(newData);
  const updatedCurrentData = { ...currentData };

  if (newDataKeys.every((newDataKey) => currentDataKeys.includes(newDataKey))) {
    newDataKeys.map((newDataKey) => {
      updatedCurrentData[newDataKey] = newData[newDataKey];
    })
  }
  return updatedCurrentData;
}