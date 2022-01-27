import Hero from '../components/Home/Hero'
import { Fragment } from 'react'
import Header from '../components/About/Header'
import FAQ from '../components/FAQ/FAQ'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Header />
      <FAQ />
    </Fragment>
  )
}
