export default function SectionTitle({subHeading,heading}) {
  return (
    <div className="text-center md:w-1/3 mx-auto mb-10">
        <p className="text-yellow-600 mb-4">---{subHeading}---</p>
        <h3 className="uppercase text-3xl border-y-4 py-4">{heading}</h3>

    </div>
  )
}
