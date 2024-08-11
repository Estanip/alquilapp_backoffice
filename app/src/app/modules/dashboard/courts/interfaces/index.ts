export interface ICourt {
  _id?: string;
  available_from: string;
  available_until: string;
  court_number?: number;
  is_enabled: boolean;
  surface_type: string;
}

export interface ICourtTableElement {
  _id?: string;
  From: string;
  To: string;
  Number: number;
  Enabled: boolean | string;
  Surface: string;
}
