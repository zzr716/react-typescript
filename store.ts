// Store负责Store实例化 => react-redux connect 
// createStore 生成一个store 参数  类似new Koa()
// compose 中间件合成 thunk 中间件 类似app.use() 合并成一个大中间件
// applyMiddleware 加中间件

import { Store, createStore, compose, applyMiddleware } from 'redux';
// dispatch 方法前 promise 异步化提交action
import reduxThunk from 'redux-thunk';
import { state, State } from './reducers';
export const store: Store<State> = createStore(
    state,
    // redux 中间件 koa 一样
    // appliMiddleware app.use()
    compose(
        applyMiddleware(reduxThunk)
    )
)