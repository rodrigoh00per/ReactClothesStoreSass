import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    /*  const { setCurrentUser } = this.props; */
    //this is a socket that listen the auth of user.
    /*   this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser({ authUser });
    }); */
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => {
              if (this.props.currentUser === null)
                return <SignInAndSignUpPage />;
              else if (
                this.props.currentUser.authUser !== null
              ) {
                return <Redirect to="/" />;
              } else return <SignInAndSignUpPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
