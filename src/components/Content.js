import Card from "./Card"
import Popup from "./Popup"



function Content() {
    
    return (
        <div>
            <Popup />
        <div className="grid auto-grid-fr gap-1 content-center">
            <Card url={'https://static.toiimg.com/photo/73078527.cms'} title={"POCO F2"}/>
            <Card url={'https://content.jdmagicbox.com/comp/kozhikode/h7/0495px495.x495.180207093501.y4h7/catalogue/track-and-trail-karaparamba-kozhikode-bicycle-dealers-vbxpkfkxo6.jpg?clr='} title={"Mountain Bike"}/>
            <Card url={'https://c8.alamy.com/comp/2FWYHE6/colored-usb-pen-drive-data-storage-mobile-device-on-a-dark-background-2FWYHE6.jpg'} title={"32GB Flash drive"}/>
        </div>
        </div>
    )
}

export default Content
