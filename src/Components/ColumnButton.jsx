import React from 'react'

const ColumnButton = () => {
  return (

    <div className="dropdown dropdown-end ">
    <div tabIndex={0} role="button" className=" m-1 ">Click</div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-52">
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Date</span>
                <input type="checkbox" className="toggle toggle-accent"  />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Customer</span>
                <input type="checkbox" className="toggle toggle-accent"  />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Store</span>
                <input type="checkbox" className="toggle toggle-accent"  />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Item Quality</span>
                <input type="checkbox" className="toggle toggle-accent"  />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Total</span>
                <input type="checkbox" className="toggle toggle-accent"  />
            </label>
        </div>
    </ul>
</div> 

 )
}

export default ColumnButton