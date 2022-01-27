function TableHeader(){
    return(
        <div className="flex items-center justify-between p-4 bg-[##2d333b]  border-solid border-2 border-[#444c56] rounded-t-6 h-64">
            <div className="flex flex-col md:flex-row ml-10">
                <div className="border-solid border-2 border-[#444c56] rounded-l-8 px-8">
                    Repositories
                </div>
                <div className="border-solid border-2 border-[#444c56]   rounded-r-8 px-8">
                    Developers
                </div>
            </div>
            <div className="flex flex-col md:flex-row ml-10 ">
                <div className="flex flex-row items-center mr-16">
                    <span className= "">
                        SpokenLanguage: 
                    </span>
                    <span className= "">
                       Any
                    </span>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mx-4">
                                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
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
                                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
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
                                <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                            </svg>
                </div>
            </div>
        </div>
    );
}
export default TableHeader;