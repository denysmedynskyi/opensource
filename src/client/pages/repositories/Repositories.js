import React from 'react'
import { Route, Redirect, NavLink, Switch } from 'react-router-dom'
import New from '~/pages/new-repositories/NewRepositories'
import store from '~/store/store'
import Popular from '~/pages/popular-repositories/PopularRepositories'
import Trending from '~/pages/trending-repositories/TrendingRepositories'
import ByLanguage from '~/pages/repositories-by-language/RepositoriesByLanguage'
import SubNavLink from '~/components/sub-nav-link/SubNavLink'

const Repositories = (props) => (
  <div>
    <div className="row center-align">
      <SubNavLink to="/repositories/popular">Popular</SubNavLink>
      <SubNavLink to="/repositories/new">New</SubNavLink>
    </div>
    <Route exact path="/repositories" render={() => <Redirect to="/repositories/popular" />} />
    <Switch>
      <Route path="/repositories/popular" component={Popular} />
      <Route path="/repositories/new" component={New} />
      <Route path="/repositories/:language" component={ByLanguage} />
    </Switch>
  </div>
)

export default Repositories
