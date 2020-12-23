import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Login = lazy(() => import(/* webpackChunkName: "login-view" */ './pages/Login'))
const TodoContainer = lazy(() => import(/* webpackChunkName: "todo-view" */ './pages/Todo'))

function App() {
  return (
    <div className='App'>
      <header className='header-wrapper'>header</header>
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <BrowserRouter>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/app'>
                <TodoContainer />
              </Route>

              <Route path='/' exact>
                <Redirect to='/app' />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </main>
      <footer className='footer-wrapper'>footer</footer>
    </div>
  )
}

export default App
