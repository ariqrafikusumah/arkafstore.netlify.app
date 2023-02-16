import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function MobileLegends() {
  const [firebaseData, setFirebaseData] = useState([null]);
  const [firebaseData2, setFirebaseData2] = useState(null);
  const [firebaseData3, setFirebaseData3] = useState(null);
  const [firebaseData4, setFirebaseData4] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [id] = useState([`-NOQFV4o7ZV2Xzae7eSr`]);

  const APIkey = "EMr7RAu4y0z2GvQDmGIsuGfwrDRvjt2bbp1ixQCR";

  async function getFirebaseData() {
    const response = await axios.get(
      `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/products.json?auth=${APIkey}`
    );
    const data = response.data;
    return data;
  }

  async function getFirebaseData3() {
    const response = await axios.get(
      `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/payment-bank.json?auth=${APIkey}`
    );
    const data = response.data;
    return data;
  }

  async function getFirebaseData4() {
    const response = await axios.get(
      `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/payment-wallet.json?auth=${APIkey}`
    );
    const data = response.data;
    return data;
  }


  useEffect(() => {
    setisLoading(true);
    getFirebaseData()
      .then((data) => {
        setisLoading(false);
        setFirebaseData(data);
        console.log(data);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setisLoading(true);
    getFirebaseData3()
      .then((data) => {
        setisLoading(false);
        setFirebaseData3(data);
        console.log(data);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setisLoading(true);
    getFirebaseData4()
      .then((data) => {
        setisLoading(false);
        setFirebaseData4(data);
        console.log(data);
      })
      .catch((err) => {
        // Jika Gagal
        setisError(true);
        setisLoading(false);
        console.log(err);
      });
  }, []);


  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      const result = await axios.get(
        `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/categories/${id}.json?auth=${APIkey}`
      );
      setFirebaseData2(result.data);
    };
    fetchData();
  }, []);


  if (isLoading) return (
    <div className="text-center mt-5">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  else if (firebaseData, firebaseData2, firebaseData3, firebaseData4 && !isError)
    return (
      <>
        <div>
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 xl:px-52 lg:px-32 md:px-5 sm:px-5 xs:px-2 mt-5'>
            <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:w-96 lg:w-96 lg:h-72'>
              <div className='px-5 py-5'>
                {firebaseData2 ? (
                  <div>
                    <img className='h-32 w-32 rounded-xl' src={firebaseData2.thumbnail} alt="gambar" />
                    <h1 className='font-bold'>{firebaseData2.category}</h1>
                    <p>{firebaseData2.description}</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
                <div className='flex flex-cols-2'>
                  <div>
                    <a href="https://apps.apple.com/app/id1160056295?country=my" target="_blank" rel="noopener noreferrer">
                      <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/app_store_coda.png" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://play.google.com/store/apps/details?id=com.mobile.legends&country=my" target="_blank" rel="noopener noreferrer">
                      <img src="https://d1qgcmfii0ptfa.cloudfront.net/S/content/mobile/images/google_play_coda.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form >
                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-0 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                  <div className='px-5 py-5'>
                    <div className='font-bold'>
                      <span className='border border-indigo-500 bg-indigo-500 px-2 text-white rounded-full'>1</span>&nbsp;Masukkan User ID
                    </div>
                    <div className='flex flex-wrap gap-4 px-2 py-2'>
                      <div className="relative">
                        <input type="text" id="user_id" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="user_id" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan User ID</label>
                      </div>
                      <div className="relative">
                        <input type="text" id="zone_id" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="zone_id" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan ( Zone ID )</label>
                      </div>
                    </div>
                    <div>
                      <div className='px-2'>
                        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                          Petunjuk
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                  <div className='px-5 py-5'>
                    <div className='font-bold'>
                      <span className='border border-indigo-500 bg-indigo-500 px-2 text-white rounded-full'>2</span>&nbsp;Pilih Nominal Top Up
                    </div>
                    <div className='grid w-full gap-6 md:grid-cols-2 mt-5'>
                      {Object.keys(firebaseData).map((e1) => (
                        <ul key={e1}>
                          <li>
                            <div>
                              <input type="radio" className='hidden peer' name="products" id={firebaseData[e1].product_name} value={firebaseData[e1].price} required />
                              <label htmlFor={firebaseData[e1].product_name} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className='block'>
                                  <div className="w-full text-sm font-semibold">{firebaseData[e1].product_name}</div>
                                  <div className="w-full text-sm">Rp {firebaseData[e1].price}</div>
                                </div>
                                <img className='w-6 h-6 ml-3' src={firebaseData[e1].picture} alt="Gambar" />
                              </label>
                            </div>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                  <div className='px-5 py-5'>
                    <div className='font-bold'>
                      <span className='border border-indigo-500 bg-indigo-500 px-2 text-white rounded-full'>3</span>&nbsp;Pilih Pembayaran
                    </div>
                    <div className='mt-5'>
                      {Object.keys(firebaseData3).map((e3) => (
                        <ul key={e3}>
                          <li>
                            <div>
                              <input type="radio" className='hidden peer' name="payment" id={firebaseData3[e3].bank_name} value={firebaseData3[e3].bank_name} required />
                              <label htmlFor={firebaseData3[e3].bank_name} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className='block'>
                                  <div className="w-full text-sm font-semibold">{firebaseData3[e3].bank_name}</div>
                                  <div className="w-full text-sm">A/n {firebaseData3[e3].first_name} {firebaseData3[e3].last_name}</div>
                                </div>
                                <img className='w-32 h-full ml-3' src={firebaseData3[e3].picture} alt="Gambar" />
                              </label>
                            </div>
                          </li>
                        </ul>
                      ))}
                      {Object.keys(firebaseData4).map((e4) => (
                        <ul key={e4}>
                          <li>
                            <div>
                              <input type="radio" className='hidden peer' name="payment" id={firebaseData4[e4].wallet_name} value={firebaseData4[e4].wallet_name} required />
                              <label htmlFor={firebaseData4[e4].wallet_name} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className='block'>
                                  <div className="w-full text-sm font-semibold">{firebaseData4[e4].wallet_name}</div>
                                  <div className="w-full text-sm">A/n {firebaseData4[e4].first_name} {firebaseData4[e4].last_name}</div>
                                </div>
                                <img className='w-32 h-full ml-3' src={firebaseData4[e4].picture} alt="Gambar" />
                              </label>
                            </div>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-xl shadow-lg bg-white xl:mt-2 lg:mt-0 md:mt-5 xs:mt-5 xss:mt-5'>
                  <div className='px-5 py-5'>
                    <div className='font-bold'>
                      <span className='border border-indigo-500 bg-indigo-500 px-2 text-white rounded-full'>4</span>&nbsp;Beli
                    </div>
                    <div>
                      <div className="relative mt-5">
                        <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="628xxx" />
                        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Masukkan No Whatsapp</label>
                      </div>
                      <div>
                        <button type="submit" className="flex mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><ShoppingCartIcon className="w-5 h-5" /> Beli  </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


        {/* Main modal */}
        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
              </div>
            </div>
          </div>
        </div>


      </>
    );
  else {
    return <h1 className='text-center'>Something Went Wrong</h1>;
  }
}
