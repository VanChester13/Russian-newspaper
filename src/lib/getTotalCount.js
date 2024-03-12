export const limit = 10;

export const getTotalPageCount = (rowCount) => Math.ceil(rowCount / limit);
