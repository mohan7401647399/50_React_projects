import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../component/recipe-item/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>loading.... Please wait</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          <p>Nothing to show. please search something...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
