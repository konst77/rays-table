import Grids from "./grids"

function Footer() {
  return (
    <Grids className="bg-black text-white">
      <div className="p-4 md:p-10">
        <h1 className="text-[56px] md:text-[72px] leading-[1.15] uppercase text-[#333]">
          See you back
          <br />
          at the table.
        </h1>
      </div>
    </Grids>
  )
}

export default Footer