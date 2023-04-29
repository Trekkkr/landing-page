import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'

import { benefitOne, benefitTwo } from '../components/data'
import Benefits from '../components/benefits'
import Footer from '../components/footer'
import Cta from '../components/cta'
import Faq from '../components/faq'
import { Form } from '../components/Form'

const Home = () => {
  return (
    <>
      <Head>
        <title>Trekkkr - Landing page</title>
        <meta
          name='description'
          content='Trekkkr el sitio web que ayuda a conectar senderistas con otros senderistas alrededor del mundo, donde puedes unirte a otras caminatas, crear tus propios eventos, elegir si son publicos o solo para tus amigos'
        />
        <link rel='icon' href='/favicon.jpg' />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        id='¿Qué es Trekkkr?'
        pretitle='Conocenos'
        title='¿Qué es Trekkkr?'
      >
        Una plataforma digital que busca eliminar la desorganización y dificultad en los procesos tradicionales de las agencias y grupos de facebook para crear, organizar y reservar viajes en el senderismo
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos='right' data={benefitTwo} />
      <SectionTitle
        id='FAQ'
        pretitle='FAQ'
        title='Frequently Asked Questions'
      >
        Conoce las preguntas más frecuentes que hemos recibido de la comunidad. Si tienes alguna pregunta o alguna idea que pueda mejorar Trekkkr, escribenos en el formulario de abajo
      </SectionTitle>
      <Faq />
      <SectionTitle
        id='waitlist'
        pretitle='waitlist'
        title='Mantente informado'
      >
        Llena el siguiente formulario para mantenerte al tanto de nuestra fecha de lanzamiento e información importante de nuestro progreso
      </SectionTitle>
      <Form />
      <Footer />
    </>
  )
}

export default Home
