const { getAllRecipe, getByIdRecipe, deleteRecepe, editRecipe, addRecipe } = require("./index");

const invokeAction = async ({ action, name, id }) => {
  switch (action) {
    case "read":
      const allRecipe = await getAllRecipe();
      return console.log(allRecipe);
    case "getById":
      const oneRecipe = await getByIdRecipe(id);
      return console.log(oneRecipe);
    case "addRecipe":
      const newRecipe = await addRecipe({});
      return console.log(newRecipe);
    case "editRecipe":
      const edit = await editRecipe(id, { title });
    case "deleteRecipe":
      const recipe = await getAllRecipe();
  }
};
// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "1" });
// invokeAction({ action: "addRecipe" });
