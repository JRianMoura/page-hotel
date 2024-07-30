"use client";
import Link from "next/link";
import Sociais from "./Sociais";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row items-center bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            {/* logo e texto */}
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <h4>Mari's Hotel</h4>
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sint accusamus cupiditate maiores illo iure animi
                odit maxime. Eligendi, dolorem.
              </p>
            </div>
            {/* navegação e contato */}
            <div className="flex gap-12 xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h2 mb-6">Navegação</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Procurar Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">Sobre</Link>
                  </li>
                  <li>
                    <Link href="/">Contatos</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="h2 mb-6">Contatos</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>(61) 91234-5678</li>
                  <li>info@marishotel.com</li>
                  <li>marishotel.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        {/* copyright */}
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2024. Todos os direitos reservados.
          </p>
          <Sociais containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
