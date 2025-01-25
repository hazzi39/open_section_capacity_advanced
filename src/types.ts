export interface SteelSection {
  Section: string;
  Designation: string;
  Phi_Mxx_kNm?: number;
  Phi_Mxy_kNm?: number;
  Phi_Vv_kN: number;
  Phi_Msx_kNm?: number;
  Phi_Msy_kNm?: number;
  Phi_Msxf_kNm?: number;
  Phi_Msxs_kNm?: number;
  Phi_Vy_kN?: number;
  Phi_Msyf_kNm?: number;
  Phi_Msys_kNm?: number;
  Phi_MsyR_kNm?: number;
  Phi_MsyL_kNm?: number;
}

export interface SavedResult extends SteelSection {
  timestamp: string;
}