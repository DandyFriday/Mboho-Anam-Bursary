// export interface button {
//   text: string;
//   navigateTo?: string;
//   className?: string;
//   scrollTo?: string;
//   icon?: JSX.Element;
// }

// export interface imageextras {
//   iconBg?: string;
//   icon: JSX.Element;
//   topText: JSX.Element;
//   bottomText: JSX.Element;
// }

// export interface properties {
//   img: string;
//   title: string;
//   features: string[];
//   price: string;
// }

// export interface locations {
//   img: string;
//   noOfProperties: number;
//   location: string;
// }

// export interface AppDownloadButtonInterface {
//   icon: JSX.Element;
//   topText: string;
//   bottomText: string;
// }

// export interface FooterLinksInterface {
//   header: string;
//   links: string[];
// }
// export interface ContactInfoInterface {
//   icon: JSX.Element;
//   contact: string;
// }

// export interface InputFieldInterface {
//   label: string;
//   type: string;
//   name: string;
//   className?: string;
//   handleChange: (params: React.ChangeEvent<HTMLInputElement>) => void;
//   value: string;
//   placeholder?: string;
// }



// ==============================================
// BUTTON INTERFACE (updated and error-free)
// ==============================================
export interface ButtonProps {
  text: string;
  navigateTo?: string;
  className?: string;
  scrollTo?: string;
  icon?: JSX.Element;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}



// ==============================================
// IMAGE EXTRAS INTERFACE
// ==============================================
export interface ImageExtras {
  iconBg?: string;
  icon: JSX.Element;
  topText: JSX.Element;
  bottomText: JSX.Element;
}



// ==============================================
// PROPERTIES INTERFACE
// ==============================================
export interface Properties {
  img: string;
  title: string;
  features: string[];
  price: string;
}



// ==============================================
// LOCATIONS INTERFACE
// ==============================================
export interface Locations {
  img: string;
  noOfProperties: number;
  location: string;
}



// ==============================================
// APP DOWNLOAD BUTTON INTERFACE
// ==============================================
export interface AppDownloadButtonInterface {
  icon: JSX.Element;
  topText: string;
  bottomText: string;
}



// ==============================================
// FOOTER LINKS INTERFACE
// ==============================================
export interface FooterLinksInterface {
  header: string;
  links: string[];
}



// ==============================================
// CONTACT INFO INTERFACE
// ==============================================
export interface ContactInfoInterface {
  icon: JSX.Element;
  contact: string;
}



// ==============================================
// INPUT FIELD INTERFACE
// ==============================================
export interface InputFieldInterface {
  label: string;
  type: string;
  name: string;
  className?: string;
  handleChange: (params: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}