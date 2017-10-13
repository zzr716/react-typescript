// 路由接管spa
import * as React from 'react';
// react-router new VueRouter()
// Router 路由总对象 Route 路由规则 path=> component
// IndexRoute 根路由 / /about 子路由 根子路由
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// 应用由路由接管 App根组件 和路由混
import { App } from './app';
import { About, MembersPageContainer, MemberPageContainer } from './components';
import { store } from './store';
// 将store交给路由组件
// react-redux是联结器
import { Provider } from 'react-redux';
// store进入组件由Provider包装Router开始
export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={About}/>
                    <Route path="/about" component={About}/>
                    <Route path="/members" component={MembersPageContainer}/>
                    <Route path="/member" component={MemberPageContainer}/>     
                    <Route path="/member/:id" component={MemberPageContainer}/>
                </Route>
            </Router>
        </Provider>
    );
}
// 路由member表单添加 edit add restful 资源   
// 要add/edit/delete等 这都属于restful的action