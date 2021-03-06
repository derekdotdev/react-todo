import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import { ErrorComponent } from './ErrorComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)

        const WelcomeComponentWithParams = withParams(WelcomeComponent)

        const HeaderComponentWithNavigation = withNavigation(HeaderComponent)

        const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent)

        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent))
        
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/> 
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />

                        {/* //<AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>  //REACT-5 */}
                        <Route path="/welcome/:name" element={
                            <AuthenticatedRoute>
                                <WelcomeComponentWithParams />
                            </AuthenticatedRoute>
                        } />

                        <Route path="/todos/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponentWithParamsAndNavigation />
                            </AuthenticatedRoute>
                        }/>
                        
                        {/* //<AuthenticatedRoute path="/todos" component={ListTodosComponent}/>  //REACT-5 */}
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponentWithNavigation />
                            </AuthenticatedRoute>
                        } />

                        {/* //<AuthenticatedRoute path="/logout" component={LogoutComponent}/>  //REACT-5 */}
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp