import React from  "react";
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import './App.css';
class Table extends React.Component
{
 constructor(props){
     super(props)
     this.state={
       data1:[]

     }
 }


componentDidMount(){
// var data=localStorage.getItem("data");
var data = JSON.parse(localStorage.getItem('data'))
// console.log(data.BillingID);
axios.post('http://localhost:8000/senddata',data)
    .then(response =>{
      // console.log(data);
      // var data1 = response;
      this.setState({data1 : response.data})
        // console.log(data1.data.rows[0][1]);
        console.log(this.state.data1.rows);
      
    })
    .catch(error =>{
      console.log(error);
    });
}


render(){
  return (
    <div>
      <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>

      <table class="border-separate border border-slate-400 ..." id="table-to-xls">
        <thead>
          <tr>
            {/* {this.state.data1.metaData?.map((item, index) => {
              return <th>{item[0]}</th>;
            })} */}
            <th class="border border-slate-300 ...">BILLINGID </th>
            <th class="border border-slate-300 ...">SENDER_NAME </th>
            <th class="border border-slate-300 ...">QUANTITY </th>
            <th class="border border-slate-300 ...">TRANSACTION_TYPE </th>
            <th class="border border-slate-300 ...">RECEIVER_NAME </th>
            <th class="border border-slate-300 ...">BILLABLE_ENTITY_NAME </th>
            <th class="border border-slate-300 ...">STATUS </th>
            <th class="border border-slate-300 ...">DATE_TIME </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data1.rows?.map((item, index) => {
            return (
              <tr>
                <td class="border border-slate-300 ...">{item[0]}</td>
                <td class="border border-slate-300 ...">{item[1]}</td>
                <td class="border border-slate-300 ...">{item[2]}</td>
                <td class="border border-slate-300 ...">{item[3]}</td>
                <td class="border border-slate-300 ...">{item[4]}</td>
                <td class="border border-slate-300 ...">{item[5]}</td>
                <td class="border border-slate-300 ...">{item[6]}</td>
                <td class="border border-slate-300 ...">{item[7]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  // <h1>{this.state.data1.metaData.name}</h1>
}
}



export default Table;