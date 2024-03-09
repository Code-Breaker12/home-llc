import { TimeStyle, NetworkIcon, WifiIcon, BatteryIcon, NetworkIconBlack, WifiIconBlack, BateryIconBlack, TimeStyleBlack } from "../icons";

const HeadStaticIcons = ({black}) => (
    <div className="head">
        <div>{black ? <TimeStyleBlack/> : <TimeStyle />}</div>
        <div className="head-right">
            <span>{black ? <NetworkIconBlack/> : <NetworkIcon />}</span>
            <span>{black ? <WifiIconBlack/> : <WifiIcon />}</span>
            <span>{black ? <BateryIconBlack/> : <BatteryIcon />}</span>
        </div>
    </div>
)


export default HeadStaticIcons;