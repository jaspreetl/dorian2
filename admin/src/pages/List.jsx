import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl, currency } from '../App';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success && Array.isArray(response.data.products)) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-3">all products</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 text-center w-20">image</th>
              <th className="py-2 px-4 text-left">name</th>
              <th className="py-2 px-4 text-left">category</th>
              <th className="py-2 px-4 text-center w-24">price</th>
              <th className="py-2 px-4 text-center w-24">action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="py-2 px-4 text-center">
                    <img
                      src={`${backendUrl}/${item.image[0]}`}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.category}</td>
                  <td className="py-2 px-4 text-center">{currency}{item.price}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => removeProduct(item._id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                  no products available...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
