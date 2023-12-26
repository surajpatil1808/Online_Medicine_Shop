
// import Navbar from './Navbar'

// import React, { Fragment, useEffect, useState,useRef} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



// const Home = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [imageUrl, setImageUrl] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     getData();
//   }, []);


//   const getData = () => {
//     const data = {
//       type: 'Get',
//       Email: localStorage.getItem('loggedEmail'),

//     };
//     const url = `https://localhost:7198/api/Admin/medicines`;
  

//     axios
//       .get(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setData(data.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   //for serch operation

//   const handleSearchMethod = () => {
//     const url = `https://localhost:7198/api/Admin/medicines/search?name=${searchTerm}`;
  
//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };
  
//   const handleSearch = () => {
//     handleSearchMethod();
//   };
  

  


  

//   const cartItemStyle = {
//     display: 'inline-block',
//     width: '300px',
//     //height: '300px',
//     padding: '10px',
//     margin: '10px',
//     border: '1px solid #ccc',
//   };
  
//   const imageStyle = {
//     width: '280px',
//     height: '150px',
//     marginBottom: '10px',
//     padding: '5px',
//   };
  
//   const buttonStyle = {
//     marginTop: '10px',
//   };
//   const navigateToDetails = (medicine) => {
//     navigate(`/productDetails/${medicine.id}`);
//   };
  
  

//   return (<>
  
//     <Fragment>
//       <Navbar />
//       <br/>
//       <h2>Medicine List</h2>
//       <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//        {data.length > 0 ? (
//         <div>
//           {data.map((medicine) => (
//             <div key={medicine.id} style={cartItemStyle} onClick={() => navigateToDetails(medicine)}>
//               <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//               <div>
//                 <h3> {medicine.name}</h3>
//               </div>
//               <div>
//                 <strong>Price</strong> Rs.{medicine.unitPrice}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No medicines found.</p>
//       )}

//     </Fragment>
//     </>
//   );
// };
// export default Home;


import Navbar from './Navbar'
import React, { Fragment, useEffect, useState,useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import LoadingBar from 'react-top-loading-bar';



const MedicineHome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [medicineId, setMedicineId] = useState('');
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expDate, setExpDate] = useState('');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [addUpdateFlag, setAddUpdateFlag] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(''); // State variable to track the sorting option
  const [loading, setLoading] = useState(false); // Loading state


  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    setLoading(true); // Set loading state to true
    const data = {
      type: 'Get',
      Email: localStorage.getItem('loggedEmail'),

    };
    const url = `https://localhost:7198/api/Admin/medicines`;
  

    axios
      .get(url, data)
      .then((result) => {
        const data = result.data;
        if (data.statusCode === 200) {
          setData(data.listMedicines);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false
      });
      
  };

  //for serch operation

  const handleSearchMethod = () => {
    setLoading(true); // Set loading state to true
    const url = `https://localhost:7198/api/Admin/medicines/search?name=${searchTerm}`;
  
    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setData(responseData.listMedicines);
        }
      })
      .catch((error) => {
        console.log('Error retrieving medicine list:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false
      });
  };
  
  const handleSearch = () => {
    handleSearchMethod();
  };
  
  const sortMedicines = (medicines) => {
    switch (sortOption) {
      case 'name':
        return [...medicines].sort((a, b) => a.name.localeCompare(b.name));
      // case 'manufacturer':
      //   return [...medicines].sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
      // case 'expDate':
      //   return [...medicines].sort((a, b) => a.expDate.localeCompare(b.expDate));
      case 'price':
      return [...medicines].sort((a, b) => a.unitPrice - b.unitPrice);
      default:
        return medicines;
    }
  };

  const sortedData = sortMedicines(data);

  


  

  const cartItemStyle = {
    display: 'inline-block',
    width: '300px',
    //height: '300px',
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
  };
  
  const imageStyle = {
    width: '280px',
    height: '150px',
    marginBottom: '10px',
    padding: '5px',
  };
  
  const buttonStyle = {
    marginTop: '10px',
  };
  const navigateToDetails = (medicine) => {
    navigate(`/productDetails/${medicine.id}`);
  };
  
  

  return (<>
  
    <Fragment>
  
      <Navbar />
  
      <br/>
      <h2>Medicine List</h2>
      {/* <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div> */}

<div style={{ display: "flex", alignItems: "center" }}>
  <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: "600px",
        padding: "10px",
        borderRadius: "20px 0 0 20px",
        border: "1px solid #ccc",
        marginRight: "10px",
        fontSize: "14px",
      }}
    />
    <button
      onClick={handleSearch}
      style={{
        padding: "10px 20px",
        borderRadius: "0 20px 20px 0",
        border: "none",
        // backgroundColor: "#4CAF50",
        backgroundColor: "green",
        color: "white",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      Search
    </button>
  </div>
  <div>
    <label style={{ marginRight: "10px" }}><strong>Sort by:</strong></label>
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        backgroundColor: "white",
        fontSize: "16px",
      }}
    >
      <option value="">None</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
      {/* <option value="expDate">Expiration Date</option> */}
    </select>
  </div>
</div>



    {/* <div>
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
      
        </select>
      </div> */}


      
       {/* {data.length > 0 ? (
        <div>
          {data.map((medicine) => (
            <div key={medicine.id} style={cartItemStyle} onClick={() => navigateToDetails(medicine)}>
              <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
              <div>
                <h3> {medicine.name}</h3>
              </div>
              <div>
                <strong>Price</strong> Rs.{medicine.unitPrice}
              </div>
            </div>
          ))} */}

       {/* Loading indicator */}
       {loading && <LoadingBar color="#f11946" progress={70} height={2.5} />}

{sortedData.length > 0 ? (
        <div>
          {sortedData.map((medicine) => (
            <div key={medicine.id} style={cartItemStyle} onClick={() => navigateToDetails(medicine)}>
              <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
              <div>
                <strong>Name</strong> {medicine.name}
              </div>
              <div>
                <strong>MRP</strong>₹ {medicine.unitPrice}
              </div>
              {/* ... */}
            </div>
          ))}
        </div>
      ) : (
        <p>No medicines found.</p>
      )}

    </Fragment>
    </>
  );
};

export default MedicineHome;