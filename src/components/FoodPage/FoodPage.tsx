import { Recipe } from "@/types";
import { FoodImage } from "./FoodImage";
import { recipes as allRecipes } from "@/data/recipes.json";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipeSteps } from "./RecipeSteps";
import Link from "next/link";

const recipes = allRecipes as Recipe[];

interface FoodPageProps {
  id: string | number;
}

export const FoodPage = ({ id }: FoodPageProps) => {
  /* ВАЖНО: Приводим r.id и id из пропсов к числу через Number(), 
     так как в JSON у вас ID — число (500), а из URL в Next.js 
     всегда приходит строка ("500"). Без этого рецепт не найдется.
  */
  const recipe = recipes.find((r) => Number(r.id) === Number(id));

  // Безопасная проверка: если рецепт не найден, страница не упадет в ошибку 500
  if (!recipe) {
    return (
      <div className="recipe-container">
        <h1 className="recipe-title">Рецепт не найден</h1>
        <Link href="/" className="back-button">
          <span>Вернуться на главную</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="recipe-container">
      {/* Обертка для выравнивания кнопки назад */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <Link href="/" className="back-button">
          {/* Добавлен слеш в начале пути для корректной работы на хостинге */}
          <img src="/images/icons/left.svg" alt="back" width="20" height="20" />
          <span style={{ fontWeight: 400 }}>Назад</span>
        </Link>
      </div>

      <div className="recipe-content-layout">
        {/* Левая колонка: Фото */}
        <div className="image-block">
          <FoodImage {...recipe} />
        </div>

        {/* Правая колонка: Название + Ингредиенты */}
        <div className="ingredients-column">
          <h1 className="recipe-title">{recipe.title}</h1>
          <RecipeIngredients ingredients={recipe.ingredients} />
        </div>

        {/* Нижний блок: Рецепт (шаги приготовления) */}
        <div className="steps-block">
          <RecipeSteps steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
};