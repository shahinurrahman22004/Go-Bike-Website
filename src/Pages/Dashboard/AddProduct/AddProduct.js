import React, {useState} from 'react';

const AddProduct = () => {

    const initialiInfo = {name: '', email: '', phone: '', address: ''}
    const [products, setProducts] = useState(initialiInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...products };
        newInfo[field] = value;
        setProducts(newInfo);
    }

    const handleProducts = e => {
        alert('Product added');

        const product = {
            ...products,
        }
        console.log(product);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => setProducts(data))

        e.preventDefault();
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Add New Product</p>
                            
                        </div>
                    </div>
                </div>
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">

                    <form onSubmit={handleProducts}>
                        <input style={{width: '340px', marginBottom: '20px'}} type="text" 
                                name="name" required
                                onBlur={handleOnBlur}
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Name" 
                        />
                        <br />
                        <input style={{width: '340px', marginBottom: '20px'}} type="number" name="price" required
                        onBlur={handleOnBlur} className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Price" 
                        />
                        <br />
                        <textarea style={{width: '340px', marginBottom: '20px'}} id="about" name="description" required 
                        onBlur={handleOnBlur}className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"  rows={5} placeholder="description" defaultValue={""} />
                        <br />
                        <input style={{width: '340px', marginBottom: '20px'}} type="text" name="image" required 
                        onBlur={handleOnBlur}className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Image Url" />
                        <br />
                        <button type="submit" style={{width: '340px', marginBottom: '20px'}} className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">
                            Add
                        </button>
                    </form>
                </div>
            </div>
            
        </>

    );
};

export default AddProduct;