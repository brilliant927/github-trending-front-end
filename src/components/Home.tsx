import RepositoryBody from "./RepositoryBody";
import DeveloperBody from "./DeveloperBody";
import {useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';

function Home() {
    const [isRepo, setIsRepo] = useState<boolean>(true);
    const [devData, setDevData] = useState<any>([]);
    const [repoData, setRepoData] = useState<any>([]);
    const onClickHandler = (flag:boolean) => {
        setIsRepo(flag);
    }
    useEffect(() => {
        getData();
    }, [isRepo]);
    
    const getData = async () => {
        axios.get((process.env.REACT_APP_API || 'http://localhost:9000') +'/getGithubTrends?section='+(isRepo ? 'repositories' : 'developers'))
        .then((res : AxiosResponse) => {
            isRepo ? setRepoData(res.data) : setDevData(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            
        });
    }
    return(
        <div className="relative  px-16 pt-40 min-h-100">
            <div className="border-solid border-1 border-current rounded-6">
                <div className="flex items-center justify-between p-4 bg-[##2d333b]  border-solid border-2 border-[#444c56] rounded-t-6 md:h-64">
                    <div className="flex flex-col md:flex-row ml-10">
                        <div onClick={() =>onClickHandler(true)} className={"border-solid border-2 border-[#444c56]  md:rounded-l-8 p-8 " + (isRepo ? 'bg-blue-900 text-white' : '')} >
                            Repositories
                        </div>
                        <div onClick={() =>onClickHandler(false)} className={"border-solid border-2 border-[#444c56]   md:rounded-r-8 p-8 " + (isRepo ? '': 'bg-blue-900 text-white')}>
                            Developers
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row ml-10 ">
                        <div className={"flex flex-row items-center mr-16" + (isRepo ? '' : '')} >
                            <span className= "">
                                SpokenLanguage: 
                            </span>
                            <span className= "">
                            Any
                            </span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mx-4">
                                <path fill="#787878" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center mr-16">
                            <span className= "">
                                Language: 
                            </span>
                            <span className= "">
                            Any
                            </span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mx-4">
                                <path fill="#787878" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center mr-16">
                            <span className= "">
                                Date range: 
                            </span>
                            <span className= "">
                            Any
                            </span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mx-4">
                                <path fill="#787878" d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {isRepo ? <RepositoryBody data={repoData}/> : <DeveloperBody data={devData} />}
                
            </div>
        </div>
    );

}

export default Home;