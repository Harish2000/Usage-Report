// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import axios from 'axios'
import Table from "./Table";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       Email:'',
       Seibel:'',
       BillingID:'',
       data:[],
       FromDate:'',
       ToDate:'',
  
       
    };
  }
//CRUD
// componentDidMount(){
//   axios.get('http://localhost:8000/send')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log("error");
//   })
// }
handleSubmit=(event)=>{
    event.preventDefault();
    var data={ 
        FromDate: this.state.FromDate,
        ToDate: this.state.ToDate,
        BillingID : this.state.BillingID
     };
     localStorage.setItem("data", JSON.stringify(data));
    // axios.post('http://localhost:8000/senddata',data)
    // .then(response =>{
    //   // console.log(data);
    //   let data1 = response;
    //     console.log(data1);
      
    // })
    // .catch(error =>{
    //   console.log("error");
    };
    // <Route path="/components/Table" component={Table} />;
    
  navigateToTable()
{
  
  window.location.href = "/Table";
  
}

  handleEmailChange = (event) =>{
    this.setState({
      Email : event.target.value
    })
  }
  handleSeibelChange = (event) =>{
    this.setState({
      Seibel : event.target.value
    })
  }
  handleBillingIDChange = (event) =>{
    this.setState({
      BillingID : event.target.value
    })
  }
  handleFromDateChange = (event) =>{
    this.setState({
      FromDate : event.target.value
    })
  }
  handleToDateChange = (event) =>{
    this.setState({
      ToDate : event.target.value
    })
  }
  // handleSubmit = (event) =>{
  //   alert(`${this.state.Email}`)
  // }
  
  render(){
  return (
    <div className="flex flex-row bg-black h-screen">
      <div className="flex flex-col m-auto text-white w-1/3">
        <div className="m-auto">
          <div className="pb-1 text-3xl font-bold">OpenText</div>
          <div className="text-xl">Usage-Report</div>
        </div>
      </div>
      <div className="flex w-2/3 pt-8 bg-black pl-36">
        <form className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
       {/*  <div><pre>{JSON.stringify(data1, null, 2) }</pre></div> */}
          {/* <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              value={this.state.Email}
              onChange={this.handleEmailChange}
            />
          </div> */}
          {/* <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="Seibel"
            >
              Seibel ticket
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Seibel Ticket"
              value={this.state.Seibel}
              onChange={this.handleSeibelChange}
            />
          </div> */}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="BillingID"
            >
              Billing-ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Billing-ID"
              value={this.state.BillingID}
              onChange={this.handleBillingIDChange}
            />
          </div>
                    <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="From Date"
            >
              From Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="MM-YYYY"
              value={this.state.FromDate}
              onChange={this.handleFromDateChange}
            />
          </div>
                              <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="To Date"
            >
              To Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="MM-YYYY"
              value={this.state.ToDate}
              onChange={this.handleToDateChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={(e) => {
                this.navigateToTable();}}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
}

export default App;
