import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../component/recipe-item/RecipeItem";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          <p>Nothing is added in favorites</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
