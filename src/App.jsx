import { useState } from 'react';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<BrowserRouter>
<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>


			<Routes>
				<Route path='/' element={<ProductList />} />
				<Route path='item/:id' element={<ItemDetailContainer/>} />
			</Routes>

		</BrowserRouter>
		
		
	);
}

export default App;
