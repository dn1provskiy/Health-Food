import { MenuCards } from "./MenuCards";

export default function Menu() {
  return (
    <div className="flex flex-col items-center min-w-75 max-w-[1140px] mx-auto max-1xl:px-3.5">
      <div className="max-w-[748px] text-center">
        <h1 className="uppercase font-roboto font-medium text-menuColor leading-6 tracking-md max-mobile:mb-4 mb-2.4">Menu</h1>
        <span className="font-philosopher font-bold text-menu leading-6 mb-5">Food Full of treaty Love</span>
        <p className="font-roboto leading-6 mt-6.5 opacity-70">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
      </div>
      <MenuCards />
    </div>
  );
}