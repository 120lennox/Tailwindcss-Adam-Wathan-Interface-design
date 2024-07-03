export default function Home() {
  return (
    <main className="">
      <div className="px-2 pt-2">
        <div className="bg-gradient-to-br from-[#FFF1BE] via-[#EEE87C] to-[#b060ff] rounded-[2rem] pt-16 pb-48 px-24" >
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <a href=""><span className="font-bold text-xl">🧣BarelyHR</span></a>
              <div className="rounded-full bg-fuchsia-950/35 text-sm/6 font-medium text-white px-3 py-0.5">BarelyHR raises $100M Series of A from Tailwind Ventures</div>
            </div>
            <div className="flex gap-8">
              <a className="text-base font-medium text-gray-950 " href="#">Features</a>
              <a className="text-base font-medium text-gray-950 " href="#">Pricing</a>
              <a className="text-base font-medium text-gray-950 " href="#">Login</a>
            </div>
          </nav>
          <div className="mt-40">
            <h1 className="text-9xl font-medium text-gray-950">Hire Smarter.</h1>
            <p className="text-xl/8 font-medium text-gray-950/75">BarelyHR helps small and large companies find the right person  for the right job.</p>
            <div className="mt-12 flex gap-6 items-center">
              <a className="py-3 px-4 rounded-full bg-gray-950 text-white  text-base/4 shadow-md" href="#">Get started</a>
              <a className="py-3 px-4 rounded-full bg-white/15 text-gray-950  text-base/4 shadow-md inset-shadow[0_0_2px_1px_#fffff4d] ring-[#D15052]/15"  href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
