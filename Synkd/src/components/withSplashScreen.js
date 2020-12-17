import React, {Component} from 'react';
import '../components/Splash.css';
import img1 from "../images/synkd_logo.png"

var phone;
var token;

function LoadingMessage() {
  return (
    <div className="splash-screen">
        <img alt="Synk'd" src={img1} style={{ width: "230px", height: "200px" }}></img>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      //phone = JSON.parse(localStorage.getItem('myData'))
      token = JSON.parse(localStorage.getItem('token'))
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
           if(token !== '')
           // window.location.href = "/VHome"
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2000) 
    }

    render() {
        //console.log(phone)
        //console.log(token)
      // while checking user session, show "loading" message
      if (this.state.loading) 
      return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;