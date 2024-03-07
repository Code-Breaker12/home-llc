import { TimeStyle, NetworkIcon, WifiIcon, BatteryIcon } from "../icons";

const HeadStaticIcons = (props) => (
    <div className="head">
        <div><TimeStyle /></div>
        <div className="head-right">
            <span><NetworkIcon /></span>
            <span><WifiIcon /></span>
            <span><BatteryIcon /></span>
        </div>
    </div>
)


export default HeadStaticIcons;