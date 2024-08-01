const getColor=()=>{
    // phle random nnumber generate karva ke use multiply karenge than use hex values me convertt karenge 
    const randomNum=Math.floor(Math.random()*16777215);// isi number se isliye kar rhe h taki hum isse hexa decimal values bna paye
    const randomCode="#"+randomNum.toString(16);// 16 stands for hexa values that why 
    console.log(randomNum,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color").innerText=randomCode;
    navigator.clipboard.writeText(randomCode);// jo bhi code hoga use direct clioboard pr save kar lega or hme sirf paste karne ki zarurat hai
}
//its a event call vo click pr chalega 
document.getElementById("btn").addEventListener(
    "click",
    getColor,
)

// its a initial call jab pafe load hoga tab chalega 
//hum chahte hai ki jab pafe load ho to koi initial color aaye so iske liye hum phle hi getColor ko call kar dete hai 
getColor();