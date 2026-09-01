export interface IContactFormData {
  name: string;
  email: string;
  phoneNo: number;
  subject: string;
  message: string;
}

export interface IBlinkingBox {
  id: number;
  col: number;
  row: number;
  delay: number;
  duration: number;
}

export interface ITestimonialData {
  text: string;
  name: string;
  role: string;
  avatar: string;
}
