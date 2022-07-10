import { MainPage, ProgrammPage, AboutPage } from './pages'
import { MAIN_ROUTE, PROGRAMM_ROUTE, ABOUT_ROUTE } from './utils/consts'

export const routes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: PROGRAMM_ROUTE,
    element: <ProgrammPage />,
  },
  {
    path: ABOUT_ROUTE,
    element: <AboutPage />,
  },
]
