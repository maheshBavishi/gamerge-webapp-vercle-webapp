"use client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CreateAmbassador } from "@/graphql/createAmbassador";
import Button from "@/components/button";
import toast from "react-hot-toast";
import styles from "./fillOutApplication.module.scss";
export default function FillOutApplication() {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    country: "",
    telegram: "",
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    about: "",
  });
  const [errors, setErrors] = useState({});
  const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const formattedDate = new Date().toISOString();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const isValidate = () => {
    let isValid = true;
    const newErrors = {};
    if (!inputValue.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!inputValue.email || inputValue.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!EMAIL_REGEX.test(inputValue.email)) {
      newErrors.email = "Please enter a valid email!";
      isValid = false;
    }
    if (!inputValue.telegram.trim()) {
      newErrors.telegram = "Telegram ID is required";
      isValid = false;
    }
    if (!inputValue.twitter.trim()) {
      newErrors.twitter = "Twitter/X Username is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const [createAmbassador] = useMutation(CreateAmbassador, {
    onCompleted: (res) => {
      toast.success("Application submitted successfully!!");
      setInputValue({
        fullName: "",
        email: "",
        country: "",
        telegram: "",
        twitter: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        about: "",
      });
      setErrors({});
    },
    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleOnSubmit = async () => {
    if (isValidate()) {
      await createAmbassador({
        variables: {
          data: {
            fullName: inputValue?.fullName,
            email: inputValue?.email,
            country: inputValue?.country,
            telegramID: inputValue?.telegram,
            facebook: inputValue?.facebook,
            instagram: inputValue?.instagram,
            linkedin: inputValue?.linkedin,
            twitter: inputValue?.twitter,
            about: inputValue?.about,
            publishedAt: formattedDate,
          },
        },
      });
    }
  };

  const handleOnClearForm = () => {
    setInputValue({
      fullName: "",
      email: "",
      country: "",
      telegram: "",
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      about: "",
    });
    setErrors({});
  };
  return (
    <div className={styles.fillOutApplication}>
      <div className="container-md">
        <div className={styles.box}>
          <div className={styles.text}>
            <span>APPLY NOW</span>
            <h2>Fill out Application.</h2>
            <p>Make sure to enter your Details correctly</p>
          </div>
          <div className={styles.twoCol}>
            <div className={styles.input}>
              <label>Full Name*</label>
              <input type="text" placeholder="ex. John Smith" name="fullName" value={inputValue?.fullName} onChange={handleOnChange} />
              {errors?.fullName && <span className={styles.errorText}>{errors?.fullName}</span>}
            </div>
            <div className={styles.input}>
              <label>Email*</label>
              <input type="text" placeholder="ex. company@company.com" name="email" value={inputValue?.email} onChange={handleOnChange} />
              {errors?.email && <span className={styles.errorText}>{errors?.email}</span>}
            </div>
          </div>
          <div className={styles.threeCol}>
            <div className={styles.input}>
              <label>Country</label>
              <input type="text" placeholder="Select country" name="country" value={inputValue?.country} onChange={handleOnChange} />
            </div>
            <div className={styles.input}>
              <label>Telegram ID*</label>
              <input type="text" placeholder="xxx-xxx-xx-x" name="telegram" value={inputValue?.telegram} onChange={handleOnChange} />
              {errors?.telegram && <span className={styles.errorText}>{errors?.telegram}</span>}
            </div>
            <div className={styles.input}>
              <label>X (formerly Twitter)*</label>
              <input type="text" placeholder="Instagram Username" name="twitter" value={inputValue?.twitter} onChange={handleOnChange} />
              {errors?.twitter && <span className={styles.errorText}>{errors?.twitter}</span>}
            </div>
            <div className={styles.input}>
              <label>Facebook</label>
              <input type="text" placeholder="Your Facebook Profile Link" name="facebook" value={inputValue?.facebook} onChange={handleOnChange} />
            </div>
            <div className={styles.input}>
              <label>Instagram</label>
              <input type="text" placeholder="Instagram Username" name="instagram" value={inputValue?.instagram} onChange={handleOnChange} />
            </div>
            <div className={styles.input}>
              <label>Linkedin</label>
              <input type="text" placeholder="Linkedin Profile Link" name="linkedin" value={inputValue?.linkedin} onChange={handleOnChange} />
            </div>
          </div>
          <div className={styles.input}>
            <label>About you</label>
            <textarea placeholder="Type here" name="about" value={inputValue?.about} onChange={handleOnChange}></textarea>
          </div>
          <div className={styles.buttonAlignment}>
            <div onClick={handleOnClearForm}>
              <Button text="Clear Form" fillwhite />
            </div>
            <div onClick={handleOnSubmit}>
              <Button text="Submit" fillwhite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}