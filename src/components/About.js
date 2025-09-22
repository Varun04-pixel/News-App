import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2 className="mb-4 text-center">About News Wars</h2>
        <div className="container border border-dark rounded p-4 w-75">
            <p>
                Welcome to <strong>News Wars</strong> -A simple application for 
                the latest headlines, breaking news, and in-depth stories from around the world.  
                bringing you real-time updates on technology, business, sports, health, 
                entertainment, and more.
            </p>
            <p>
                Whether you are a casual reader or someone who follows global events 
                closely, <strong>News Wars</strong> helps you stay informed with the most 
                relevant stories, tailored to your interests.
            </p>
            <p>
                This project is built using <strong>React</strong> and powered by 
                the <strong>NewsAPI</strong> to fetch live articles from trusted sources.
            </p>
            <p className="text-center text-success mt-4">
                Thank you for visiting <strong>News Wars</strong>. We hope you find it informative and engaging!
            </p>
        </div>
      </div>
    );
  }
}

export default About;
