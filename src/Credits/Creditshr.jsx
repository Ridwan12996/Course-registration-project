import Credithr from "../Credit/Credithr";

const Creditshr = ({creditshr,prices,credittime,Remainingtime}) => {
    
    return (
        <>
        <div className='"bg-white border rounded-lg mr-5 mt-3 p-5 h-1/2'>
            <h2 class="text-blue-500 font-bold text-lg mb-3">Credit Hour Remaiming {Remainingtime} </h2>
            <hr />    
            <h2 class="text-xl font-semibold mt-3 mb-3">Course Name:</h2>
<ol class="list-decimal mt-2 mb-2">
{   
    
    creditshr.map(credithr=><Credithr credithr={credithr}></Credithr>) 

   
}  </ol>
<hr />
<h4 class="mt-2 mb-2 text-slate-600 font-semibold">Total Credit hour : {credittime}</h4>
<hr />
<h4 class="mt-2 text-slate-600 font-semibold">Total Price: {prices} USD</h4>
        </div>
       
        </>
    );
};

export default Creditshr;
