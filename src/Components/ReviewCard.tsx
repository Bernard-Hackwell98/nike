interface RevCards {
  imgURL:string;
  customerName:string;
  rating:number;
  feedback:string;
}
// @ts-ignore
import {star} from "../nike_landing_assets/assets/icons";

const ReviewCard: React.FC<RevCards> = ({
  imgURL, customerName, rating, feedback
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      
      <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
      
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} 
        width={24}
        height={24}
        className="object-contain m-0"
        />
        <p className="text-slate-gray text-xl font-montserrat">
          ({rating})
        </p>
        <h3 className="mt-1 font-palanquin font-bold text-3xl text-center">{customerName}</h3>
      </div>
    </div>
  )
}

export default ReviewCard