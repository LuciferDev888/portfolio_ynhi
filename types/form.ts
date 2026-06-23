export interface LeadFormValues {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface LeadFormProps {
  campaignName: string;
  className?: string;
}
