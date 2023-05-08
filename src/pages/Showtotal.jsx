import Axios  from 'axios';
import {React, useState , useEffect} from 'react'
import DataTable from 'react-data-table-component';
import { Link , useNavigate } from 'react-router-dom'


const columns = [
    {
      name: 'total',
      selector: row => row.total,
  
    },
  
  ];
  
  
  

function Showtotal() {
    const [datas, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
    const [page, setpage] = useState(1);
	const [perPage, setPerPage] = useState(10);
    const [search, setsearch] = useState('');

	const fetchdata = async () => {
		setLoading(true);


        var url = `http://localhost:3001/api/price?page=${page}&per_page=${perPage}`

        if(search){
            url += `&search=${search}`;
        }

		const response = await Axios.get(url);

		setData(response.data.data);
		setTotalRows(response.data.total);
		setLoading(false);
	};

	// const handlePageChange = page => {
	// 	setpage(page);
	// };

	// const handlePerRowsChange = async (newPerPage, page) => {
		
	// 	setPerPage(newPerPage);
		
	// };

    const handleSearchChang = (event) => {
        setsearch(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchdata();

    }

	useEffect(() => {
		fetchdata(); // fetch page 1 of users
		
	}, [page,perPage]);

	return (
        <div>
             <form onSubmit={handleSearchSubmit}>
                <input type="date"   onChange={handleSearchChang} />
                <button type="submit" >show price</button>
            </form>

                {/* <DataTable 
                    title="Users"
                    columns={columns}
                    data={datas}
                    progressPending={loading}
                    
                /> */}
                <div>
                    <h1>totalprice</h1>
                    {
                        datas.map((post,index)=>{
                            return <h1 key={index} >{post.total}</h1>
                        })
                    }
                </div>
                
                

        </div>
        
	);
}

export default Showtotal