"use client";
import React, { useState } from "react";
import Button from "@/components/button";
import DownloadApp from "@/components/downloadApp";
import { CreateListYourToken } from "@/graphql/createListYourToken";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import classNames from "classnames";
import styles from "./listYourToken.module.scss";
export default function ListYourToken() {
  const [inputValue, setInputValue] = useState({
    projectName: "",
    projectWebsite: "",
    email: "",
    relationship: "",
    blockchain: "",
    explorerLink: "",
    projectTicker: "",
    tags: "",
    shortDescription: "",
    longDescription: "",
    logo: "",
    twitter: "",
    telegram: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    reddit: "",
    discord: "",
    youtube: "",
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
    if (!inputValue.projectName || inputValue.projectName.trim() === "") {
      newErrors.projectName = "Project Name is required";
      isValid = false;
    }
    if (!inputValue.projectWebsite || inputValue.projectWebsite.trim() === "") {
      newErrors.projectWebsite = "Project Website is required";
      isValid = false;
    }
    if (!inputValue.email || inputValue.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!EMAIL_REGEX.test(inputValue.email)) {
      newErrors.email = "Please enter a valid email!";
      isValid = false;
    }
    if (!inputValue.relationship || inputValue.relationship.trim() === "") {
      newErrors.relationship = "Relationship with the Project is required";
      isValid = false;
    }
    if (!inputValue.blockchain || inputValue.blockchain.trim() === "") {
      newErrors.blockchain = "Blockchain name is required";
      isValid = false;
    }
    if (!inputValue.explorerLink || inputValue.explorerLink.trim() === "") {
      newErrors.explorerLink = "Block Explorer Link is required";
      isValid = false;
    }
    if (!inputValue.projectTicker || inputValue.projectTicker.trim() === "") {
      newErrors.projectTicker = "Project Ticker/Symbol is required";
      isValid = false;
    }
    if (!inputValue.tags || inputValue.tags.trim() === "") {
      newErrors.tags = "Cryptoasset Tags are required";
      isValid = false;
    }
    if (!inputValue.shortDescription || inputValue.shortDescription.trim() === "") {
      newErrors.shortDescription = "One-liner description is required";
      isValid = false;
    }
    if (!inputValue.longDescription || inputValue.longDescription.trim() === "") {
      newErrors.longDescription = "Detailed Project Description is required";
      isValid = false;
    }
    if (!inputValue.logo || inputValue.logo.trim() === "") {
      newErrors.logo = "Logo URL is required";
      isValid = false;
    }
    if (!inputValue.twitter || inputValue.twitter.trim() === "") {
      newErrors.twitter = "Twitter is required";
      isValid = false;
    }
    if (!inputValue.telegram || inputValue.telegram.trim() === "") {
      newErrors.telegram = "Telegram Channel/Group is required";
      isValid = false;
    }
    if (!inputValue.facebook || inputValue.facebook.trim() === "") {
      newErrors.facebook = "Facebook is required";
      isValid = false;
    }
    if (!inputValue.instagram || inputValue.instagram.trim() === "") {
      newErrors.instagram = "Instagram is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const [createListYourToken] = useMutation(CreateListYourToken, {
    onCompleted: (res) => {
      toast.success("Application submitted successfully!");
      setInputValue({
        projectName: "",
        projectWebsite: "",
        email: "",
        relationship: "",
        blockchain: "",
        explorerLink: "",
        projectTicker: "",
        tags: "",
        shortDescription: "",
        longDescription: "",
        logo: "",
        twitter: "",
        telegram: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        reddit: "",
        discord: "",
        youtube: "",
      });
      setErrors({});
    },
    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
    },
  });
  const handleOnSubmit = async () => {
    if (isValidate()) {
      await createListYourToken({
        variables: {
          data: {
            projectName: inputValue?.projectName,
            projectWebsite: inputValue?.projectWebsite,
            blockchainName: inputValue?.blockchain,
            email: inputValue?.email,
            cryptoassetTags: inputValue?.tags,
            explorerLink: inputValue?.explorerLink,
            projectTicker: inputValue?.projectTicker,
            logo: inputValue?.logo,
            shortDescription: inputValue?.shortDescription,
            longDescription: inputValue?.longDescription,
            discord: inputValue?.discord,
            reddit: inputValue?.reddit,
            relationship: inputValue?.relationship,
            instagram: inputValue?.instagram,
            linkedin: inputValue?.linkedin,
            facebook: inputValue?.facebook,
            telegram: inputValue?.telegram,
            twitter: inputValue?.twitter,
            youtube: inputValue?.youtube,
            publishedAt: formattedDate,
          },
        },
      });
    }
  };
  return (
    <>
      <div className={styles.listYourToken}>
        <div className="container-md">
          <div className={styles.box}>
            <div className={styles.text}>
              <span>APPLY NOW</span>
              <h2>Fill out Application.</h2>
              <p>Make sure to enter your Details correctly</p>
            </div>
            <div className={styles.threeCol}>
              <div className={styles.input}>
                <label>Project Name*</label>
                <input type="text" placeholder="Project Name" name="projectName" value={inputValue?.projectName} onChange={handleOnChange} />
                {errors?.projectName && <span className={styles.errorText}>{errors?.projectName}</span>}
              </div>
              <div className={styles.input}>
                <label>Project Website*</label>
                <input type="text" placeholder="www.demo.com" name="projectWebsite" value={inputValue?.projectWebsite} onChange={handleOnChange} />
                {errors?.projectWebsite && <span className={styles.errorText}>{errors?.projectWebsite}</span>}
              </div>
              <div className={styles.input}>
                <label>Email ID*</label>
                <input type="text" placeholder="company@company.com" name="email" value={inputValue?.email} onChange={handleOnChange} />
                {errors?.email && <span className={styles.errorText}>{errors?.email}</span>}
              </div>
            </div>
            <div className={styles.twoCol}>
              <div className={styles.input}>
                <label>Relationship with the Project*</label>
                <input
                  type="text"
                  placeholder="Relationship with the Project"
                  name="relationship"
                  value={inputValue?.relationship}
                  onChange={handleOnChange}
                />
                {errors?.relationship && <span className={styles.errorText}>{errors?.relationship}</span>}
              </div>
              <div className={styles.input}>
                <label>Platform of Contract Address (Blockchain name)*</label>
                <input type="text" placeholder="Blockchain name" name="blockchain" value={inputValue?.blockchain} onChange={handleOnChange} />
                {errors?.blockchain && <span className={styles.errorText}>{errors?.blockchain}</span>}
              </div>
              <div className={styles.input}>
                <label>Block Explorer Link*</label>
                <input type="text" placeholder="Block Explorer Link" name="explorerLink" value={inputValue?.explorerLink} onChange={handleOnChange} />
                {errors?.explorerLink && <span className={styles.errorText}>{errors?.explorerLink}</span>}
              </div>
              <div className={styles.input}>
                <label>Project Ticker/Symbol (e.g. BTC, ETH, XRP, HOT)*</label>
                <input
                  type="text"
                  placeholder="Project Ticker/Symbol*"
                  name="projectTicker"
                  value={inputValue?.projectTicker}
                  onChange={handleOnChange}
                />
                {errors?.projectTicker && <span className={styles.errorText}>{errors?.projectTicker}</span>}
              </div>
              <div className={styles.input}>
                <label>Cryptoasset Tags - Sector/Categories (e.g. Dapp, Utility, Gaming)*</label>
                <input
                  type="text"
                  placeholder="Cryptoasset Tags - Sector/Categories"
                  name="tags"
                  value={inputValue?.tags}
                  onChange={handleOnChange}
                />
                {errors?.tags && <span className={styles.errorText}>{errors?.tags}</span>}
              </div>
              <div className={styles.input}>
                <label>One-liner description*</label>
                <input
                  type="text"
                  placeholder="One-liner description"
                  name="shortDescription"
                  value={inputValue?.shortDescription}
                  onChange={handleOnChange}
                />
                {errors?.shortDescription && <span className={styles.errorText}>{errors?.shortDescription}</span>}
              </div>
              {/* <div className={classNames(styles.input, styles.oneColumn)}>
                <label>One-liner description</label>
                <input type="text" placeholder="One-liner description" name="shortDescription" value={inputValue?.shortDescription} onChange={handleOnChange} />
              </div> */}
              <div className={classNames(styles.input, styles.oneColumn)}>
                <label>Detailed Project Description*</label>
                <textarea
                  placeholder="Detailed Project Description"
                  name="longDescription"
                  value={inputValue.longDescription}
                  onChange={handleOnChange}
                ></textarea>
                {errors?.longDescription && <span className={styles.errorText}>{errors?.longDescription}</span>}
              </div>
              <div className={classNames(styles.input, styles.oneColumn)}>
                <label>Link to Logo (PNG, 200x200, Transparent Background)*</label>
                <input type="text" placeholder="Link to Logo" name="logo" value={inputValue?.logo} onChange={handleOnChange} />
                {errors?.logo && <span className={styles.errorText}>{errors?.logo}</span>}
              </div>
            </div>
            <div className={styles.threeCol}>
              <div className={styles.input}>
                <label>Twitter*</label>
                <input type="text" placeholder="Twitter" name="twitter" value={inputValue?.twitter} onChange={handleOnChange} />
                {errors?.twitter && <span className={styles.errorText}>{errors?.twitter}</span>}
              </div>
              <div className={styles.input}>
                <label>Telegram Channel/Group*</label>
                <input type="text" placeholder="Telegram Channel/Group" name="telegram" value={inputValue?.telegram} onChange={handleOnChange} />
                {errors?.telegram && <span className={styles.errorText}>{errors?.telegram}</span>}
              </div>
              <div className={styles.input}>
                <label>Facebook*</label>
                <input type="text" placeholder="Facebook" name="facebook" value={inputValue?.facebook} onChange={handleOnChange} />
                {errors?.facebook && <span className={styles.errorText}>{errors?.facebook}</span>}
              </div>
              <div className={styles.input}>
                <label>Instagram*</label>
                <input type="text" placeholder="Instagram" name="instagram" value={inputValue?.instagram} onChange={handleOnChange} />
                {errors?.instagram && <span className={styles.errorText}>{errors?.instagram}</span>}
              </div>
              <div className={styles.input}>
                <label>LinkedIn</label>
                <input type="text" placeholder="LinkedIn" name="linkedin" value={inputValue?.linkedin} onChange={handleOnChange} />
              </div>
              <div className={styles.input}>
                <label>Reddit</label>
                <input type="text" placeholder="Reddit" name="reddit" value={inputValue?.reddit} onChange={handleOnChange} />
              </div>
              <div className={styles.input}>
                <label>Discord</label>
                <input type="text" placeholder="Discord" name="discord" value={inputValue?.discord} onChange={handleOnChange} />
              </div>
              <div className={classNames(styles.input, styles.oneColumn)}>
                <label>YouTube</label>
                <input type="text" placeholder="YouTube" name="youtube" value={inputValue?.youtube} onChange={handleOnChange} />
              </div>
            </div>
            <div className={styles.centerButton} onClick={handleOnSubmit}>
              <Button text="Submit" />
            </div>
          </div>
        </div>
      </div>
      <DownloadApp />
    </>
  );
}