export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Form}/>
    <Route path="demo" component={Weather}/>
  </Route>
</Router>
