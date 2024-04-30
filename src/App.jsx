import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import Allshop from "./Pages/Allshop";
import Newsale from "./Pages/Newsale";
import OrderRefunds from "./Pages/OrderRefunds";
import FlashSale from "./Pages/FlashSale";
import BasicCampaigns from "./Pages/BasicCampaigns";
import ItemBasicCampaigns from "./Pages/ItemBasicCampaigns";
import Banners from "./Pages/Banners";
import OtherBanners from "./Pages/OtherBanners";
import Coupons from "./Pages/Coupons";
// import Themes from "./Themes/Themes";
import PushNotification from "./Pages/PushNotification";
import Category from "./Pages/Category";
import SubCategory from "./Pages/SubCategory";
import Login from "./Pages/Login";
import AllOrder from "./Pages/Allorder";
import Pending from "./Pages/Pending";
import Delivered from "./Pages/Delivered";
import Scheduled from "./Pages/Scheduled";
import Refunded from "./Pages/Refunded";
import ItemOrder from "./Pages/ItemOrder";
import Cooking from "./Pages/Cooking";
import Confirmed from "./Pages/Confirmed";
import Addons from "./Pages/Addons";
import Addnew from "./Pages/Addnew";
import List from "./Pages/List";
import PendingItemList from "./Pages/PendingItemList";
import ProductGallery from "./Pages/ProductGallery";
import BulkImport from "./Pages/BulkImport";
import BulkExport from "./Pages/BulkExport";
import StoreConfig from "./Pages/StoreConfig";
// import MyStore from "./Pages/MyShop";
import MyShop from "./Pages/MyShop";
import MyWallet from "./Pages/MyWallet";
import Disbursement from "./Pages/Disbursement";
import Review from "./Pages/Review";
import Chat from "./Pages/Chat";
import ExpenceReport from "./Pages/ExpenceReport";
import DisbursementReport from "./Pages/DisbursementReport";
import EmployeeRole from "./Pages/EmployeeRole";
import ListEmployee from "./Pages/ListEmployee";
import EditProduct from "./Pages/EditProduct";
import Canceled from "./Pages/Canceled";
import OfflinePayment from "./Pages/OfflinePayment";
import EmployeAddnew from "./Pages/EmployeAddnew";
import PaymentFailed from "./Pages/PaymentFailed";
import Ready from "./Pages/Ready";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/allshop" element={<Allshop />}></Route>
          <Route path="/newsale" element={<Newsale />}></Route>
          <Route path="/OrderRefunds" element={<OrderRefunds />}></Route>
          <Route path="/FlashSale" element={<FlashSale />}></Route>
          <Route path="/BasicCampaigns" element={<BasicCampaigns />}></Route>
          <Route path="/ItemCampaigns" element={<ItemBasicCampaigns />}></Route>
          <Route path="/Banners" element={<Banners />}></Route>
          <Route path="/OtherBanners" element={<OtherBanners />}></Route>
          <Route path="/Coupons" element={<Coupons />}></Route>
          <Route path="/allorder" element={<AllOrder />}></Route>
          <Route path="/pending" element={<Pending />}></Route>
          <Route path="/delivery" element={<Delivered />}></Route>
          <Route path="/scheduled" element={<Scheduled />}></Route>
          <Route path="/refunded" element={<Refunded />}></Route>
          <Route path="/ontheway" element={<ItemOrder />}></Route>
          <Route path="/cooking" element={<Cooking />}></Route>
          <Route path="/confirmed" element={<Confirmed />}></Route>
          <Route path="/ready" element={<Ready />}></Route>
          <Route path="/addons" element={<Addons />}></Route>
          <Route path="/addnew" element={<Addnew />}></Route>
          <Route path="/editproduct" element={<EditProduct />}></Route>

          <Route path="/list" element={<List />}></Route>
          <Route path="/pendingitemlist" element={<PendingItemList />}></Route>
          <Route path="/productgallery" element={<ProductGallery />}></Route>
          <Route path="/bulkimport" element={<BulkImport />}></Route>
          <Route path="/bulkexport" element={<BulkExport />}></Route>
          <Route path="/store_config" element={<StoreConfig />}></Route>
          <Route path="/my_shop" element={<MyShop />}></Route>
          <Route path="/my_wallet" element={<MyWallet />}></Route>
          <Route path="/disbursement" element={<Disbursement />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/expencereport" element={<ExpenceReport />}></Route>
          <Route
            path="/disbursementreport"
            element={<DisbursementReport />}
          ></Route>
          <Route path="/employeerole" element={<EmployeeRole />}></Route>
          <Route path="/listemployee" element={<ListEmployee />}></Route>
          <Route path="/employeaddnew" element={<EmployeAddnew />}></Route>
          <Route path="/canceled" element={<Canceled />}></Route>
          <Route path="/payment" element={<OfflinePayment />}></Route>
          <Route path="/paymentfailed" element={<PaymentFailed />}></Route>

          <Route
            path="/PushNotification"
            element={<PushNotification />}
          ></Route>
          <Route path="/Category" element={<Category />}></Route>
          <Route path="/SubCategory" element={<SubCategory />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
