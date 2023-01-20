import logo from "./logo.svg";
import "./App.css";
import SettingsNav from "./Components/SettingsNav";
import Table from "./Components/Table";
import React from "react";

function App() {
  const [checked, setChecked] = React.useState(0);

  return (
    <div className="h-screen bg-gray-50 w-full overflow-scroll p-10 flex flex-col gap-3">
      <div className="text-4xl">Settings</div>
      <div className=" text-gray-600">
        Manage your team and preferences here.
      </div>
      <SettingsNav />
      <div className="mt-5 text-xl font-medium">
        <div>Payment method</div>
        <div className="text-base text-gray-600">
          Update your billing details and address.
        </div>
      </div>
      <hr />
      <div className="flex-col flex gap-5 md:flex-row md:gap-40">
        <div>
          <div>Contact email</div>
          <div className="text-gray-600">Where should invoices be sent?</div>
        </div>
        <div className="flex flex-col gap-5">
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio1"
                aria-describedby="helper-radio1-text"
                type="radio"
                value=""
                class="w-4 h-4 text-purple-600 accent-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio1"
                class="font-medium text-[1rem] text-gray-900"
              >
                Send to my account email
              </label>
              <p
                id="helper-radio1-text"
                class="text-[0.95rem] font-normal text-gray-600"
              >
                olivia@untitleui.com
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex items-center h-5">
              <input
                id="helper-radio1"
                aria-describedby="helper-radio1-text"
                type="radio"
                value=""
                class="w-4 h-4 text-purple-600 accent-purple-500 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
                for="helper-radio1"
                class="font-medium text-[1rem] text-gray-900"
              >
                Send to an alternative email
              </label>
              <div>
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img src="/mail.svg" alt="search" className="w-5 h-5" />
                  </span>
                  <input
                    className="placeholder:text-slate-800 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm"
                    placeholder="billing@untitleui.com"
                    type="text"
                    name="mail"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex md:gap-40 gap-5 flex-col md:flex-row">
        <div>
          <div>Card details</div>
          <div className="text-gray-600">Select default payment method</div>
        </div>
        <div className="md:w-3/5">
          <ul class="w-full gap-6 flex flex-col ">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="hosting-small"
                class="hidden peer"
                required
              />
              <label
                for="hosting-small"
                class="inline-flex items-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purple-600 peer-checked:text-purple-600 peer-checked:bg-purple-50 hover:text-gray-600 hover:bg-gray-100"
                onClick={() => setChecked(1)}
              >
                <div>
                  <img src="/Visa.png" alt={"visa"} />
                </div>
                <div class="block ml-5">
                  <div class="w-full font-semibold">Visa ending in 1234</div>
                  <div class="w-full">Expiry 06/2024</div>
                  <div className="flex gap-2">
                    <div className="font-light">Set as default</div>
                    <div className="text-purple-700">Edit</div>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full outline outline-1 outline-slate-300 ml-auto -mt-16 flex justify-center items-center ${checked===1&&"bg-purple-600"}`}>
                  {checked===1&&<img src="/tick.png" alt={"tick"} />}
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                class="hidden peer"
              />
              <label
                for="hosting-big"
                class="inline-flex items-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-purple-600 peer-checked:text-purple-600 peer-checked:bg-purple-50 hover:text-gray-600 hover:bg-gray-100"
                onClick={()=>{setChecked(2)}}
              >
                <div>
                  <img src="/Mastercard.png" alt={"visa"} />
                </div>
                <div class="block ml-5">
                  <div class="w-full font-semibold">Mastercard ending in 1234</div>
                  <div class="w-full">Expiry 06/2024</div>
                  <div className="flex gap-2">
                    <div className="font-light">Set as default</div>
                    <div className="text-purple-700">Edit</div>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full outline outline-1 outline-slate-300 ml-auto -mt-16 flex justify-center items-center ${checked===2&&"bg-purple-600"}`}>
                  {checked===2&&<img src="/tick.png" alt={"tick"} />}
                </div>
              </label>
            </li>
            <li className="flex gap-3 text-gray-500 font-semibold items-center">
              <div className="text-xl font-medium">+</div>
              <div>Add new payment method</div>
            </li>
          </ul>
        </div>
      </div>
      <Table/>
    </div>
  );
}

export default App;
