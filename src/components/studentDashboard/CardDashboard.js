export function CardDashboard({detail,value, symbol}){
   
       return(
           <div className="col-xl-6 col-md-6 mb-4">
           <div className="card border-left-info shadow h-100 py-2">
               <div className="card-body">
                   <div className="row no-gutters align-items-center">
                       <div className="col mr-2">
                           <div className="text-m font-weight-bold text-info text-uppercase mb-1">
                               {detail}</div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                       </div>
                       <div className="col-auto">
                           <i className={symbol}></i>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       );
   }
   
