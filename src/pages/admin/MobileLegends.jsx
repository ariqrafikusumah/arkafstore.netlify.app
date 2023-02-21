import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel } from "react-bootstrap";
import Swal from "sweetalert2";

export default function MobileLegend() {
    const [firebaseData, setFirebaseData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);
    const APIkey = "EMr7RAu4y0z2GvQDmGIsuGfwrDRvjt2bbp1ixQCR";

    async function getFirebaseData() {
        const response = await axios.get(
            `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/products-ml.json?auth=${APIkey}`
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
                console.log("Data Berhasil Dipanggil =================>",data);
            })
            .catch((err) => {
                // Jika Gagal
                setisError(true);
                setisLoading(false);
                console.log(err);
            });
    }, []);

    const handleDelete = (item) => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Data produk akan dihapus secara permanen!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus data!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(
                        `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/product-ml/products-ml/${item}.json?auth=${APIkey}`
                    )
                    .then((response) => {
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil",
                            text: "Data produk berhasil dihapus!",
                        });
                        console.log('Data Berhasil Dihapus =================>', response.data);
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Terjadi kesalahan saat menghapus data produk!",
                        });
                        console.log('Data Gagal Dihapus =================>', error.data);
                    });
            }
        });
    };

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
    else if (firebaseData && !isError)
        return (
            <>
                <div>
                    <div className="container xl:px-52 lg:px-32 md:px-5 xs:px-5">

                        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mt-3" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="/admin/Dashboard-Admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 ">Mobile Legends</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>

                        <div className='text-3xl font-bold mb-4 mt-10'>
                            Produk Mobile Legends
                        </div>
                        <div className=" font-semibold mb-5">
                            Sisakan 1 produk pada tabel !
                        </div>
                        <div>
                            <button className=" rounded-full"><PlusCircleIcon className="w-8 hover:text-indigo-500 " onClick={() => setModalShow(true)} /></button>
                        </div>
                        <ModalTambahProduk
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <div className="overflow-x-auto rounded-lg">
                            <table className="table-auto border-collapse">
                                <thead className="bg-gray-50">
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="py-2 px-4 border">No</th>
                                        <th className="py-2 px-4 border">Nama Produk</th>
                                        <th className="py-2 px-4 border">Harga(Rp)</th>
                                        <th className="py-2 px-4 border">Gambar</th>
                                        <th className="py-2 px-4 border">Kode Produk</th>
                                        <th className="py-2 px-4 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {Object.keys(firebaseData).map((item, index) => (
                                        <tr key={firebaseData[item].id}>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-sm font-medium text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-sm font-medium text-gray-900">{firebaseData[item].product_name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-sm text-gray-500">Rp {firebaseData[item].price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-sm px-3 text-gray-500"><img className="w-8" src={firebaseData[item].picture} alt={firebaseData[item].picture} /></div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap border">
                                                <div className="text-sm font-medium text-gray-900">{firebaseData[item].code}</div>
                                            </td>
                                            <td className="py-2 whitespace-nowrap px-4 border">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalShow(true)}>
                                                    Edit
                                                </button>
                                                <EditModal
                                                    show={modalShow2}
                                                    onHide={() => setModalShow2(false)}
                                                />
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleDelete(firebaseData[item].id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    else {
        return <h1 className='text-center'>Something Went Wrong</h1>;
    }
}

function ModalTambahProduk(props) {
    const [code, setCode] = useState("");
    const [picture, setPicture] = useState("");
    const [price, setPrice] = useState("");
    const [product_name, setProduct_name] = useState("");
    const APIkey = "EMr7RAu4y0z2GvQDmGIsuGfwrDRvjt2bbp1ixQCR";

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { code, picture, price, product_name };
        axios
            .post(`https://api-arkafstore-ed871-default-rtdb.firebaseio.com/products-ml.json?auth=${APIkey}`, data)
            .then((response) => {
                console.log(response.data);
                // jika login berhasil, bisa melakukan aksi seperti redirect ke halaman dashboard
                Swal.fire({
                    icon: "success",
                    title: "Data berhasil ditambahkan!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                props.onHide();
            })
            .catch((error) => {
                console.log(error.response.data);
                // jika login gagal, bisa menampilkan pesan error
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat menambahkan data!",
                });
            });
    };
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tambah Produk
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div>
                            <FormGroup>
                                <FormLabel>Code</FormLabel>
                                <Form.Control
                                    type="text"
                                    placeholder="Kode Produk"
                                    id="code"
                                    name="code"
                                    value={code}
                                    required
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <FormLabel>URL Gambar</FormLabel>
                                <Form.Control
                                    type="text"
                                    placeholder="URL Gambar"
                                    id="picture"
                                    name="picture"
                                    value={picture}
                                    onChange={(e) => setPicture(e.target.value)}
                                />
                            </FormGroup>
                            <br />
                            <FormGroup>
                                <FormLabel>Harga Produk</FormLabel>
                                <Form.Control
                                    type="text"
                                    placeholder="Harga Produk"
                                    id="price"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </FormGroup>
                            <br />

                            <FormGroup>
                                <FormLabel>Nama Produk</FormLabel>
                                <Form.Control
                                    type="text"
                                    placeholder="Nama Produk"
                                    id="product_name"
                                    name="product_name"
                                    value={product_name}
                                    onChange={(e) => setProduct_name(e.target.value)}
                                />
                            </FormGroup>
                            <br />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="bg-red-500" onClick={props.onHide}>
                            Close
                        </Button>
                        <Button className="bg-indigo-500" type="submit">
                            Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal >
        </>
    );
}

function EditModal(props) {
    const [code, setCode] = useState(props.code);
    const [picture, setPicture] = useState(props.picture);
    const [price, setPrice] = useState(props.price);
    const [product_name, setProduct_name] = useState(props.product_name);

    const APIkey = "EMr7RAu4y0z2GvQDmGIsuGfwrDRvjt2bbp1ixQCR";

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { code, picture, price, product_name };

        axios
            .put(
                `https://api-arkafstore-ed871-default-rtdb.firebaseio.com/product-ml//products-ml/${props.product.id}.json?auth=${APIkey}`,
                data
            )

            .then((response) => {
                console.log(response.data);
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Data produk berhasil diupdate!",
                });
                props.onHide();
            })
            .catch((error) => {
                console.log(error.response.data);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat mengupdate data produk!",
                });
            });
    };

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Produk
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form.Control
                            type="text"
                            placeholder="Kode Produk"
                            id="code"
                            name="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <br />

                        <Form.Control
                            type="text"
                            placeholder="URL Gambar"
                            id="picture"
                            name="picture"
                            value={picture}
                            onChange={(e) => setPicture(e.target.value)}
                        />
                        <br />

                        <Form.Control
                            type="text"
                            placeholder="Harga Produk"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <br />

                        <Form.Control
                            type="text"
                            placeholder="Nama Produk"
                            id="product_name"
                            name="product_name"
                            value={product_name}
                            onChange={(e) => setProduct_name(e.target.value)}
                        />
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="bg-red-500">
                        Close
                    </Button>
                    <Button type="submit" className="bg-indigo-500" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
