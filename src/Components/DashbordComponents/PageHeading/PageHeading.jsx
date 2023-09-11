
export default function PageHeading({subHeading, heading}) {

    return (
        <div className="text-center  mx-auto mb-10">
            <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="uppercase text-2xl border-y-4 py-4">{heading}</h3>
    
        </div>
      )
  
}
