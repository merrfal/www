export const NameValidation = (value) => {
  let validation = { error: false };

  const minLength = 4;
  const maxLength = 80;
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Titulli duhet të përmbajë vetëm shkronja, numra dhe një hapësirë të vetme midis fjalëve`;
  }

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `Titulli duhet të jetë të paktën ${minLength} karaktere i gjatë`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Titulli duhet të jetë më pak se ${maxLength} karaktere`;
  }

  return validation;
};

export const DescriptionValidation = (value) => {
  let validation = { error: false };

  const minLength = 28;
  const maxLength = 320;
  const regex = /^[a-zA-Z0-9- ,.]{32,500}$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të përmbajë vetëm shkronja, numra, hapësira, viza, presje dhe pikë`;
  }

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të jetë të paktën ${minLength} karaktere i gjatë`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të jetë më pak se ${maxLength} karaktere`;
  }

  return validation;
};

export const PhoneValidation = (value) => {
  let validation = { error: false };

  const regex =
    /^((\+)?(383)?([1-9]{1}|[2]{1}[0-9]{1}|[3]{1}[0-9]{1}|[4]{1}[0-9]{1}|[5]{1}[0-9]{1}|[6]{1}[0-9]{1}|[7]{1}[0-9]{1})[0-9]{10,15})$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Numri i telefonit është i pavlefshëm`;
  }

  return validation;
};

export const AddressValidation = (value) => {
  let validation = { error: false };

  const minLength = 10;
  const maxLength = 80;
  const regex = /^[a-zA-Z0-9\s,'-]*$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Adresa mund të përmbajë vetëm shkronja, numra, hapsira dhe karakteret ', -, .'`;
  }

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `Adresa duhet të jetë së paku ${minLength} karaktere`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Adresa nuk mund të jetë më shumë se ${maxLength} karaktere`;
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
    validation.message = `Emri duhet të jetë së paku ${minLength} karaktere`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Emri nuk mund të jetë më shumë se ${maxLength} karaktere`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Emri duhet të përmbajë vetëm shkronja, numra dhe një hapësirë të vetme midis fjalëve`;
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
    validation.message = `Mbiemri duhet të jetë së paku ${minLength} karaktere`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Mbiemri nuk mund të jetë më shumë se ${maxLength} karaktere`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Mbiemri duhet të përmbajë vetëm shkronja, numra dhe një hapësirë të vetme midis fjalëve`;
  }

  return validation;
};

export const UserBioValidation = (value) => {
  let validation = { error: false };

  const minLength = 32;
  const maxLength = 500;
  const regex = /^[a-zA-Z0-9- ,.]{32,500}$/;

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të përmbajë vetëm shkronja, numra, hapësira, viza, presje dhe pikë`;
  }

  if (value.length < minLength) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të jetë të paktën ${minLength} karaktere i gjatë`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Përshkrimi duhet të jetë më pak se ${maxLength} karaktere`;
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
    validation.message = `Emri unik duhet të jetë së paku ${minLength} karaktere`;
  }

  if (value.length > maxLength) {
    validation.error = true;
    validation.message = `Emri unik nuk mund të jetë më shumë se ${maxLength} karaktere`;
  }

  if (!regex.test(value)) {
    validation.error = true;
    validation.message = `Emri unik duhet të përmbajë vetëm shkronja dhe numra pa hapësira dhe pa karaktere speciale`;
  }

  return validation;
};

export const CityValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = `Ju lutem zgjidhni qytetin ku produkti dhurohet`;
  }

  return validation;
};

export const CategoryValidation = (value) => {
  const validation = { error: false };

  if (value === "") {
    validation.error = true;
    validation.message = `Produkti duhet te ketë një kategori përkatëse`;
  }

  return validation;
};

export const ModeValidation = (value) => {
  const validation = { error: false };

  if (value !== false && value !== true) {
    validation.error = true;
    validation.message = `Zgjidheni një opsion për mënyrën e dhurimit të produktit`;
  }

  return validation;
};

export const ImagesValidation = (value) => {
  const validation = { error: false };

  if (value.length < 1) {
    validation.error = true;
    validation.message = `Së paku një foto duhet të ngarkohet për ta shfaqur produktin`;
  }

  return validation;
};
