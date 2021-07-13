import React, { useEffect, useState } from "react";

const App1=()=>
{ 
    
     const [data,setData]=useState({active: "NONE", confirmed: "NONE", deaths: "NONE",recovered:"NONE",lastupdatedtime:"NONE"});
    const getCovidData=async ()=>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            var actualData=await res.json();
            // console.log("1");

            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
       getCovidData()
    },[])
    return(
        <>
            <div className="fixed">
            <h1 className='center live'> 🍳Live</h1>
            </div>
            <h1 className='center heading'>COVID-19 CORONAVIRUS TRACKER</h1>
            <div className='outer'>

                <section id='sec1'>
                    <span className='small'>OUR</span>
                    <span className='large'> COUNTRY</span><br></br>
                    <span className='data'>INDIA</span>
                </section>

                <section id='sec2'>
                    <span className='small'>TOTAL</span>
                    <span className='large'>RECOVERED</span><br></br>
                    <span className='data1'> {data.recovered}</span>
                </section>

                <section id='sec3'>
                    <span className='small'>TOTAL</span>
                    <span className='large'>CONFIRMED</span><br></br>
                    <span className='data2'>{data.confirmed}</span>
                </section>

                <section id='sec4'>
                    <span className='small'>TOTAL</span>
                    <span className='large'>DEATH</span><br></br>
                    <span className='data3'>{data.deaths}</span>
                </section>

                <section id='sec5'>
                    <span className='small'>TOTAL</span>
                    <span className='large'>ACTIVE</span><br></br>
                    <span className='data4'>{data.active}</span>
                </section>

                <section id='sec6'>
                    <span className='small'>LAST</span>
                    <span className='large'>UPDATE</span><br></br>
                    <span className='data5'>{data.lastupdatedtime}</span>
                </section>   
            </div>
        </>

    )
}

export default App1;
