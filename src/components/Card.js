import {setCardInfo} from "../features/appSlice";
import {useDispatch} from "react-redux";

function Card({url,title}) {
  const dispatch = useDispatch();
    return (

      <div onClick={()=>
        dispatch(
          setCardInfo({
            cardId:url,
            cardName: title,
         }))}>
        <div className="cursor-pointer shadow-lg my-10 mx-5 w-50 h-60 hover:z-6 transition-transform duration-1000 rounded-xl overflow-hidden">
              <span className="z-5 absolute text-white mt-48 hover:mt-36 ml-5 font-semibold ">{title}</span>
              <img src={url} alt="" className="z-1 h-full w-full object-cover" />
              
        </div>
      </div>

    )
}

export default Card
