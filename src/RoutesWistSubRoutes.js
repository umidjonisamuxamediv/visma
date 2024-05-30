import React from 'react'
import {Routes,Route} from 'react-router-dom'
import BaysicLayout from './components/Layout/BaysicLayout'
import Glavniy from './components/Glavni/Glavniy'
import Kontent from './components/kontent/Kontent'
import Zayafka from './components/Zayafka/Zayafka'
const RoutesWistSubRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={
      <BaysicLayout>
        <Glavniy/>
      </BaysicLayout>} />
      <Route path='новости' element={
      <BaysicLayout>
       <Kontent/>
      </BaysicLayout>} />
      <Route path='новости/Заявка' element={
      <BaysicLayout>
       <Zayafka/>
      </BaysicLayout>} />
    </Routes>
  )
}

export default RoutesWistSubRoutes
