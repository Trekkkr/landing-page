import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-[#ec5153]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Cuánto costará Trekkkr?",
    answer: "Trekkkr aún no tiene definido su modelo de negocios final, sin embargo estamos analizando 2 opciones: modelo SaaS o comisión por transacción generada dentro de la plataforma",
  },
  {
    question: "¿Son una agencia de viajes más?",
    answer: "No, nuestra idea es ser un aliado para agencias, guías independientes y senderistas. Nuestro objetivo es unir todas las partes para crear una mejor experiencia de usuario y facilitar los procesos entre estas 3 piezas",
  },
  {
    question: "¿En que estapa se encuentran?",
    answer:
      "Actualmente estamos en la fase de validación del mercado, necesitamos confirmar que resolveremos un problema real y si hay personas dispuestas a pagar por nuestros servicios",
  },
  {
    question: "¿Cuándo será su lanzamiento?",
    answer:
      "El roadmap esta planeado para que el 31 de mayo lancemos nuestra primer versión, sin embargo puede haber cambios",
  },
  {
    question: "¿Para qué es la waitlist?",
    answer:
      "La waitlist es uno de nuestro puntos de validación del mercado y el medio de contacto con la comunidad. Será la forma en como te mantendremos informado de nuestro progreso y la fecha exacta del lanzamiento",
  },
  {
    question: "¿Qué gano al registrarme a la waitlist?",
    answer:
      "A todos los early adopters les daremos periodos de prueba gratuitos, insignias especiales como muestra de agradecimiento que en futuro les dará beneficios especiales y prioridad para considerar propuestas de nuevas funcionalidades o mejoras",
  },
];

export default Faq;