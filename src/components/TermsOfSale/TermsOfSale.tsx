import React from 'react'
import { Section } from '../Section/Section'
import { ServicesAndProductsItem } from '../ServicesAndProductsItem/ServicesAndProductsItem'
const data = [
    'Сопровождение одобрения ипотеки, подготовка договоров.',
    'Использование программ господдержки, сельхозипотеки, материнского капитала, субсидии, оплата сертификатами, IT-ипотеки.'
]

export const TermsOfSale = () => {
  return (
    <Section  isContainer={true} idName='TermsOfSale'>
        <ServicesAndProductsItem title='Условия продажи' isReverse={false} data={data} IsTermOfSale={true}/>
    </Section>
  )
}
