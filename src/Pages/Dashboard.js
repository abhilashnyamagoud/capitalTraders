import React,{useState} from "react";
import './Dashboard.css'

const Dashboard=()=>{

    const [oilDetails ,setOilDetails]=useState([
        {
            name:'Jasmine oil',
            details:" There's very limited scientific evidence on jasmine oil's ability to reduce spasms. One study did find it effective in reducing labor pain.  ",
            quantity:10,
            price:76.979,
            numbers:1
        },
        {
            name:'Champaca oil',
            details:" world's most expensive perfumes. It is Aphrodisiac, emollient, febrifuge. Used to warm, calm, reduce stress, aid breathing and induce euphoria. ",
            quantity:100,
            price:13.5232,
            numbers:1
        },
        {
            name:'Tuberose oil',
            details:" as well as in high-end natural and organic perfumery. Tuberose is frequently used as a heart note in perfumes, especially in oriental floral accords. ",
            quantity:100,
            price:27.6496,
            numbers:1
        },
        {
            name:'Frangipani oil',
             details:" It is known to alleviate inflammation, headache, back pain, and tinnitus. While the aphrodisiac nature of this oil relaxes nerves, muscles, and boost libido. ",
             quantity:10,
            price:37.5783,
            numbers:1
        },
        {
            name:"Cannabis oil",
            details:" reducing stress decreasing physiological effects of anxiety, such as an increased heart rate. ", quantity:100,
            price:6.1583,
            numbers:1
        },
        {
            name:'Agarwood oil',
            details:" for numerous health problems, for instance, asthma, abdominal pain, spasms in the intestinal and respirational systems, fevers, nausea as well as other diseases. ",
            quantity:100,
            price:24.9978,
            numbers:1
        },
        {
            name:'Rose oil',
            details:" reduce anxiety, stress, depression, and pain. increase libido. protect against harmful bacteria and fungi. ",
            quantity:10,
            price:223.0569,
            numbers:1
        },
        {
            name:' Elecampane oil',
            details:" to treat coughs associated with bronchitis, asthma, and whooping cough. More. ",
            quantity:100,
            price:6.284,
            numbers:1
        },
        {
            name:'Sandal oil',
            details:" help maintain the buoyancy and structure of the skin cells. It also reduces dryness and replenishes the moisture in skin, increasing elasticity. “Due to the rich antioxidant component, sandalwood can help prevent wrinkles by fighting free radical formation. ",
            quantity:10,
            price:51.843,
            numbers:1
        },
        {
            name:'Neroli oil',
            details:" promote cell regeneration improve elasticity of skin. This is perfect for acne-prone, it helps reduce the damage of stretch marks ",
            quantity:100,
            price:12.0653,
            numbers:1
        },
        {
            name:"Red sandal oil",
            details:" cancer, wounds,digestive tract problems,fluid retention ",
            quantity:10,
            price:86.2542,
            numbers:1
        }
    ])
    
   const addCart=(val)=>{
        console.log(val)
   }


    // const handleInc=(ele,i)=>{
       
    //     const result=oilDetails.map((val)=>{
    //         if(val.name===ele.name){
    //             const res1=ele.numbers+= 1
    //             const price=ele.price *  res1
    //             console.log(price)
    //            return {...val,...res1}
    //         }else{
    //             return {...val}
    //         }
    //     })
    //     setOilDetails(result)
    // }

    return(
        <div>

        <div className="main">
            {
                oilDetails.map((ele,i)=>{   
                    return (
                        <div key={i} className="secondary">
                            <h1> {ele.name} </h1>
                            <p>Details:{ele.details }  </p>
                            <p><strong>Quantity</strong>:{ele.quantity} ml </p>
                            <p><strong>Price</strong>:{ele.price} $ </p>
                            {/* <button>-</button><span> {ele.numbers}  </span> <button onClick={()=>{
                                handleInc(ele,i)
                            }}>+</button> */}
                            <button className="crtBtn" onClick={()=>addCart(ele)} >Add To Cart</button>
                            </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Dashboard