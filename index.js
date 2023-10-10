const { nanoid } = require("nanoid");

const getAllRecipe = async () => {
  return [
    { title: "recipe 1", id: "1" },
    { title: "recipe 2", id: "2" },
    { title: "recipe 3", id: "3" },
  ];
};
const getByIdRecipe = async (id) => {
  const recipe = await getAllRecipe();
  const result = recipe.find((item) => item.id === id);
  return result || null;
};
const addRecipe = async (data) => {
  const recipe = await getAllRecipe();

  const newRecipe = {
    id: nanoid(),
    ...data,
  };
  recipe.push(newRecipe);
  return newRecipe;
};
const editRecipe = async (id, data) => {
  const allRecipe = await getAllRecipe();
  const recipe = allRecipe.findIndex((item) => item.id === id);
  if (recipe === -1) null;
};
const deleteRecepe = async (id) => {};
module.exports = {
  deleteRecepe,
  getAllRecipe,
  getByIdRecipe,
  addRecipe,
  editRecipe,
};
// console.log("index");
