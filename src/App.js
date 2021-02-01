import React,{useState} from 'react';
import useFetchjob from './useFetchjob.js';
import {Container} from 'react-bootstrap';
import Job from './Job';
import Jobpage from './Jobpage';
import SearchForm from './SearchForm';

function App() {
  const[params,setParams]=useState({})
  const[page,setPage]=useState(1)
  const {jobs,loading,error,hasNextPage}=useFetchjob(params,page)

  function handleParamChange(e){
    const param=e.target.name
    const value=e.target.value
    setPage(1)
    setParams(prevParams=>{
      return {...prevParams,[param]:value}
    })
  }
  return (
    <Container className="my-4 vin">
    <h1 className="mb-4 text-white"><i class="fas fa-briefcase"></i> V!n-JObS</h1>
    <SearchForm params={params} onParamChange={handleParamChange}/>
    <Jobpage page={page} setPage={setPage} hasNextPage={true}/>
      {loading && <h1>loading</h1> }
      {error && <h1>error try refeshing</h1> }
      {jobs.map(job=>{
        return <Job key={job.id} job={job}/>
      })}
      <Jobpage page={page} setPage={setPage} hasNextPage={true}/>
    </Container>
    
  );
}

export default App;
