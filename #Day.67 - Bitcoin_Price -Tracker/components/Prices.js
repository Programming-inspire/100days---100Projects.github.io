import React,{useState, useEffect} from 'react'

const Prices = (props) => {
    const [state, setstate] = useState("USD");
    const [list, setList] = useState("");

    useEffect(() => {
       if(state === "USD"){
           setList(
               <li className="list-group-item">
                   Bitcoin rate for {props.bpi.USD.description}: {" "}
                   <span className="badge badge-primary">{props.bpi.USD.code}</span>
                   <strong>{props.bpi.USD.rate}</strong>
               </li>
           )
       }
       else if(state === "GBP"){
        setList(
            <li className="list-group-item">
                Bitcoin rate for {props.bpi.GBP.description}: {" "}
                <span className="badge badge-primary">{props.bpi.GBP.code}</span>
                <strong>{props.bpi.GBP.rate}</strong>
            </li>
        )
    }
    else if(state === "EUR"){
        setList(
            <li className="list-group-item">
                Bitcoin rate for {props.bpi.EUR.description}: {" "}
                <span className="badge badge-primary">{props.bpi.EUR.code}</span>
                <strong>{props.bpi.EUR.rate}</strong>
            </li>
        )
    }
    }, [state])
    return (
        <div>
            <ul className="list-group">
               {list}
            </ul>
            <br/>
            <select className="form-control" onChange={(event) =>setstate(event.target.value)}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}

export default Prices
