import React from 'react'

import { Layout } from '../components/Layout'
import { MainHeader } from '../components/MainHeader'
import { MainContent } from '../components/MainContent'

export const MainPage = () => {
  return (
    <Layout>
      <MainHeader />
      <MainContent />
    </Layout>
  )
}
