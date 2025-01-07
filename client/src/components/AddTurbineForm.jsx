import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { MOCK_TURBINE } from "../data";

const baseURL = "http://localhost:3000/";
const isDevelopment = process.env.NODE_ENV === "development";

function triggerToastAlert(type, message) {
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

export default function AddTurbineForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onInvalid = () => {
    triggerToastAlert("error", "Fix error(s) to continue");
  };

  const onSubmit = (data) => {
    if (isDevelopment) {
      console.log(data);
      MOCK_TURBINE.push({
        id: MOCK_TURBINE.length + 1,
        site: "A serious wind site",
        siteId: 1,
        location: "Location 1",
        ...data,
      });
      triggerToastAlert("success", "Turbine added!");
    } else {
      console.log(data, "data");
      axios
        .post(baseURL + "turbine", data)
        .then(function (response) {
          triggerToastAlert("success", "Turbine added!");
          console.log(response);
        })
        .catch(function (error) {
          triggerToastAlert("error", "Error adding turbine");
          console.log(error);
        });
    }
  };

  return (
    <form
      className="add-turbine-form"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <label className="add-turbine-form__label">
        Turbine name:
        <input
          type="text"
          {...register("name", { required: "This is required" })}
        />
        {errors.name && (
          <span className="turbine-form-error-msg">{errors.name.message}</span>
        )}
      </label>
      <label className="add-turbine-form__label">
        Turbine capacity? (in MW):
        <input
          type="number"
          {...register("capacity", {
            required: "This is required",
            min: { value: 0, message: "Value must be greater than 0" },
          })}
        />
        {errors.capacity && (
          <span className="turbine-form-error-msg">
            {errors.capacity.message}
          </span>
        )}
      </label>
      <label className="add-turbine-form__label">
        Coords latitude:
        <input
          type="number"
          step="any"
          {...register("coords_lat", { required: "This is required" })}
        />
        {errors.coords_lat && (
          <span className="turbine-form-error-msg">
            {errors.coords_lat.message}
          </span>
        )}
      </label>
      <label className="add-turbine-form__label">
        Coords longitude:
        <input
          type="number"
          step="any"
          {...register("coords_long", { required: "This is required" })}
        />
        {errors.coords_long && (
          <span className="turbine-form-error-msg">
            {errors.coords_long.message}
          </span>
        )}
      </label>
      <label className="add-turbine-form__label">
        Last inspection:
        <input
          type="date"
          placeholder="lastInspection"
          {...register("lastInspection", { required: "This is required" })}
        />
        {errors.lastInspection && (
          <span className="turbine-form-error-msg">
            {errors.lastInspection.message}
          </span>
        )}
      </label>
      <label className="add-turbine-form__label">
        Status:
        <select {...register("status", { required: "This is required" })}>
          <option value="">Select...</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {errors.status && (
          <span className="turbine-form-error-msg">
            {errors.status.message}
          </span>
        )}
      </label>
      <input type="submit" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
}
