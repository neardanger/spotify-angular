import{provideRouter, RouterConfig} from '@angular/router'
import{SearchComponent} from  './components/search/search.component.ts'
import{AboutComponent} from './components/about/about.component.ts'

const routes: RouterConfig= [
    {path:'',component:SearchComponent},
    {path:'about',component:AboutComponent}

]

export const appRouterProviders=[
    provideRouter(routes)
]