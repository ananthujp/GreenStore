import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Icon from "./Icon"
function Navbar() {
    return (
        <div className="sticky bg-white top-0 z-10 flex justify-between items-center p-4 lg:px-5 shadow-md">
            <div className="flex align-middle hover:bg-gray-100 cursor-pointer rounded-full p-2">
                <MenuIcon/>
            </div>
            <div className="flex align-middle px-1 text-gradient-to-r from-green-400 to-blue-500">
                <div className="flex space-x-6 md:space-x-2">
                    <Icon Icon={StorefrontIcon} active/>
                    <Icon Icon={CardTravelIcon}/>
                </div>
            </div>
            <div className="flex align-middle px-1">
                <Avatar src="https://pbs.twimg.com/profile_images/888341377729273856/OJGYfJTs_400x400.jpg"/>
            </div>
        </div>
    )
}

export default Navbar
