export default function Home(){
  return(
    <section>
      <Testimonial />
    </section>
  ) 
}

function Testimonial(){
  return(
    <div>
      <h2>What everyone is saying</h2>
      <p>Trusted by professionals</p>
      <div>cards ...</div>
      <div>
        <p>
          Join professionals who trust BarelyHR for hiring and onboarding new employees.
        </p>
        <div>
          <a href="#">Get started &rarr;</a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <main className="">
      <div className="px-2 pt-2">
        <div className="bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#b060ff] rounded-[2rem] pt-16 pb-48 px-24" >
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <a href=""><span className="font-bold text-xl">🧣BarelyHR</span></a>
              <a href="#" className="flex gap-1 items-center rounded-full bg-fuchsia-950/35 text-sm/6 font-medium text-white px-3 py-0.5">BarelyHR raises $100M Series of A from Tailwind Ventures
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
              </a>
            </div>
            <div className="flex gap-8">
              <a className="text-base font-medium text-gray-950 " href="#">Features</a>
              <a className="text-base font-medium text-gray-950 " href="#">Pricing</a>
              <a className="text-base font-medium text-gray-950 " href="#">Login</a>
            </div>
          </nav>
          
          <div className="mt-40">
            <h1 className="text-9xl font-medium text-gray-950">Hire Smarter.</h1>
            <p className="text-xl/8 font-medium text-gray-950/75">BarelyHR helps small and large companies find the right person  for the right job.
            </p>
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
