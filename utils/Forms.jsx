import { NO_AVATAR, NO_COVER } from "@/configs/Constants"
import { Translation } from "./Translations"

export const NameValidation = (value) => {
  let validation = { error: false }

  const minLength = 4
  const maxLength = 80
  const regex = /^[\s\S]*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("name-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {
    validation.error = true
    validation.message = `${Translation("name-can-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("product-name-regex-validations")
  }

  return validation
}

export const DescriptionValidation = (value) => {
  let validation = { error: false }

  const minLength = 10
  const maxLength = 320
  const regex = /^[\s\S]*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("description-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {
    validation.error = true
    validation.message = `${Translation("description-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("product-description-regex-validations")
  }

  return validation
}

export const PhoneValidation = (value) => {
  let validation = { error: false }

  const regex = /^\d{8,9}$/
  
  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("phone-number-is-not-valid")
  }

  return validation
}

export const PhoneCodeValidation = (value) => {
  let validation = { error: false }
  
  if (value !== "+383" && value !== "+389" && value !== "+355") {
    validation.error = true
    validation.message = Translation("phone-code-is-not-valid")
  }

  return validation
}

export const AddressValidation = (value) => {
  let validation = { error: false }

  const minLength = 6
  const maxLength = 80
  const regex = /^[a-zA-Z0-9ëËÇç,_-\s()\[\].]*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("address-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {
    validation.error = true
    validation.message = `${Translation("address-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("address-regex-validations")
  }

  return validation
}

export const UserNameValidation = (value) => {
  let validation = { error: false }

  const minLength = 3
  const maxLength = 20
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("first-name-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {3
    validation.error = true
    validation.message = `${Translation("first-name-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("name-regex-validation")
  }

  return validation
}

export const UserSurnameValidation = (value) => {
  let validation = { error: false }

  const minLength = 3
  const maxLength = 20
  const regex = /^[a-zA-Z0-9]+(?:[ ]?[a-zA-Z0-9]+)*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("surname-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {
    validation.error = true
    validation.message = `${Translation("surname-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("surname-regex-validation")
  }

  return validation
}

export const SlugBuilder = (value) => {
  return (
    value
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .toLowerCase() +
    "-" +
    Math.floor(Math.random() * (300 - 100 + 1)) +
    100
  )
}

export const UsernameBuilderAndValidation = (value) => {
  const regex = /^[a-zA-Z0-9]+$/
  const username = value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, () => Math.floor(Math.random() * 10))
  return regex.test(username)
}

export const UsernameValidation = (value) => {
  const validation = { error: false }

  const minLength = 3
  const maxLength = 20
  const regex = /^[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]+)*$/

  if (value.length < minLength) {
    validation.error = true
    validation.message = `${Translation("username-needs-to-be-at-least")} ${minLength} ${Translation("characters")}`
  }

  if (value.length > maxLength) {
    validation.error = true
    validation.message = `${Translation("username-can-not-have-less-than")} ${maxLength} ${Translation("characters")}`
  }

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("username-regex-validation")
  }

  return validation
}

export const CityValidation = (value) => {
  const validation = { error: false }

  if (value === ""  || value === undefined || value === null) {
    validation.error = true
    validation.message = Translation("select-one-city")
  }

  return validation
}

export const CountryValidation = (value) => {
  const validation = { error: false }

  if (value === "") {
    validation.error = true
    validation.message = Translation("select-one-country")
  }

  return validation
}

export const CategoryValidation = (value) => {
  const validation = { error: false }

  if (value === "") {
    validation.error = true
    validation.message = Translation("select-one-category")
  }

  return validation
}

export const EmailValidation = (value) => {
  const validation = { error: false }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!regex.test(value)) {
    validation.error = true
    validation.message = Translation("email-is-not-valid")
  }
}

export const ModeValidation = (value) => {
  const validation = { error: false }

  if (value === "") {
    validation.error = true
    validation.message = Translation("select-the-chosen-giving-mode")
  }

  return validation
}

export const ImagesValidation = (value) => {
  const validation = { error: false }

  if (value.length < 1) {
    validation.error = true
    validation.message = Translation("at-least-one-image-needs-to-be-uploaded")
  }

  return validation
}

export const GalleryImageValidation = (images) => {
  const validation = { error: false }

  // so we need here a complex validation, there is an array that contains objexts, objects can't be more than 4 items,
  // if it contains then return false, beside that the obect is trcutred like this: { url: 'mustbefirebastestoragelink', id: 'mustbeuniqueid', isMain: needs to be true or false, and only one can be true of them all, filename needs to be with the extension }
  // anything more than those properties will trhow an error and the upload will not be accepted

  if (images.length > 4) {
    validation.error = true
    validation.message = Translation("maximum-4-images-allowed")
  }

  else {
    let mainIs = 0

    images.map((image) => {
      if (image.isMain) mainIs++

      if (image.url.includes("firebasestorage.googleapis.com") === false) {
        validation.error = true
        validation.message = Translation("image-url-is-not-valid")
      }

      if (typeof image.id === 'string' && image.id.length < 10) {
        validation.error = true
        validation.message = Translation("image-id-is-not-valid")
      }

      if (!image.url || !image.id || !image.isMain || !image.filename) {
        validation.error = true
        validation.message = Translation("image-object-structure-is-not-valid")
      }
    })

    if (mainIs > 1) {
      validation.error = true
      validation.message = Translation("only-one-main-image-allowed")
    }
  }

  return validation
}

export const AvatarValidation = (value) => {
  const validation = { error: false }

  if (value !== NO_AVATAR) {
    if (value?.includes("google") === false && value?.includes('firebasestorage') === false) {
      validation.error = true
      validation.message = Translation("avatar-url-is-not-valid")
    }
  
    if (typeof value !== 'string') {
      validation.error = true
      validation.message = Translation("avatar-url-is-not-valid")
    }
  }
  
  return validation
}

export const CoverValidation = (value) => {
  const validation = { error: false }

  if (value !== NO_COVER) {
    if (value?.includes("google") === false && value?.includes('firebasestorage') === false) {
      validation.error = true
      validation.message = Translation("cover-url-is-not-valid")
    }
  
    if (typeof value !== 'string') {
      validation.error = true
      validation.message = Translation("cover-url-is-not-valid")
    }
  }

  return validation
}