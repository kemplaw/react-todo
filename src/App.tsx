import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css'
import AuthRoute from './components/AuthRoute'

const Login = lazy(() => import(/* webpackChunkName: "login-view" */ './pages/Login'))
const TodoContainer = lazy(
  () => import(/* webpackChunkName: "todo-container-view" */ './pages/Todo')
)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='header-wrapper'>header</header>
        <main>
          <Suspense fallback={<div>loading...</div>}>
            <BrowserRouter>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <AuthRoute path='/app'>
                  <TodoContainer />
                </AuthRoute>
                <Route path='/' exact>
                  <Redirect to='/app' />
                </Route>
              </Switch>
            </BrowserRouter>
          </Suspense>
        </main>
        <footer className='footer-wrapper'>footer</footer>
      </div>
    </Provider>
  )
}

export default App
