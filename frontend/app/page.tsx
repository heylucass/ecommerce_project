import Modal from './Components/modal';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      {/* Navigaion bar */}
      <div className=" h-16 flex flex-row fixed hover:opacity-100 top-0 justify-around bg-slate-50 items-center rounded-b-xl p-4 ">
        <div className="visible"><img className=" h-20 w-40 p-2" src="logo.jpg" alt="Logo"/></div>
        <div className=" visible flex flex-row h-full items-center">
          <div className="mx-10 p-4 cursor-pointer rounded-xl ring:bg-slate-100 hover:bg-slate-200 focus:bg-slate-100">Carinho</div>
          <div className="p-4 cursor-pointer rounded-xl ring:bg-slate-100 hover:bg-slate-200 focus:bg-slate-100">Perfil</div>
        </div>
      </div>

      {/* Main Banner */}
      <div className="bg-slate-500 w-full h-screen static"><img className="z-10 w-full h-full" src="banner.jpeg" alt="placeholder" /><div className="absolute bottom-72 left-12 text-8xl italic antialised font-serif text-slate-50 tracking-wider font-bold">Lucky me! <br/> I see Angels</div></div>

      {/* Section Abouts */}
      <div className="flex flex-row w-full justify-evenly items-center mt-8">
        <div><img  src="royalblue.jpeg" alt="bannerSection"/></div>
        <div className="text-xl w-96 h-48 subpixel-antialised tracking-wide text-center text-wrap align-middle line-clamp-1 items-center"><b>Saint Levon</b> é uma marca Brasileira, com foco no streetwear, <b className="underline">pensada e criada nas ruas sob a influencia dos céus!</b><br/> <b className="underline decoration">Siga nos</b></div>
      </div>

      {/* Section Products */}
      <div className="flex flex-col mt-8 p-10 items-center justify-center">
        <h3 className="border-b border-slate-500">Products</h3>

        <div className="grid grid-rows-2 grid-cols-3 gap-4 mt-4 cursor-pointer">

          <div className="rounded-xl w-72 h-96 border-2 jusitfy-center items-center">
            <img className="w-full h-1/2 rounded-t-xl" src="luckymehats.jpeg" alt="productImage" />
            <div className="flex flex-col text-xl p-2 justify-center items-left h-1/2">
              <p>Luckyme! Boné</p><br/>
              <div className="text-xl flex flex-row justify-between"><h5>R$50.00</h5><p className="text-4xl">&#x2606;</p></div>
            </div>
          </div>
          <div className="rounded-xl w-72 h-96 border-2 jusitfy-center items-center">
            <img className="w-full h-1/2 rounded-t-xl" src="banner2.jpeg" alt="productImage" />
            <div className="flex flex-col text-xl p-2 justify-center items-left h-1/2">
              <p>Luckyme! Boné</p><br/>
              <div className="text-xl flex flex-row justify-between"><h5>R$50.00</h5><p className="text-4xl">&#x2606;</p></div>
            </div>
          </div>
          <div className="rounded-xl w-72 h-96 border-2 jusitfy-center items-center">
            <img className="w-full h-1/2 rounded-t-xl" src="luckymehats.jpeg" alt="productImage" />
            <div className="flex flex-col text-xl p-2 justify-center items-left h-1/2">
              <p>Luckyme! Boné</p><br/>
              <div className="text-xl flex flex-row justify-between"><h5>R$50.00</h5><p className="text-4xl">&#x2606;</p></div>
            </div>
          </div>
          <div className="rounded-xl w-72 h-96 border-2 jusitfy-center items-center">
            <img className="w-full h-1/2 rounded-t-xl" src="banner.jpeg" alt="productImage" />
            <div className="flex flex-col text-xl p-2 justify-center items-left h-1/2">
              <p>Luckyme! Boné</p><br/>
              <div className="text-xl flex flex-row justify-between"><h5>R$50.00</h5><p className="text-4xl">&#x2606;</p></div>
            </div>
          </div>
          <div className="rounded-xl w-72 h-96 border-2 jusitfy-center items-center">
            <img className="w-full h-1/2 rounded-t-xl" src="banner2.jpeg" alt="productImage" />
            <div className="flex flex-col text-xl p-2 justify-center items-left h-1/2">
              <p>Luckyme! Boné</p><br/>
              <div className="text-xl flex flex-row justify-between"><h5>R$50.00</h5><p className="text-4xl">&#x2606;</p></div>
            </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}
