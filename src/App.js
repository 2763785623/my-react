//引入 antd样式
import 'antd/dist/antd.css'
import './App.css';
import React from 'react'
import { 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'
import { adminRoutes } from './routes'
import Fream from './components/Fream/Index'

function App() {
  return (
    <Fream>
      <h1>我是App组件</h1>
      <Switch>
        {
          adminRoutes.map(route => {
            return (
            <Route 
              key={route.path} 
              path={route.path} 
              exact={route.exact} 
              render={routeProps => {
                return <route.component {...routeProps} />
              }} />
            );
          })
        }
        <Redirect to="/404" />
      </Switch>
    </Fream>
  );
}

export default App;
