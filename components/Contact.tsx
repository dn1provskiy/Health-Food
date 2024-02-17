export default function Contact() {
  return (
    <div className="flex items-center justify-center min-w-75 w-full bg-contact max-md:px-3.5 max-1xMobile:py-10 py-29">
        <div className="w-[750px] flex flex-col text-center items-center">
            <h1 className="uppercase font-roboto font-medium text-primary opacity-70 leading-4.5 tracking-md mb-3.5">Contact</h1>
            <p className="font-philosopher font-bold text-contactSize leading-10 mb-11.5">Food Stalls with Persons but also specialized equipment, Skills to manage.</p>
            <div className="relative flex items-center w-full py-3.5 bg-white shadow-lg shadow-black/10 rounded-lg 1xMobile:pl-8 max-1xMobile:px-5 1xMobile:pr-[188px]">
                <input className="w-full font-roboto leading-10 text-black opacity-50 border-none outline-none" type="text" placeholder="Enter your message" />
                <button className="absolute max-1xMobile:hidden right-0 h-full bg-primary rounded-lg px-14 font-roboto font-medium text-lg leading-10 text-white">Send</button>
            </div>
            <button className="1xMobile:hidden max-1xMobile:mt-5 bg-primary rounded-lg py-2 px-20 font-roboto font-medium text-lg leading-10 text-white shadow-lg">Send</button>
        </div>
    </div>
  )
}
