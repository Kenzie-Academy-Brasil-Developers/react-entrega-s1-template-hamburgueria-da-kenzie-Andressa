import { BodySemiBold, Caption } from "../fonts";
import { Product } from "./style";

export const LiProducts = ({ id, name, category, img, price, children }) => {
  return (
    <Product id={id}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <Caption>{category}</Caption>
        <BodySemiBold>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </BodySemiBold>
        {children}
      </div>
    </Product>
  );
};
