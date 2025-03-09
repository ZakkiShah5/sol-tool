import Header from "@/component/Header";
import Banner from "../component/Banner";
import TokenForm from "@/component/TokenForm";

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <section className="max-w-6xl py-3 px-2 mx-auto">
        <div className="flex justify-between items-center">
          <div></div>
          <button className="text-[#02CCE6] border-[#02CCE6] border rounded px-2 py-1 cursor-pointer">Priority Fees</button>
        </div>

        <div className="text-center"> 
          <h1 className="gradient-text text-6xl font-bold font-[DM_Sans]">Solana Token Creator</h1>
          <p>Easily Create your own Solana SPL Token in just 7+1 steps without Coding.</p>
        </div>
     </section>
     <TokenForm />
    </>
  );
}
