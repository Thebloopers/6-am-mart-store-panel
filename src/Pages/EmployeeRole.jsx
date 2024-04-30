import EmployeeInput from "../Components/EmployeeInput"
import EmployeeTable from "../Components/EmployeeTable"
import withAuth from "../HOC/withAuth"

const EmployeeRole = () => {
  return (
    <div>
        <div className="page-header">
        <h1 className="page-header-title flex items-center">
          <span className="page-header-icon mr-2">
            <img
              src="https://6ammart-admin.6amtech.com/public/assets/admin/img/add.png"
              className="w-26"
              alt=""
            />
          </span>
          <span className=" text-xl">Custom Role
</span>
        </h1>
      </div> 
     <EmployeeInput/>
     <EmployeeTable/>
    </div>
  )
}

export default withAuth(EmployeeRole)