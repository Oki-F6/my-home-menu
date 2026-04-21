import { Recipe } from "@/types";
import { FoodImage } from "./FoodImage";
import { recipes as allRecipes } from "@/data/recipes.json";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeSteps } from "./RecipeSteps";
import Link from "next/link";

const recipes = allRecipes as Recipe[];

interface FoodPageProps {
  id: number;
}

export const FoodPage = ({ id }: FoodPageProps) => {
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <div>Рецепт не найден</div>;

  return (
    <div className="recipe-container">
      <Link href="/" className="back-button">
        <img src="/images/icons/left.svg" alt="back" width="20" height="20" />
        <span>Назад</span>
      </Link>

      <div className="recipe-content-layout">
        {/* Левая колонка: Фото */}
        <div className="image-block">
          <FoodImage {...recipe} />
        </div>

        {/* Правая колонка: Название выровненное по центру ингредиентов */}
        <div className="ingredients-column">
          <h1 className="recipe-title">{recipe.title}</h1>
          <RecipeIngredients ingredients={recipe.ingredients} />
        </div>

        {/* Нижний блок: Рецепт */}
        <div className="steps-block">
          <RecipeSteps steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
};