import star from "../assets/star.png"
import React from "react";
// import SelectDateRange from '../Components/Sandeep/SelectDateRange'
import SearchExportForm from "../Components/SearchExportForm";
import OrderTable from "../Components/OrderTable";
// import Pagination from '../Components/Sandeep/Pagination'
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import TopDeliveryman from "../Components/TopDeliveryman";
import TopDeliveryman2 from "../Components/TopDeliveryman2";
import withAuth from "../HOC/withAuth";


const Chat = () => {
    const [searchInput, setSearchInput] = useState("");

    const cardsData2 = [
        {
            imageUrl:
                "https://6ammart-admin.6amtech.com/storage/app/public/delivery-man/2022-09-29-63351bf73345f.png",
            name: "Jhon",
            phoneNumber: "+8**********",
            orders: 15,
            link: "",
        },
        // Add more card data objects as needed
    ];

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your search logic here
    };
    const [messages, setMessages] = useState([
        {
            text: "Hello! How can I assist you?",
            timestamp: "2023-04-01 10:30 AM", // Static timestamp for the existing message
            sender: "other" // Sender is 'other' for existing messages
        },
        {
            text: "Sure, feel free to ask any questions.",
            timestamp: "2023-04-01 10:35 AM", // Static timestamp for the existing message
            sender: "other" // Sender is 'other' for existing messages
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = {
                text: inputValue,
                timestamp: new Date().toLocaleString(),
                sender: "user" // Sender is 'user' for new messages sent by the user
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };



    // Function to handle displaying emojis
    const handleOpenEmojis = () => {
        // Logic to display emojis here
        console.log("Displaying emojis...");
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            // You can do further processing here, such as uploading the file
        }
    };
    return (
        <div className="overflow-hidden">
            <h1 className="page-header-title capitalize m-0 flex text-2xl gap-3 font-medium">

                <span>
                    Conversation List
                    {/* <span className="badge badge-soft-dark ml-2 text-sm">30</span> */}
                </span>
            </h1>

            <div className="grid grid-cols-1 md:flex  gap-8">
                <div className="order--pos-left  md:w-[33%]  rounded-lg shadow-lg p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-full sm:col-span-1">
                            <div className="relative flex-1 w-full md:mx-2 mb-2 md:mb-0">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <img
                                        className="w-4 h-4"
                                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/icons/search-icon.png"
                                        alt="Search Icon"
                                    />
                                </span>
                                <input
                                    id="customer-search"
                                    type="text"
                                    className="form-input h-12 w-full md:w-[22vw] pl-10 pr-3 outline-none rounded-sm bg-[#F3F4F5] focus:outline-none "
                                    placeholder="Search customer"
                                />
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className=" border-gray-200  overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-200">

                            </div>
                            {cardsData2.map((card, index) => (
                                <TopDeliveryman
                                    key={index}
                                    imageUrl={card.imageUrl}
                                    name={card.name}
                                    phoneNumber={card.phoneNumber}
                                    orders={card.orders}
                                    link={card.link}
                                />
                            ))}

                            <div className="px-4 py-2 ">

                            </div>

                        </div>
                    </div>

                </div>

                <div className="order--pos-right  md:w-[67%] w-fit   rounded-lg shadow-lg p-6">
                    <div className=" border-gray-200  overflow-hidden">
                        <div className="px-4  py-1 border-b border-gray-200">

                        </div>
                        {cardsData2.map((card, index) => (
                            <TopDeliveryman2
                                key={index}
                                imageUrl={card.imageUrl}
                                name={card.name}
                                phoneNumber={card.phoneNumber}
                                link={card.link}
                            />
                        ))}


                    </div>

                    <div id="cart-items" className=""></div>
                    <div className="main  max-w-full h-[90vh] mx-auto mt-4 relative">
                        <div className=" p-4 rounded-lg">
                            <div className="overflow-y-auto max-h-64 mb-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center mb-2 justify-${message.sender === 'user' ? 'end' : 'start'}`}
                                    >
                                        <div className={`bg-${message.sender === 'user' ? 'blue' : 'slate'}-200 text-gray-700 text-sm p-2 rounded-lg`}>
                                            {message.text}
                                            <span className="text-xs ml-2">{message.timestamp}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 rounded px-3 py-2 bg-gray-100 border border-gray-300 flex items-center">
                            <input
                                type="text"
                                className="flex-grow py-2 px-3 border text-[2vh] border-gray-300 rounded-lg focus:outline-none"
                                placeholder="Type a message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}

                            />

                            <label htmlFor="fileInput" className="cursor-pointer">
                                <img src="https://6ammart-admin.6amtech.com/public/assets/admin/img/gallery.png" alt="Upload Icon" className="w-10 h-10" />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />






                            <button
                                className=" px-2 py-2  text-white rounded-lg"
                                onClick={handleOpenEmojis}
                            >
                                😊
                            </button>

                            <button
                                className="ml-2 md:px-4 py-1 px-2 text-[2vh] bg-[#006161] text-white rounded-[4px]"
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>)
}

export default withAuth(Chat)