import { Login, Main, Feed } from "./components";
import {
    Switch,
    Route,
    Redirect,

} from "react-router-dom";

export const Routes =
    <Switch>


        <Route exact path="/feed" component={Feed} />
        {/* //<Route exact path="/login" component={Login} /> */}

        <Route path="/" render={() => <Redirect to="/feed" />} />
    </Switch>


export const PrivateRoute = props => (
    <>

        {/* {
            true ? */}
                <Switch>
                    <>
                        <Route exact path="/" render={() => <Redirect to="/feed" />} />
                        <Route exact path="/" component={Main} />
                        <Route component={Feed} />
                    </>
                </Switch>
                {/* :
                <Switch>
                    <Route component={Login} />
                </Switch>
        } */}

    </>
)

// export const Routes = () =>
//     <Switch>
//         <Route path="/home" component={Home} />

//         <Route exact path='/category' component={Category} />
//         <Route exact path='/category/store' component={CategoryForm} />
//         <Route exact path='/category/store/:id' component={CategoryForm} />
//         <Route exact path='/category/restore' component={CategoryRestore} />

//         <Route exact path='/brand' component={Brand} />
//         <Route exact path='/brand/store' component={BrandForm} />
//         <Route exact path='/brand/store/:id' component={BrandForm} />
//         <Route exact path='/brand/restore' component={BrandRestore} />

//         <Route exact path='/product' component={Product} />
//         <Route exact path='/product/store' component={ProductForm} />
//         <Route exact path='/product/store/:id' component={ProductForm} />
//         <Route exact path='/product/restore' component={ProductRestore} />

//         <Route exact path='/order' component={Order} />
//         <Route exact path='/order/details/:id' component={OrderForm} />

//         <Route exact path='/user' component={User} />
//         <Route exact path='/user/details/:id' component={UserForm} />


//         {/* <Route path='/' component={Home} /> */}
//         <Route path="/" render={() => <Redirect to="/home" />} />

//     </Switch>
