import { selectcardId, selectcardName} from '../features/appSlice';
import {useSelector} from "react-redux"
import {setCardInfo} from "../features/appSlice";
import {useDispatch} from "react-redux";
import { Grow } from '@material-ui/core';
function Popup({state}) {
    const cardId = useSelector(selectcardId);
    const cardName = useSelector(selectcardName);
    const dispatch = useDispatch();
    return (
        <div className={cardId?"block":"hidden"}>
        <div  onClick={()=>
        dispatch(
          setCardInfo({
            cardId:null,
            cardName: null,
         }))} className="bg-black top-0 opacity-80 blur-3xl z-40 w-full h-full absolute">
            AAA
        </div>
        <Grow in={cardId}>
        <div className="flex flex-col  lg:flex-row absolute w-4/5 h-4/5 inset-0 bg-white m-auto z-50 rounded-md overflow-hidden">
            
            <div className="sm:h-2/6 lg:h-full lg:w-6/12 bg-red-600 overflow-hidden">
                <img src={cardId} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="h-4/6">
                    <h1>{cardName}</h1>
                    <span></span>
                    <div className="comment"></div>

           
            </div>
        </div>
        </Grow>
        </div>
    )
}

export default Popup
