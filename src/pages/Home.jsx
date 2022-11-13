import { Header } from '../components/home/header/Header'
import { AdditionalInfo } from '../components/home/additionalInfo/AdditionalInfo'
import { WhyUsePlatform } from '../components/home/whyUsePlatform/WhyUsePlatform'
import { StepPlatform } from '../components/home/stepPlatform/StepPlatform'
import { HowWorkQuery } from '../components/home/howWorkQuery/HowWorkQuery'
import { Footer } from '../components/home/footer/Footer'


export function Home() {
  return (
    <>
      <Header />
      <AdditionalInfo />
      <WhyUsePlatform />
      <StepPlatform />
      <HowWorkQuery />
      <Footer />
    </>
  )
}