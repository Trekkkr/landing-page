import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CreditCardIcon,
  AdjustmentsHorizontalIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UsersIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/images/benefit-one.png";
import benefitTwoImg from "../public/images/benefit-two.png";

const benefitOne = {
  title: "¿Cómo lo haremos?",
  desc: "Estos son algunos de las soluciones que Trekkkr ofrecerá a los senderistas, guías independientes y agencias:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Conoce nuevos senderistas",
      desc: "No importa donde te encuentres, en Trekkkr podras unirte a eventos públicos y privados con otros senderistas",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Controla quien accede a tus eventos",
      desc: "Elige si tus eventos son públicos o exclusivamente para tus amigos dentro de la comunidad Trekkkr",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Camina únicamente con personas de tu interés",
      desc: "Controla si tus eventos son solo para mujeres, hombres, grupos mixtos y el nivel mínimo de experiencia y condición física para acceder a tus eventos",
      icon: <UsersIcon />,
    },
    {
      title: "Mide y mejora tu nivel de experiencia",
      desc: "Evalua a tus compañeros y guías de viaje. Accede a recomendaciones de senderistas experimentados para mejorar tu nivel de experiencia",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Otros beneficios",
  desc: "Monetiza y disfruta tu pasión sin complicaciones",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Accede a eventos exclusivos de Trekkkr",
      desc: "Recibe invitaciones a eventos exclusivos con senderistas profesionales de acuerdo a tu nivel de experiencia",
      icon: <LockClosedIcon />,
    },
    {
      title: "Monetiza tus viajes",
      desc: "Tu decides si tus eventos son gratuitos o de pago. Acepta pagos en efectivo u online y transfiere las ganancias a tu cuenta bancaria fácilmente",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Acepta anticipos",
      desc: "Controla si tus eventos de pago requieren anticipos para reservar un lugar en tu evento",
      icon: <CreditCardIcon />,
    },
    {
      title: "Garantiza la seguridad en tus aventuras",
      desc: "Reporta actos indebidos que pongan en riesgo tu integridad y la de tus compañeros en cada uno de tus eventos",
      icon: <ShieldCheckIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
