document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the recipe details from localStorage
    const recipeToEdit = JSON.parse(localStorage.getItem("editRecipe"));

    // Populate the form fields with the recipe details
    document.getElementById("title").value = recipeToEdit.title;
    document.getElementById("ingredients").value = recipeToEdit.ingredients;
    document.getElementById("instructions").value = recipeToEdit.instructions;

    // Add an event listener to the form for updating the recipe
    const editRecipeForm = document.getElementById("editRecipeForm");
    editRecipeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Update the recipe object with the new values
        recipeToEdit.title = document.getElementById("title").value;
        recipeToEdit.ingredients = document.getElementById("ingredients").value;
        recipeToEdit.instructions = document.getElementById("instructions").value;

        // Optionally, handle the image file update if needed
        // Example: recipeToEdit.image = document.getElementById("image").src;

        // Retrieve the recipes array from localStorage
        const recipes = JSON.parse(localStorage.getItem("recipes"));

        // Find the index of the recipe in the recipes array based on its ID
        const index = recipes.findIndex((recipe) => recipe.id === recipeToEdit.id);

        // Update the recipe in the recipes array
        if (index !== -1) {
            recipes[index] = recipeToEdit;
        } else {
            console.error("Recipe not found in the recipes array.");
            return;
        }

        // Save the updated recipes array back to local storage
        localStorage.setItem("recipes", JSON.stringify(recipes));

        // Clear the form fields after updating
        editRecipeForm.reset();

        // Redirect the user back to the recipe list page
        window.location.href = "index.html";
    });
});
