import './App.css';
import React from 'react';
import Price from './components/Price';

let data=[
  {
    plan:"FREE",
    price:"0",
    users:"Single User",
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public projects",
    publicprojectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free SubDomain",
    subDomainEnabler:false,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false
 },
 {
 plan:"PLUS",
    price:"9",
    users:"5 User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public projects",
    publicprojectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free SubDomain",
    subDomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false
 },
 {
  plan:"PRO",
     price:"49",
     users:"Unlimited User",
     usersEnabler:true,
     storage:"15GB Storage",
     storageEnabler:true,
     publicprojects:"Unlimited Public projects",
     publicprojectsEnabler:true,
     communityAccess:"Community Access",
     communityAccessEnabler:true,
     privateProjects:"Unlimited Private Projects",
     privateProjectsEnabler:true,
     phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
     subDomain:" Unlimited Free Domain",
     subDomainEnabler:true,
     statusReports:"Monthly Status Reports",
     statusReportsEnabler:true
  }
]


function App() {
  return (
   <>
  <section className="pricing py-5">
    <div className="container">
      <div className="row">
        
      {data.map((e,i)=>{
        return <Price data={e} key={i}/>
      })}
      
      
        </div>
    </div>
  </section>
    
    </>
  );
}
export default App;
