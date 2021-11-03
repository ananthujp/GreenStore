import React from 'react'
import {useDispatch} from "react-redux";
import {setChannelInfo} from "./features/appSlice";
function SideBar() {
    const dispatch = useDispatch();
    return (
        <div className="">
            <div onClick={() =>
         dispatch(
             setChannelInfo({
                channelId:"AA",
                channelName: "BB",
            })
         )
    }>Set</div>
        </div>
    )
}

export default SideBar
