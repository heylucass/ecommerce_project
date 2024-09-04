export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      {/* Navigaion bar */}
      <div className=" h-16 flex flex-row fixed invisible invert hover:invert-0 hover:visible opacity-40 hover:opacity-100 top-0 justify-around bg-slate-50 items-center rounded-b-xl p-4 ">
        <div className="visible"><img className=" h-20 w-40 p-2" src="logo.jpg" alt="Logo"/></div>
        <div className=" visible flex flex-row h-full items-center">
          <div className="mx-10 p-4 cursor-pointer rounded-xl ring:bg-slate-100 hover:bg-slate-200 focus:bg-slate-100">Carinho</div>
          <div className="p-4 cursor-pointer rounded-xl ring:bg-slate-100 hover:bg-slate-200 focus:bg-slate-100">Perfil</div>
        </div>
      </div>

      {/* Main Banner */}
      <div className="bg-slate-500 w-full h-screen static"><img className="z-10 w-full h-full" src="banner.jpeg" alt="placeholder" /><div className="z-20 absolute bottom-72 left-12 text-8xl italic antialised font-serif text-slate-50 tracking-wider font-bold">Lucky me! I see Angels</div></div>

      {/* Section Products */}
      <div className="flex flex-row w-full justify-evenly items-center mt-8">
        <div><img  src="royalblue.jpeg" alt="bannerSection"/></div>
        <div className="text-xl w-96 h-48 subpixel-antialised tracking-wide text-center text-wrap align-middle line-clamp-1 items-center"><b>Saint Levon</b> é uma marca Brasileira, com foco no streetwear, <b className="underline">pensada e criada nas ruas sob a influencia dos céus!</b><br/> <b className="underline decoration">Siga nos</b></div>
      </div>
    </main>
  );
}
