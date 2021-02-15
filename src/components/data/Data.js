import React,{Component} from "react"
import axios from "axios"
import "./data.css"
import {index} from "../../../web/index.html"

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmY2UyOWIxNzgyMWI4NjM5NGIzOWQ1YiIsImlhdCI6MTYwNzQ0MjAwOCwiZXhwIjoxNjE2MDgyMDA4fQ.EOyynwiVD6Sgo9Rget-d54gb8l5XR5Jhy9T0AUtHo-Y"

class Data extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            smokeData : []
        }
    }
    getData(){
        axios.get("http://localhost:9000/iot",{
            headers:{
                'Authorization' : `Bearer ${accessToken}`
            }
        }).then(({data})=>{
            this.setState({
                smokeData:data
            });
            console.log(this.state.smokeData)
        })
        .catch((err)=>console.error("error is found Ayush"+err))
    }
    redirection (){
        console.log("hello");
        window.open(index);

    }
    componentDidMount(){
       this.interval = setInterval(()=>this.getData(),5000)
    // this.getData();
    }
    render(){
        return(
            <div className="data-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>SMOKE (ppm)</th>
                            <th>CO (ppm)</th>
                            <th>GAS (ppm)</th>
                            <th>Mq135 gases (ppm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                           {this.state.smokeData.map(({_id,smoke,CO,gas,Mq135_gases})=>{
                               return(
                                <tr key={_id}>
                                   <td>{smoke}</td>
                                   <td>{CO}</td>
                                   <td>{gas}</td>
                                   <td>{Mq135_gases}</td>

                                </tr>
                               )
                           })}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Data;