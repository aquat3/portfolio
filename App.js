import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
    <div className='navBar'>
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Experience</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
        </ul>
      
      
      </div>
      
      
    )};
  
}

class Hero extends React.Component {
  render() {
    return (
      <div className='hero'>
    
        <h1>Self-teaching the way of computers and visual effects all the while having fun on the way.</h1>
      <svg className="chevronDown" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </div>
    );
  }
}

class Home extends React.Component{
   render(){
    return(
      <div className='home'>
          <Nav/>
        <Hero/>
        </div>
      );
   }
}

 

     class AboutLeft extends React.Component{
  render(){
  return(
    <div className='aboutLeft'>
   
    <img  src='https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
     
  </div>
  );
}
     }



     class AboutRight extends React.Component{
  render(){
  return(
    <div className='aboutRight'>
    
      <div class='bio'>
        
      <ScrollAnimation animateIn='slideInRight' duration={0.3}>
        <p>Hello World, my name is Tofik Mahdi. I am a senior at the Univeristy of 
          Maryland graduating fall 2019.I love the internet and I plan on 
          leaving a digital footprint in it.</p></ScrollAnimation >
        
        <ScrollAnimation animateIn='slideInLeft' duration={0.3}><p>I started coding since i was 17 but I eventually picked up web development 
          a couple years later after being curious as to how websites work and
           i fell in love. After discovering web dev i realized this is  all i wanted 
           to do for my career.</p></ScrollAnimation >
        <ScrollAnimation animateIn='slideInRight' duration={0.3}> <p>My skills are currently more geared towards front end but i plan on picking up back end tools in the future. I will take a course on back end development with php and mysql this fall so ill have some knowledge by the time i graduate.</p>
        </ScrollAnimation >
        </div>
    
  </div>
  );
}
     }


class About extends React.Component{
  
   render(){
    return(
    <div className='about-wrap'>
         
           <AboutLeft/>
        <AboutRight/>
      </div>
    
    )
   }
  
}


class Skills extends React.Component{
  constructor(props){
    super(props);
    this.state={
      iconLabel:{'display':'none'},iconShow:{opacity:0.7}
    }
   this.handleHover=this.handleHover.bind(this);
  this.handleLeave=this.handleLeave.bind(this);
  }
 
  handleHover(){
    //this.setState({iconLabel:{'display':'block'},iconShow:{opacity:1}})
  }
  
  handleLeave(){
     //this.setState({iconLabel:{'display':'none'},iconShow:{opacity:0.7}})
  }
   render(){
    return(
    <div className='skills'>
      <ul className="tools">
        <li><img //onMouseEnter={this.handleHover} 
      //onMouseLeave=  {this.handleLeave}      
             // style={this.state.iconShow} 
              className='toolIcon' src='https://caleb-ellis.github.io/assets/img/html5.svg'/>
          <p   //style={this.state.iconLabel}
          >HTML5</p>
        </li>
        <li><img 
              //onMouseEnter={this.handleHover} 
     // onMouseLeave=  {this.handleLeave}      
             // style={this.state.iconShow} 
              className='toolIcon' src='https://caleb-ellis.github.io/assets/img/css3.svg'/>
          <p //style={this.state.iconLabel}
          >CSS3</p>
        </li>
         <li><img className='toolIcon' src='https://caleb-ellis.github.io/assets/img/js.png'/>
           <p>JavaScript</p>
           </li>
         <li><img className='toolIcon' src='https://caleb-ellis.github.io/assets/img/jquery.svg'/>
         <p>jQuery</p>
         </li>
         <li><img className='toolIcon' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'/>
         <p>React</p>
         </li>
         <li><img className='toolIcon' src='https://pngimg.com/uploads/mysql/mysql_PNG9.png'/>
         <p>MySQL</p>
         </li>
              </ul>
    </div>
    );
    
  }
  
  
}


class Experience extends React.Component{
  
 
   render(){
    return(
    <div className='experience'>
        <div className='exp'>
        <img src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397200679/0b7dc65611a21bbd74ccd6c3ae406de6.png'/>
          <p className='exp-desc q'>While at agencyQ i learned how to work in an agile environment and was involved in redesigning the company homepage using the hubspot  cms, and i also assisten other front end developers with their projects via pair programming.</p>
        </div>  
         <div className='exp'>
        
        <a > <img className='mida' src='https://midamedical.org/static/media/logo.8b7d81c0.png'/>
          <span className='midamed'> MIDA</span> </a> <p className='exp-desc'>While at mida i helped modify the company website written in react, wrote some unit tests, and i helped design a user based database system for the website.</p>
        </div>  
    </div>
    );
    
  }
  
  
}
class Projects extends React.Component{
  
 
   render(){
    return(
    <div className='projects'>
        <div className='proj calc'>
<div className='proj-desc'>
  <div className='proj-desc-name'>
  <h3>jQuery Calculator</h3>
  <hr/>
  <img 
             src='https://caleb-ellis.github.io/assets/img/html5.svg'/>
             <img 
             src='https://caleb-ellis.github.io/assets/img/css3.svg'/>
               <img 
             src='https://caleb-ellis.github.io/assets/img/jquery.svg'/>
  </div>
</div>
        </div>
         <div className='proj tic'></div>
        <div className='proj calc'></div>
         <div className='proj tic'></div>
    </div>
    );
    
  }
  
  
}


class Footer extends React.Component{
  
 
   render(){
    return(
    <div className='footer'>
        <ul className='leftFoot'>
           
          <li><h3>Contact</h3>
             
</li>
          <li className='cont'>
          <a className='phone'>240-704-2290</a>
          <a className='email'>aquat3@gmail.com</a>
          </li>
            <li className='copyright'>Copyright © Tofik Mahdi 2019
</li>
        </ul>  
         <ul className='rightFoot'>
        <li><h3>Social Media</h3>
</li>
           <li className='socialIcons'>
           
           <img src='https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-White-Large.png'/>
            <img src='https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg'/>
              <img src='https://www.ers-inc.com/wp-content/uploads/2016/09/linkedin-3-512.png'/>
              <img src=''/>
           </li>
        </ul>
    </div>
    );
    
  }
  
  
}




class Portfolio extends React.Component{
  
 
   render(){
    return(
    <div>
         <Home/>
        <h2>About Me</h2>
       <About/>
        <h2>Skills</h2>
        <Skills/>
        <h2>Experience</h2>
        <Experience/>
        <h2>Projects</h2>
        <Projects/>
        <Footer/>
    </div>
    );
    
  }
  
  
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));

 
