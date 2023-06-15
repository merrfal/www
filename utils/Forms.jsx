import { Translation } from "./Translations";

export const NameValidation = (value) => {
  let validation = { error: false };

  const minLength = 4;
  const maxLength = 80;
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("name-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("name-can-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("product-name-regex-validations");
  }

  return validation;
};

export const DescriptionValidation = (value) => {
  let validation = { error: false };

  const minLength = 28;
  const maxLength = 320;
  const regex = /^[a-zA-Z0-9\s_()&, .-]+$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("description-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("description-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("product-description-regex-validations");
  }

  return validation;
};

export const PhoneValidation = (value) => {
  let validation = { error: false };

  const regex = /^((\+)?(383)?([1-9]{1}|[2]{1}[0-9]{1}|[3]{1}[0-9]{1}|[4]{1}[0-9]{1}|[5]{1}[0-9]{1}|[6]{1}[0-9]{1}|[7]{1}[0-9]{1})[0-9]{10,15})$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("phone-number-is-not-valid");
  }

  return validation;
};

export const AddressValidation = (value) => {
  let validation = { error: false };

  const minLength = 10;
  const maxLength = 40;
  const regex = /^[a-zA-Z0-9\s,'.-]*$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("address-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("address-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("address-regex-validations");
  }

  return validation;
};

export const UserNameValidation = (value) => {
  let validation = { error: false };

  const minLength = 3;
  const maxLength = 20;
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("first-name-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("first-name-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("name-regex-validation");
  }

  return validation;
};

export const UserSurnameValidation = (value) => {
  let validation = { error: false };

  const minLength = 3;
  const maxLength = 20;
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("surname-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("surname-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("surname-regex-validation");
  }

  return validation;
};

export const SlugBuilder = (value) => {
  return (
    value
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .toLowerCase() +
    "-" +
    Math.floor(Math.random() * (300 - 100 + 1)) +
    100
  );
};

export const UsernameBuilderAndValidation = (value) => {
  const regex = /^[a-zA-Z0-9]+$/;
  const username = value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, () => Math.floor(Math.random() * 10));
  return regex.test(username);
};

export const UsernameValidation = (value) => {
  const validation = { error: false };

  const minLength = 3;
  const maxLength = 20;
  const regex = /^[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$/;

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `${Translation("username-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `${Translation("username-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("username-regex-validation");
  }

  return validation;
};

export const CityValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = Translation("select-one-city");
  }

  return validation;
};

export const CountryValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = Translation("select-one-country");
  }

  return validation;
};

export const CategoryValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = Translation("select-one-category");
  }

  return validation;
};

export const EmailValidation = (value) => {
  const validation = { error: false };

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = Translation("email-is-not-valid");
  }
}

export const ModeValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = Translation("select-the-chosen-giving-mode");
  }

  return validation;
};

export const ImagesValidation = (value) => {
  const validation = { error: false };

  if (value.length < 1) {
    validation.error = true;
    validation.message = Translation("at-least-one-image-needs-to-be-uploaded");
  }

  return validation;
};