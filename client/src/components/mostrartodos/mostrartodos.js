import React, { Component } from "react";
import {Fichas} from "../../components/mostrartodos/fichas";
// import "./mostrartodos.css";


class MostrarTodos extends Component {

  


    // state = {
    //   search: "",
    //   results: []
    // };
  
    // // When this component mounts, search the Giphy API for pictures of kittens
    // componentDidMount() {
    //   this.searchGiphy("kittens");
    // }
  
    // searchGiphy = query => {
    //   API.search(query)
    //     .then(res => this.setState({ results: res.data.data }))
    //     .catch(err => console.log(err));
    // };
  
    // handleInputChange = event => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // };
  
    // // When the form is submitted, search the Giphy API for `this.state.search`
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   this.searchGiphy(this.state.search);
    // };
  
    render() {
      return (
   

       
      
    <Fichas>
        <div class="card">
        <img class="card-img-top" src=".../100px200/" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </Fichas> 
      


      );
    }
  }





export default MostrarTodos;


