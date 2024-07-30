"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const hotelData = [
  {
    image: "/find/hotel-1.png",
    name: "Hotel de Luna",
    location: "Ceará",
  },
  {
    image: "/find/hotel-2.png",
    name: "Ina Tretes Hotel",
    location: "Fortaleza",
  },
  {
    image: "/find/hotel-3.png",
    name: "Delight Hotel",
    location: "Alagoas",
  },
  {
    image: "/find/hotel-4.png",
    name: "Mercusar Hotel",
    location: "Bahia",
  },
];

const Find = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="py-12 xl:py-36"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 mb-6">Encontre o melhor hotel</h2>
          <p className="max-w-[638px] mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            sapiente rem nam, illo saepe molestiae pariatur ipsam voluptate
            maiores facere.
          </p>
          <div>
            <Button variant="accent" className="px-12 mb-14 xl:mb-28">
              Ver tudo
            </Button>
          </div>
        </div>
        <div className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
          {hotelData.map((hotel, index) => {
            return (
              <div
                className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
                key={index}
              >
                <Image src={hotel.image} width={270} height={270} alt="" />
                <div className="p-6 ">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Find;
