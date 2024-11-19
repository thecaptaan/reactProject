import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import countriesData from "../../data/countryList";
import industriesList from "../../data/industriesList";
import "./styles/RegisterStartup.css";
import { startupSchema } from "../../utils/validate/Resolver";
import indiaState from "../../data/states/IndiaState";
export default function RegisterStartup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    useError,
  } = useForm({
    resolver: zodResolver(startupSchema),
  });
  const onRegisterStartup = (data) => {};
  return (
    <div className="registerStartup col cent">
      <h1>Register Startup</h1>
      <form
        className="register-startup-form col"
        method="post"
        onSubmit={handleSubmit(onRegisterStartup)}
      >
        <div className="input-container">
          <p className="input-label">
            Startup Name <span className="input-required">*</span>
          </p>
          <div className="input">
            <input
              type="text"
              {...register("startupName", { required: true })}
              placeholder="eg: Example Pvt. Ltd."
            />
          </div>
          {errors.startupName && (
            <p className="input-error">{errors.startupName.message}</p>
          )}
        </div>

        <div className="input-container">
          <p className="input-label">
            Startup Website <span className="input-required">*</span>
          </p>
          <div className="input">
            <input
              type="text"
              {...register("startupDomain", { required: true })}
              placeholder="eg: https://example.com"
            />
          </div>
          {errors.startupDomain && (
            <p className="input-error">{errors.startupDomain.message}</p>
          )}
        </div>
        <div className="input-container">
          <p className="input-label">
            Startup Email <span className="input-required">*</span>
          </p>
          <div className="input">
            <input
              type="text"
              {...register("startupEmail", { required: true })}
              placeholder="eg: sales@example.com"
            />
          </div>
          {errors.startupEmail && (
            <p className="input-error">{errors.startupEmail.message}</p>
          )}
        </div>
        <div className="double-container row">
          <div className="select">
            <p className="input-label">
              Startup Categories <span className="input-required">*</span>
            </p>
            <select {...register("startupType")}>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="ngo">NGO</option>
              <option value="partnership">Partnership</option>
              <option value="government">Government</option>
            </select>
          </div>
          <div className="select">
            <p className="input-label">
              Startup Industries <span className="input-required">*</span>
            </p>
            <select {...register("startupIndustries")}>
              {industriesList.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="double-container row">
          <div className="select">
            <p className="input-label">
              Country <span className="input-required">*</span>
            </p>
            <select {...register("startupCountry")} defaultValue={"IN"}>
              {countriesData.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="select">
            <p className="input-label">
              State <span className="input-required">*</span>
            </p>
            <select {...register("startupState")}>
              {indiaState.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p className="input-label">
            Startup Address <span className="input-required">*</span>
          </p>
          <input
            type="text"
            {...register("startupAddress", { required: true })}
            placeholder="eg: 123, Example Street, Example City, Example State, Example Country"
          />
          {errors.startupAddress && (
            <p className="input-error">{errors.startupAddress.message}</p>
          )}
        </div>

        <div className="input-container">
          <p className="input-label">Company GST</p>
          <div className="input">
            <input
              type="text"
              {...register("startupGST")}
              placeholder="eg: 10IKXPN7556W0Z9 (Fake GST)"
            />
          </div>
          {errors.startupTaxID && (
            <p className="input-error">{errors.startupTaxID.message}</p>
          )}
        </div>
        <div>
          <p className="input-label">
            Describe Your Startup in 300 words{" "}
            <span className="input-required">*</span>
          </p>
          <textarea
            placeholder="Startup Description"
            {...register("startupDescription", { required: true })}
          ></textarea>
          {errors.startupDescription && (
            <p className="input-error">{errors.startupDescription.message}</p>
          )}
        </div>
        <div className="register-startup-declaration row">
          <input
            type="checkbox"
            checked
            className="input-checkbox"
            {...register("startupOath", { required: true })}
          />
          <p>
            I hereby declare that all the information provided regarding my
            startup is true, accurate, and complete. As the owner, I am
            officially registering my startup and affirm the authenticity of all
            submitted details
          </p>
        </div>
        <button>Register Your Startup</button>
      </form>
    </div>
  );
}
