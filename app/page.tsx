import Image from "next/image";
import Link from "next/link";
import Steam from "@/assets/img/steam.svg";
import Logo from "@/assets/img/Logo.svg";
import Case from "@/assets/img/case.png";
import AK74 from "@/assets/img/AK-74.png"
import News from "@/assets/img/news.png";
import SrceenshotCS from "@/assets/img/screenshot-cs.png";
import Screensgot from "@/assets/img/screenshot-1.png";

export default function Home() {
  return (
    <>
      <div className="main-img w-screen h-[520px] bg-cover bg-center overflow-hidden bg-no-repeat max-w-full md:bg-top md:w-full">
        <header className="flex justify-between items-center absolute left-0 right-0 top-0 ">
          <div className="flex justify-between items-center">
            <Image alt="LOGO" width={180} height={64} src={Logo} className="w-[80px] h-auto lg:w-[180px] md:w-[140px] sm:w-[100px]"></Image>
            <button type="button" className="bg-[#4777B0] flex justify-between items-center rounded-[6px] px-[6px] py-[1px] md:px-3 md:py-0.5">
              <Image alt="steam" width={28} src={Steam} className="w-[16px] h-auto lg:w-[28px] md:w-[20px] my-0.5 mr-1.5"></Image>
              <h1 className="text-[10px] font-normal md:text-[16px] md:font-semibold">Graj za darmo</h1>
            </button>
          </div>
          <nav className="flex justify-between items-center mr-[10px] lg:mr-[60px] md:mr-[30px]">
            <Link
              className={`text-[10px] font-medium py-[3px] px-[4px] mr-[8px] md:mr-[30px] md:text-[18px] md:font-semibold transition-all delay-100 duration-300 relative overflow-hidden hover:text-[#080929] group `}
              href={'/'}>
              NOWOŚCI
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#080929] origin-left rounded transform-all scale-x-0 transition-transform delay-100 duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              className={`text-[10px] font-medium py-[3px] px-[4px] mr-[8px] md:mr-[30px] md:text-[18px] md:font-semibold transition-all delay-100 duration-300 relative overflow-hidden hover:text-[#080929] group `}
              href={'/'}>
              CASES
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#080929] origin-left rounded transform-all scale-x-0 transition-transform delay-100 duration-300 group-hover:scale-x-100"></div>
            </Link>
            <Link
              className={`text-[10px] font-medium py-[3px] px-[4px] mr-[8px] md:mr-[30px] md:text-[18px] md:font-semibold transition-all delay-100 duration-300 relative overflow-hidden hover:text-[#080929] group `}
              href={'/'}>
              O GRZE
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#080929] origin-left rounded transform-all scale-x-0 transition-transform delay-100 duration-300 group-hover:scale-x-100"></div>
            </Link>
          </nav>
        </header>
      </div>

      <main className="flex flex-col justify-center items-center text-center mt-[10px] md:mt-[20px]">
        <h1 className="text-[28px] font-semibold md:font-bold md:text-[38px]">Nasze usługi</h1>
        <div className="grid grid-cols-1 gap-x-0 gap-y-[38px] mt-[36px] md:mt-[54px] xl:gap-x-[62px] lg:grid-cols-4 lg:gap-x-[32px] lg:gap-y-0 md:gap-x-[48px] md:gap-y-[28px] md:grid-cols-2 ">
          <Link href={'/'} className="flex flex-col justify-between items-center bg-[#161741] w-[240px] h-[190px] px-[2px] py-[6px] rounded-xl shadow-none transition-all delay-100 duration-200 ease-in hover:scale-105 hover:shadow-[0_2px_30px_4px_rgba(0,0,0,0.40)] hover:shadow-[#DD8727]">
            <Image alt="case" width={190} height={140} src={Case}></Image>
            <h2 className="text-[20px] font-semibold">CASES</h2>
          </Link>
          <Link href={'/'} className="flex flex-col justify-between items-center bg-[#161741] w-[240px] h-[190px] px-[2px] py-[6px] rounded-xl shadow-none transition-all delay-100 duration-200 ease-in hover:scale-105 hover:shadow-[0_2px_30px_4px_rgba(0,0,0,0.40)] hover:shadow-[#DD8727]">
            <Image alt="case" width={190} height={140} src={AK74}></Image>
            <h2 className="text-[20px] font-semibold">NEWS SKIN</h2>
          </Link>
          <Link href={'/'} className="flex flex-col justify-between items-center bg-[#161741] w-[240px] h-[190px] px-[2px] py-[6px] rounded-xl shadow-none transition-all delay-100 duration-200 ease-in hover:scale-105 hover:shadow-[0_2px_30px_4px_rgba(0,0,0,0.40)] hover:shadow-[#DD8727]">
            <Image alt="case" width={270} height={140} src={News}></Image>
            <h2 className="text-[20px] font-semibold">NOWOŚCI</h2>
          </Link>
          <Link href={'/'} className="flex flex-col justify-between items-center bg-[#161741] w-[240px] h-[190px] px-[2px] py-[6px] rounded-xl shadow-none transition-all delay-100 duration-200 ease-in hover:scale-105 hover:shadow-[0_2px_30px_4px_rgba(0,0,0,0.40)] hover:shadow-[#DD8727]">
            <Image alt="case" width={190} height={140} src={SrceenshotCS}></Image>
            <h2 className="text-[20px] font-semibold">AIM MAP</h2>
          </Link>
        </div>
      </main>
      <section className="img-2 flex flex-col justify-between items-center w-screen mt-[58px] h-[570px] bg-no-repeat overflow-hidden bg-bottom bg-origin-padding bg-cover max-w-full md:w-full md:mt-[128px] md:">
        <div className="flex flex-col justify-start items-start mx-4 mt-8 md:mt-10 md:items-center ">
          <h1 className="text-[28px] font-extrabold lg:text-[48px] md:text-[38px]">Zaktualizuj stare mapy i dodaj nowe.</h1>
          <h2 className="text-[20px] font-light mt-3 md:text-[24px] md:font-medium">Dodanie nowych efektów i dźwięków do strzelanki.</h2>
          <h2 className="text-[20px] font-extralight mt-2 md:text-[24px] md:font-light">Optymalizacja gry i poprawa kontroli nad grą.</h2>
        </div>
        <button type="button" className="flex items-center bg-[#EE9F51] font-semibold text-[24px] text-center rounded-xl px-8 py-0.5 mb-[90px] shadow-[0_1px_32px_14px_rgba(0,0,0,0.40)] transition-all duration-150 ease-out delay-200 hover:scale-105 hover:shadow-[0_1px_40px_20px_rgba(0,0,0,0.40)] hover:bg-[#C87100] focus:bg-[#B05C00] focus:scale-105 focus:shadow-[0_1px_40px_20px_rgba(0,0,0,0.40)] md:text-[24px] md:px-10 md:py-1 md:mb-[120px]">Czytaj więcej</button>
      </section>
      <section className="flex flex-col justify-start items-center py-8 w-screen max-w-full md:w-full md:py-10">
        <div className="flex flex-col justify-start items-start mt-[10px] mx-4 md:items-center">
          <h1 className="text-[28px] font-extrabold lg:text-[48px] md:text-[32px]">Gar jest już dostępna, zacznij grać już teraz.</h1>
          <h2 className="text-[20px] font-light mt-3 md:text-[24px] md:font-medium">Pobierz grę z oficjalnej platformy Steam, aby grać bezpiecznie. </h2>
          <h2 className="text-[18px] font-extralight mt-2 md:text-[18px] md:font-light">Dołącz do nas i zacznij grać w nowy sposób.</h2>
        </div>
        <Image alt="Screenshot" src={Screensgot} className="bg-center bg-origin-padding bg-cover mx-4 mt-[78px]"></Image>
        <button type="button" className="flex items-center bg-[#E48715] font-semibold text-[24px] text-center rounded-xl px-10 py-0.5 mt-[44px] shadow-[#6F6F94] shadow-[0_1px_28px_4px_rgba(0,0,0,0.40)] transition-all duration-150 ease-out delay-200 hover:scale-105 hover:shadow-[#6F6F94] hover:shadow-[0_1px_32px_6px_rgba(0,0,0,0.40)] hover:bg-[#B05C00] focus:bg-[#954A00] focus:scale-105 focus:shadow-[#6F6F94] focus:shadow-[0_1px_32px_6px_rgba(0,0,0,0.40)] md:px-14 md:py-1 md:mt-[64px] md:font-bold md:text-[28px]">Zagraj teraz</button>
      </section>
      <section className="flex flex-col justify-start items-center bg-[#F4F4F4] pt-9 pb-14 md:pb-20">
        <h1 className="text-[#080929] text-[26px] font-semibold lg:text-[42px] lg:font-extrabold md:text-[32px] md:font-bold">Napisz do nas</h1>
        <div className="flex flex-col justify-start items-center w-full lg:flex-row lg:justify-evenly lg:items-start">
          <div className="flex flex-col justify-center items-center text-[#080929]">
            <div className="w-full relative pt-[15px] mt-[10px]">
              <input type="text" name="name"
                className="from__field bg-transparent w-full border-b-[3px] border-[#080929] outline-none px-[7px] py-[4px] text-[#080929] text-xl" placeholder="Email" id="Email" required></input>
              <label className="from__label top-0 left-[10px] absolute block text-color2_2 transition-[0.2s]">Imię</label>
            </div>
            <div className="w-full relative pt-[15px] mt-[10px]">
              <input type="email" name="email"
                className="from__field bg-transparent w-full border-b-[3px] border-[#080929] outline-none px-[7px] py-[4px] text-[#080929] text-xl" placeholder="Email" id="Email" required></input>
              <label className="from__label top-0 left-[10px] absolute block text-color2_2 transition-[0.2s]">Email</label>
            </div>
            <div className="w-full relative pt-[15px] mt-[40px]">
              <label className="top-[-10px] left-[10px] text-[16px] font-medium text-[#080929] absolute block text-color2_2 transition-[0.2s]">Treść wiadomości</label>
              <textarea className="w-full h-40 resize-none bg-transparent px-4 py-1 border-[#080929] border-[3px] outline-none"></textarea>
            </div>
            <button className="bg-[#473491] px-12 py-1 rounded-md text-[#F3F3F3] text-[18px] font-semibold mt-3 shadow-[0_1px_8px_2px_rgba(0,0,0,0.40)] shadow-black transition-all duration-150 ease-out delay-200 hover:scale-105 hover:shadow-[0_1px_14px_2px_rgba(0,0,0,0.30)] hover:shadow-black hover:bg-[#2A196E]">WYŚLIJ DANE</button>
          </div>
          <div className="flex flex-col justify-start text-center text-[#080929] mt-10 lg:mt-6">
            <h1 className="text-[24px] font-semibold text-[#868686]">Pavlo Satsyk</h1>
            <h3 className="text-[18px] font-light">ul.   -----</h3>
            <h3 className="text-[18px] font-light">tel. -------</h3>
            <h3 className="text-[18px] font-light">email: -----</h3>
          </div>
        </div>
      </section>
      <footer className="w-full flex justify-end items-center bg-[#E48715] py-1 md:py-2">
        <h1 className="text-[10px] font-light text-[#080929] mr-6 md:mr-8 md:text-[12px]"> ©Pavlo Satsyk</h1>
      </footer>
    </>
  );
}
