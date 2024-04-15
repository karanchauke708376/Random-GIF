import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {

  return (

    <div className="w-full flex flex-col background relative h-full items-center">

      <h1 className="bg-white rounded-lg text-center mt-[40px]
      px-10 py-2 text-4xl font-bold w-11/12  ">  R A N D O M     G I F S </h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random />
        <Tag/>

      </div>

    </div>
  )

}
