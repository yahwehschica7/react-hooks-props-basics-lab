import React from "react";
import user from "../data/user";
import Links from "./Links"

function About(props) {
  
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
        <div>
         { props.bio ? <p>{props.bio}</p> : null }
         
        </div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.links.linkedin}
             github={props.links.github} />
    </div>
  );
}

export default About;
