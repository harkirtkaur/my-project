import React, { useState, useEffect } from 'react';
import '../CSS files/citysearch.css';
const CitySearch = () => {
  // Array of major cities in India
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
    "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
    "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
    "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
    "Allahabad", "Howrah", "Ranchi", "Gwalior", "Jabalpur",
    "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
    "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli-Dharwad",
    "Tiruchirappalli", "Bareilly", "Moradabad", "Mysore", "Tiruppur",
    "Gurgaon", "Aligarh", "Jalandhar", "Bhubaneswar", "Salem",
    "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur",
    "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai",
    "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar",
    "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded",
    "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar",
    "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar",
    "Jammu", "Sangli-Miraj & Kupwad", "Mangalore", "Erode", "Belgaum"
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Filter cities based on user input
    const filtered = cities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [searchTerm]);
  const handleCitySelect = (city) => {
    setSearchTerm(city);
    setFilteredCities([]);
  };
  return (
    <div className='citySearch'>
        <h4>Pick a destination to start your Journey now!</h4>
        <div className="container mt-3">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Choose a destination..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button type='submit' className='btn btn-warning'>Search</button>
        </div>
        <div className='cityDropdown'>
            {searchTerm && (
                <ul className="list-group mt-2">
                    {filteredCities.map((city, index) => (
                    <li 
                        className="list-group-item"
                        key={index}  
                        onClick={() => handleCitySelect(city)}
                        style={{ cursor: 'pointer' }}>{city}
                    </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};

export default CitySearch;
