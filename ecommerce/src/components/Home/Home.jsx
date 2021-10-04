import React, { Component } from 'react';
import NewSearchBar from '../NewSearchBar/NewSearchBar';
import ProductTable from '../ProductTable/ProductTable';


const Home = (props) => {

    return (
        <div className = "home">
            <div><br /> <br /> <br />
            {/* <NewSearchBar filterProducts = {props.filterAllProducts} /> */}
<<<<<<< HEAD
            <ProductTable products = {props.products} />
            </div>
            
        
        <div className="productimages">
        <table>
            <thead>
                <tr>
                    <th><img src="https://www.autozone.com/cdn/images/B2C/US/media/FY21/P05/fy21p0506-grid4-engine-oil-d.jpg" height="100" width="100" /></th>
                    <th><img src="https://www.autozone.com/cdn/images/B2C/US/media/FY21/P08/FeatCat/fy21p08-grid4-sparkplugs-d.jpg" height="100" width="100" /></th>                   
                    <th><img src="https://www.autozone.com/cdn/images/B2C/US/media/FY21/P05/fy21p0506-grid4-batteries-d.jpg" height="100" width="100" /></th>                   
                    <th><img src="https://www.autozone.com/cdn/images/B2C/US/media/FY21/P08/FeatCat/fy21p08-grid4-airfilter-d.jpg" height="100" width="100" /></th>                    
                    <th><img src="https://www.autozone.com/cdn/images/B2C/US/media/FY21/P05/fy21p0506-grid4-brake-rotors-d.jpg" height="100" width="100" /></th>
                    <th><img src="https://www.goodyear.com/images/tireImages/goodyear/primaryImage/Assurance_cs_Fuel_Max_2164.jpg" height="100" width="100" /></th> 
                    <th><img src="https://contentinfo.autozone.com/znetcs/product-info/en/US/owi/PABB53/image/2/" height="100" width="100" /></th>  
                    </tr>
                    </thead>          
            </table>
            </div>
            </div>
=======
            <ProductTable products = {props.products} categories = {props.categories} />
        </div>
>>>>>>> a16162019f137fdf6c03b7afe88c2ca1ef9a7e5c
    );
}

export default Home;
