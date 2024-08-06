// Promises - chaining promises - async/await - clean syntax

let placedOrder = (drink) =>{
    return new Promise(
        (res,rej) =>{
        if(drink === "coffee") {
            res("Order for coffee recieved");
        }
        else{
            rej("Order is rejected");
        }
    }); 
};

let processOrder = (order) => {
    return new Promise(
        (res) => {
            console.log("Order is being processed");
            res(`${order} is served`);
        }
    );
};

// placedOrder('coffee').then((orderPlaced)=>{
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then((processedOrder)=>{
//     console.log(processedOrder);
// });

let  serveOrder = async() =>{
    try {
        let orderPlaced = await placedOrder('soup')
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder)
    } catch (err) {
        console.log(err)
    }
};

serveOrder();