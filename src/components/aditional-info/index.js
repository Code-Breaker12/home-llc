import { cloudData } from "../../data/cloud-data"
const AdditionalInfo = () => {
    const data = cloudData(); 
  return (
    <>
    <p>Additional Info</p>
    <div className="flex">
    {data?.additionalInfo?.map((item) =>
    <div key={item.id}>
        <p>{item.heading}</p>
        <p>{item.percentage}</p>
    </div> 
    )}
    </div>
    </>
    )
}

export default AdditionalInfo