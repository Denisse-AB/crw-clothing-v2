import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories-context";
import CategoryPreview from '../../components/category-preview/category-preview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
      // fragment shorthand
      <>
        {Object.keys(categoriesMap).map((key) => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })}
      </>
  );
}

export default CategoriesPreview;
