// @ts-ignore
import {star} from "../nike_landing_assets/assets/icons";

interface PopCards{
    imgURL: string;
    name: string;
    price: string;
}

const PopularProductCard: React.FC<PopCards> = ({imgURL, name ,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full gap-1">

        <img src={imgURL} alt={name} className="w-[280px] h-[280px] "/>

        <div className="mt-10 flex justify-start gap-1 ">
            
            <img src={star} alt="rating" width={24} height={24} className=""/>
            <p className="font-montserrat text-xl text-gray-500 leading-normal">(4.5)</p>
        </div>
        <h3 className="mt-2 leading-normal font-semibold text-2xl font-palanquin">{name}</h3>
        <p className="text-coral-red mt-2 font-montserrat font-semibold text-lg">{price}</p>




        </div>
  )
}

export default PopularProductCard