import React,{useState , useEffect} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        (async ()=>{
            await getProducts();
        })();
        getProducts();
    },[])
    const getProducts = async()=>{
        try{
            setLoading(true)
            const response = await fetch ('https://dummyjson.com/products')
        const result =await response.json();
        setProducts(result.products);
        setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    if(loading){
        return <h1>Loading...</h1>
    }
    return(
        <div className='products'>
            {products.map(item =>(
                <div key={item.id} className='prod'>
                    <img className='img' alt='' src={item.images[1]}/>
                    <Link to="/add">
  <button>Add</button>
</Link>
                    <h3 className='h3'>{item.title}</h3>
                    <p className='p'> Ksh {item.price}</p>
                    <p className='p2'>{item.discountPercentage}%</p>
                    <Link to={`/Product/${item.id}`}>
            <button className='btn'>See product details</button>
           </Link>
                    </div>
            ))}
        </div>);
}
export default Products;