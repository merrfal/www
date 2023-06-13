import * as Cities from "./cities";

Object.keys(Cities).forEach((key) => {
    if(Cities[key].length === 0) {
        console.log("No cities found for" + " " + key);
    }
})

export const AllCountries = [
    { 
        name: "Albania", 
        iso_code: "AL", 
        cities: Cities.AL_Cities
    },
    {
        name: "Kosovo",
        iso_code: "XK",
        cities: Cities.XK_Cities
    },
    {
        name: "Macedonia, The Former Yugoslav Republic of",
        iso_code: "MK",
        cities: Cities.MK_Cities
    },
    { 
        name: "Afghanistan", 
        iso_code: "AF", 
        cities: Cities.AF_Cities
    },
    { 
        name: "Åland Islands", 
        iso_code: "AX", 
        cities: Cities.AX_Cities
    },
    { 
        name: "Algeria", 
        iso_code: "DZ", 
        cities: Cities.DZ_Cities
    },
    { 
        name: "American Samoa", 
        iso_code: "AS", 
        cities: Cities.AS_Cities
    },
    { 
        name: "AndorrA", 
        iso_code: "AD", 
        cities: Cities.AD_Cities
    },
    { 
        name: "Angola", 
        iso_code: "AO", 
        cities: Cities.AO_Cities
    },
    { 
        name: "Anguilla", 
        iso_code: "AI", 
        cities: Cities.AI_Cities
    },
    { 
        name: "Antarctica", 
        iso_code: "AQ", 
        cities: Cities.AQ_Cities
    },
    { 
        name: "Antigua and Barbuda", 
        iso_code: "AG", 
        cities: Cities.AG_Cities
    },
    { 
        name: "Argentina", 
        iso_code: "AR", 
        cities: Cities.AR_Cities
    },
    { 
        name: "Armenia", 
        iso_code: "AM", 
        cities: Cities.AM_Cities
    },
    { 
        name: "Aruba", 
        iso_code: "AW", 
        cities: Cities.AW_Cities
    },
    { 
        name: "Australia", 
        iso_code: "AU", 
        cities: Cities.AU_Cities
    },
    { 
        name: "Austria", 
        iso_code: "AT", 
        cities: Cities.AT_Cities
    },
    { 
        name: "Azerbaijan", 
        iso_code: "AZ", 
        cities: Cities.AZ_Cities
    },
    { 
        name: "Bahamas", 
        iso_code: "BS", 
        cities: Cities.BS_Cities
    },
    { 
        name: "Bahrain", 
        iso_code: "BH", 
        cities: Cities.BH_Cities
    },
    { 
        name: "Bangladesh", 
        iso_code: "BD", 
        cities: Cities.BD_Cities
    },
    { 
        name: "Barbados", 
        iso_code: "BB", 
        cities: Cities.BB_Cities
    },
    { 
        name: "Belarus", 
        iso_code: "BY", 
        cities: Cities.BY_Cities
    },
    { 
        name: "Belgium", 
        iso_code: "BE", 
        cities: Cities.BE_Cities
    },
    { 
        name: "Belize", 
        iso_code: "BZ", 
        cities: Cities.BZ_Cities
    },
    { 
        name: "Benin", 
        iso_code: "BJ", 
        cities: Cities.BJ_Cities
    },
    { 
        name: "Bermuda", 
        iso_code: "BM", 
        cities: Cities.BM_Cities
    },
    { 
        name: "Bhutan", 
        iso_code: "BT", 
        cities: Cities.BT_Cities
    },
    { 
        name: "Bolivia", 
        iso_code: "BO", 
        cities: Cities.BO_Cities
    },
    { 
        name: "Bosnia and Herzegovina", 
        iso_code: "BA", 
        cities: Cities.BA_Cities
    },
    { 
        name: "Botswana", 
        iso_code: "BW", 
        cities: Cities.BW_Cities
    },
    { 
        name: "Brazil", 
        iso_code: "BR", 
        cities: Cities.BR_Cities
    },
    { 
        name: "British Indian Ocean Territory", 
        iso_code: "IO", 
        cities: Cities.IO_Cities
    },
    { 
        name: "Brunei Darussalam", 
        iso_code: "BN", 
        cities: Cities.BN_Cities
    },
    { 
        name: "Bulgaria", 
        iso_code: "BG", 
        cities: Cities.BG_Cities
    },
    { 
        name: "Burkina Faso", 
        iso_code: "BF", 
        cities: Cities.BF_Cities
    },
    { 
        name: "Burundi", 
        iso_code: "BI", 
        cities: Cities.BI_Cities
    },
    { 
        name: "Cambodia", 
        iso_code: "KH", 
        cities: Cities.KH_Cities
    },
    { 
        name: "Cameroon", 
        iso_code: "CM", 
        cities: Cities.CM_Cities
    },
    { 
        name: "Canada", 
        iso_code: "CA", 
        cities: Cities.CA_Cities
    },
    { 
        name: "Cape Verde", 
        iso_code: "CV", 
        cities: Cities.CV_Cities
    },
    { 
        name: "Cayman Islands", 
        iso_code: "KY", 
        cities: Cities.KY_Cities
    },
    { 
        name: "Central African Republic", 
        iso_code: "CF", 
        cities: Cities.CF_Cities
    },
    { 
        name: "Chad", 
        iso_code: "TD", 
        cities: Cities.TD_Cities
    },
    { 
        name: "Chile", 
        iso_code: "CL", 
        cities: Cities.CL_Cities
    },
    { 
        name: "China", 
        iso_code: "CN", 
        cities: Cities.CN_Cities
    },
    { 
        name: "Christmas Island", 
        iso_code: "CX", 
        cities: Cities.CX_Cities
    },
    { 
        name: "Cocos (Keeling) Islands", 
        iso_code: "CC", 
        cities: Cities.CC_Cities
    },
    { 
        name: "Colombia", 
        iso_code: "CO", 
        cities: Cities.CO_Cities
    },
    { 
        name: "Comoros", 
        iso_code: "KM", 
        cities: Cities.KM_Cities
    },
    { 
        name: "Congo", 
        iso_code: "CG", 
        cities: Cities.CG_Cities
    },
    { 
        name: "Congo, The Democratic Republic of the", 
        iso_code: "CD", 
        cities: Cities.CD_Cities
    },
    { 
        name: "Cook Islands", 
        iso_code: "CK", 
        cities: Cities.CK_Cities
    },
    { 
        name: "Costa Rica", 
        iso_code: "CR", 
        cities: Cities.CR_Cities
    },
    { 
        name: "Cote D'Ivoire", 
        iso_code: "CI", 
        cities: Cities.CI_Cities
    },
    { 
        name: "Croatia", 
        iso_code: "HR", 
        cities: Cities.HR_Cities
    },
    { 
        name: "Cuba", 
        iso_code: "CU", 
        cities: Cities.CU_Cities
    },
    { 
        name: "Cyprus", 
        iso_code: "CY", 
        cities: Cities.CY_Cities
    },
    { 
        name: "Czech Republic", 
        iso_code: "CZ", 
        cities: Cities.CZ_Cities
    },
    { 
        name: "Denmark", 
        iso_code: "DK", 
        cities: Cities.DK_Cities
    },
    { 
        name: "Djibouti", 
        iso_code: "DJ", 
        cities: Cities.DJ_Cities
    },
    { 
        name: "Dominica", 
        iso_code: "DM", 
        cities: Cities.DM_Cities
    },
    { 
        name: "Dominican Republic", 
        iso_code: "DO", 
        cities: Cities.DO_Cities
    },
    { 
        name: "Ecuador", 
        iso_code: "EC", 
        cities: Cities.EC_Cities
    },
    { 
        name: "Egypt", 
        iso_code: "EG", 
        cities: Cities.EG_Cities
    },
    { 
        name: "El Salvador", 
        iso_code: "SV", 
        cities: Cities.SV_Cities
    },
    { 
        name: "Equatorial Guinea", 
        iso_code: "GQ", 
        cities: Cities.GQ_Cities
    },
    { 
        name: "Eritrea", 
        iso_code: "ER", 
        cities: Cities.ER_Cities
    },
    { 
        name: "Estonia", 
        iso_code: "EE", 
        cities: Cities.EE_Cities
    },
    { 
        name: "Ethiopia", 
        iso_code: "ET", 
        cities: Cities.ET_Cities
    },
    { 
        name: "Falkland Islands (Malvinas)", 
        iso_code: "FK", 
        cities: Cities.FK_Cities
    },
    { 
        name: "Faroe Islands", 
        iso_code: "FO", 
        cities: Cities.FO_Cities
    },
    { 
        name: "Fiji", 
        iso_code: "FJ", 
        cities: Cities.FJ_Cities
    },
    { 
        name: "Finland", 
        iso_code: "FI", 
        cities: Cities.FI_Cities
    },
    { 
        name: "France", 
        iso_code: "FR", 
        cities: Cities.FR_Cities
    },
    { 
        name: "French Guiana", 
        iso_code: "GF", 
        cities: Cities.GF_Cities
    },
    { 
        name: "French Polynesia", 
        iso_code: "PF", 
        cities: Cities.PF_Cities
    },
    { 
        name: "French Southern Territories", 
        iso_code: "TF", 
        cities: Cities.TF_Cities
    },
    { 
        name: "Gabon", 
        iso_code: "GA", 
        cities: Cities.GA_Cities
    },
    { 
        name: "Gambia", 
        iso_code: "GM", 
        cities: Cities.GM_Cities
    },
    { 
        name: "Georgia", 
        iso_code: "GE", 
        cities: Cities.GE_Cities
    },
    { 
        name: "Germany", 
        iso_code: "DE", 
        cities: Cities.DE_Cities
    },
    { 
        name: "Ghana", 
        iso_code: "GH", 
        cities: Cities.GH_Cities
    },
    { 
        name: "Gibraltar", 
        iso_code: "GI", 
        cities: Cities.GI_Cities
    },
    { 
        name: "Greece", 
        iso_code: "GR", 
        cities: Cities.GR_Cities
    },
    { 
        name: "Greenland", 
        iso_code: "GL", 
        cities: Cities.GL_Cities
    },
    { 
        name: "Grenada", 
        iso_code: "GD", 
        cities: Cities.GD_Cities
    },
    { 
        name: "Guadeloupe", 
        iso_code: "GP", 
        cities: Cities.GP_Cities
    },
    { 
        name: "Guam", 
        iso_code: "GU", 
        cities: Cities.GU_Cities
    },
    { 
        name: "Guatemala", 
        iso_code: "GT", 
        cities: Cities.GT_Cities
    },
    { 
        name: "Guernsey", 
        iso_code: "GG", 
        cities: Cities.GG_Cities
    },
    { 
        name: "Guinea", 
        iso_code: "GN", 
        cities: Cities.GN_Cities
    },
    { 
        name: "Guinea-Bissau", 
        iso_code: "GW", 
        cities: Cities.GW_Cities
    },
    { 
        name: "Guyana", 
        iso_code: "GY", 
        cities: Cities.GY_Cities
    },
    { 
        name: "Haiti", 
        iso_code: "HT", 
        cities: Cities.HT_Cities
    },
    { 
        name: "Heard Island and Mcdonald Islands", 
        iso_code: "HM", 
        cities: Cities.HM_Cities
    },
    { 
        name: "Holy See (Vatican City State)", 
        iso_code: "VA", 
        cities: Cities.VA_Cities
    },
    { 
        name: "Honduras", 
        iso_code: "HN", 
        cities: Cities.HN_Cities
    },
    { 
        name: "Hong Kong", 
        iso_code: "HK", 
        cities: Cities.HK_Cities
    },
    { 
        name: "Hungary", 
        iso_code: "HU", 
        cities: Cities.HU_Cities
    },
    { 
        name: "Iceland", 
        iso_code: "IS", 
        cities: Cities.IS_Cities
    },
    { 
        name: "India", 
        iso_code: "IN", 
        cities: Cities.IN_Cities
    },
    { 
        name: "Indonesia", 
        iso_code: "ID", 
        cities: Cities.ID_Cities
    },
    { 
        name: "Iran, Islamic Republic Of", 
        iso_code: "IR", 
        cities: Cities.IR_Cities
    },
    { 
        name: "Iraq", 
        iso_code: "IQ", 
        cities: Cities.IQ_Cities
    },
    { 
        name: "Ireland", 
        iso_code: "IE", 
        cities: Cities.IE_Cities
    },
    { 
        name: "Isle of Man", 
        iso_code: "IM", 
        cities: Cities.IM_Cities
    },
    { 
        name: "Israel", 
        iso_code: "IL", 
        cities: Cities.IL_Cities
    },
    { 
        name: "Italy", 
        iso_code: "IT", 
        cities: Cities.IT_Cities
    },
    { 
        name: "Jamaica", 
        iso_code: "JM", 
        cities: Cities.JM_Cities
    },
    { 
        name: "Japan", 
        iso_code: "JP", 
        cities: Cities.JP_Cities
    },
    { 
        name: "Jersey", 
        iso_code: "JE", 
        cities: Cities.JE_Cities
    },
    { 
        name: "Jordan", 
        iso_code: "JO", 
        cities: Cities.JO_Cities
    },
    { 
        name: "Kazakhstan", 
        iso_code: "KZ", 
        cities: Cities.KZ_Cities
    },
    { 
        name: "Kenya", 
        iso_code: "KE", 
        cities: Cities.KE_Cities
    },
    { 
        name: "Kiribati", 
        iso_code: "KI", 
        cities: Cities.KI_Cities
    },
    { 
        name: "Korea, Democratic People'S Republic of", 
        iso_code: "KP", 
        cities: Cities.KP_Cities
    },
    { 
        name: "Korea, Republic of", 
        iso_code: "KR", 
        cities: Cities.KR_Cities
    },
    { 
        name: "Kuwait", 
        iso_code: "KW", 
        cities: Cities.KW_Cities
    },
    { 
        name: "Kyrgyzstan", 
        iso_code: "KG", 
        cities: Cities.KG_Cities
    },
    { 
        name: "Lao People'S Democratic Republic", 
        iso_code: "LA", 
        cities: Cities.LA_Cities
    },
    { 
        name: "Latvia", 
        iso_code: "LV", 
        cities: Cities.LV_Cities
    },
    { 
        name: "Lebanon", 
        iso_code: "LB", 
        cities: Cities.LB_Cities
    },
    { 
        name: "Lesotho", 
        iso_code: "LS", 
        cities: Cities.LS_Cities
    },
    { 
        name: "Liberia", 
        iso_code: "LR", 
        cities: Cities.LR_Cities
    },
    { 
        name: "Libyan Arab Jamahiriya", 
        iso_code: "LY", 
        cities: Cities.LY_Cities
    },
    { 
        name: "Liechtenstein", 
        iso_code: "LI", 
        cities: Cities.LI_Cities
    },
    { 
        name: "Lithuania", 
        iso_code: "LT", 
        cities: Cities.LT_Cities
    },
    { 
        name: "Luxembourg", 
        iso_code: "LU", 
        cities: Cities.LU_Cities
    },
    { 
        name: "Macao", 
        iso_code: "MO", 
        cities: Cities.MO_Cities
    },
    { 
        name: "Madagascar", 
        iso_code: "MG", 
        cities: Cities.MG_Cities
    },
    { 
        name: "Malawi", 
        iso_code: "MW", 
        cities: Cities.MW_Cities
    },
    { 
        name: "Malaysia", 
        iso_code: "MY", 
        cities: Cities.MY_Cities
    },
    { 
        name: "Maldives", 
        iso_code: "MV", 
        cities: Cities.MV_Cities
    },
    { 
        name: "Mali", 
        iso_code: "ML", 
        cities: Cities.ML_Cities
    },
    { 
        name: "Malta", 
        iso_code: "MT", 
        cities: Cities.MT_Cities
    },
    { 
        name: "Marshall Islands", 
        iso_code: "MH", 
        cities: Cities.MH_Cities
    },
    { 
        name: "Martinique", 
        iso_code: "MQ", 
        cities: Cities.MQ_Cities
    },
    { 
        name: "Mauritania", 
        iso_code: "MR", 
        cities: Cities.MR_Cities
    },
    { 
        name: "Mauritius", 
        iso_code: "MU", 
        cities: Cities.MU_Cities
    },
    { 
        name: "Mayotte", 
        iso_code: "YT", 
        cities: Cities.YT_Cities
    },
    { 
        name: "Mexico", 
        iso_code: "MX", 
        cities: Cities.MX_Cities
    },
    { 
        name: "Micronesia, Federated States of", 
        iso_code: "FM", 
        cities: Cities.FM_Cities
    },
    { 
        name: "Moldova, Republic of", 
        iso_code: "MD", 
        cities: Cities.MD_Cities
    },
    { 
        name: "Monaco", 
        iso_code: "MC", 
        cities: Cities.MC_Cities
    },
    { 
        name: "Mongolia", 
        iso_code: "MN", 
        cities: Cities.MN_Cities
    },
    { 
        name: "Montserrat", 
        iso_code: "MS", 
        cities: Cities.MS_Cities
    },
    { 
        name: "Morocco", 
        iso_code: "MA", 
        cities: Cities.MA_Cities
    },
    { 
        name: "Mozambique", 
        iso_code: "MZ", 
        cities: Cities.MZ_Cities
    },
    { 
        name: "Myanmar", 
        iso_code: "MM", 
        cities: Cities.MM_Cities
    },
    { 
        name: "Namibia", 
        iso_code: "NA", 
        cities: Cities.NA_Cities
    },
    { 
        name: "Nauru", 
        iso_code: "NR", 
        cities: Cities.NR_Cities
    },
    { 
        name: "Nepal", 
        iso_code: "NP", 
        cities: Cities.NP_Cities
    },
    { 
        name: "Netherlands", 
        iso_code: "NL", 
        cities: Cities.NL_Cities
    },
    { 
        name: "Netherlands Antilles", 
        iso_code: "AN", 
        cities: Cities.AN_Cities
    },
    { 
        name: "New Caledonia", 
        iso_code: "NC", 
        cities: Cities.NC_Cities
    },
    { 
        name: "New Zealand", 
        iso_code: "NZ", 
        cities: Cities.NZ_Cities
    },
    { 
        name: "Nicaragua", 
        iso_code: "NI", 
        cities: Cities.NI_Cities
    },
    { 
        name: "Niger", 
        iso_code: "NE", 
        cities: Cities.NE_Cities
    },
    { 
        name: "Nigeria", 
        iso_code: "NG", 
        cities: Cities.NG_Cities
    },
    { 
        name: "Niue", 
        iso_code: "NU", 
        cities: Cities.NU_Cities
    },
    { 
        name: "Norfolk Island", 
        iso_code: "NF", 
        cities: Cities.NF_Cities
    },
    { 
        name: "Northern Mariana Islands", 
        iso_code: "MP", 
        cities: Cities.MP_Cities
    },
    { 
        name: "Norway", 
        iso_code: "NO", 
        cities: Cities.NO_Cities
    },
    { 
        name: "Oman", 
        iso_code: "OM", 
        cities: Cities.OM_Cities
    },
    { 
        name: "Pakistan", 
        iso_code: "PK", 
        cities: Cities.PK_Cities
    },
    { 
        name: "Palau", 
        iso_code: "PW", 
        cities: Cities.PW_Cities
    },
    { 
        name: "Palestinian Territory, Occupied", 
        iso_code: "PS", 
        cities: Cities.PS_Cities
    },
    { 
        name: "Panama", 
        iso_code: "PA", 
        cities: Cities.PA_Cities
    },
    { 
        name: "Papua New Guinea", 
        iso_code: "PG", 
        cities: Cities.PG_Cities
    },
    { 
        name: "Paraguay", 
        iso_code: "PY", 
        cities: Cities.PY_Cities
    },
    { 
        name: "Peru", 
        iso_code: "PE", 
        cities: Cities.PE_Cities
    },
    { 
        name: "Philippines", 
        iso_code: "PH", 
        cities: Cities.PH_Cities
    },
    { 
        name: "Pitcairn", 
        iso_code: "PN", 
        cities: Cities.PN_Cities
    },
    { 
        name: "Poland", 
        iso_code: "PL", 
        cities: Cities.PL_Cities
    },
    { 
        name: "Portugal", 
        iso_code: "PT", 
        cities: Cities.PT_Cities
    },
    { 
        name: "Puerto Rico", 
        iso_code: "PR", 
        cities: Cities.PR_Cities
    },
    { 
        name: "Qatar", 
        iso_code: "QA", 
        cities: Cities.QA_Cities
    },
    { 
        name: "Reunion", 
        iso_code: "RE", 
        cities: Cities.RE_Cities
    },
    { 
        name: "Romania", 
        iso_code: "RO", 
        cities: Cities.RO_Cities
    },
    { 
        name: "Russian Federation", 
        iso_code: "RU", 
        cities: Cities.RU_Cities
    },
    { 
        name: "RWANDA", 
        iso_code: "RW", 
        cities: Cities.RW_Cities
    },
    { 
        name: "Saint Helena", 
        iso_code: "SH", 
        cities: Cities.SH_Cities
    },
    { 
        name: "Saint Kitts and Nevis", 
        iso_code: "KN", 
        cities: Cities.KN_Cities
    },
    { 
        name: "Saint Lucia", 
        iso_code: "LC", 
        cities: Cities.LC_Cities
    },
    { 
        name: "Saint Pierre and Miquelon", 
        iso_code: "PM", 
        cities: Cities.PM_Cities
    },
    { 
        name: "Saint Vincent and the Grenadines", 
        iso_code: "VC", 
        cities: Cities.VC_Cities
    },
    { 
        name: "Samoa", 
        iso_code: "WS", 
        cities: Cities.WS_Cities
    },
    { 
        name: "San Marino", 
        iso_code: "SM", 
        cities: Cities.SM_Cities
    },
    { 
        name: "Sao Tome and Principe", 
        iso_code: "ST", 
        cities: Cities.ST_Cities
    },
    { 
        name: "Saudi Arabia", 
        iso_code: "SA", 
        cities: Cities.SA_Cities
    },
    { 
        name: "Senegal", 
        iso_code: "SN", 
        cities: Cities.SN_Cities
    },
    { 
        name: "Serbia and Montenegro", 
        iso_code: "CS", 
        cities: Cities.CS_Cities
    },
    { 
        name: "Seychelles", 
        iso_code: "SC", 
        cities: Cities.SC_Cities
    },
    { 
        name: "Sierra Leone", 
        iso_code: "SL", 
        cities: Cities.SL_Cities
    },
    { 
        name: "Singapore", 
        iso_code: "SG", 
        cities: Cities.SG_Cities
    },
    { 
        name: "Slovakia", 
        iso_code: "SK", 
        cities: Cities.SK_Cities
    },
    { 
        name: "Slovenia", 
        iso_code: "SI", 
        cities: Cities.SI_Cities
    },
    { 
        name: "Solomon Islands", 
        iso_code: "SB", 
        cities: Cities.SB_Cities
    },
    { 
        name: "Somalia", 
        iso_code: "SO", 
        cities: Cities.SO_Cities
    },
    { 
        name: "South Africa", 
        iso_code: "ZA", 
        cities: Cities.ZA_Cities
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        iso_code: "GS",
        cities: Cities.GS_Cities
    },
    { 
        name: "Spain", 
        iso_code: "ES", 
        cities: Cities.ES_Cities
    },
    { 
        name: "Sri Lanka", 
        iso_code: "LK", 
        cities: Cities.LK_Cities
    },
    { 
        name: "Sudan", 
        iso_code: "SD", 
        cities: Cities.SD_Cities
    },
    { 
        name: "Suriname", 
        iso_code: "SR", 
        cities: Cities.SR_Cities
    },
    { 
        name: "Svalbard and Jan Mayen", 
        iso_code: "SJ", 
        cities: Cities.SJ_Cities
    },
    { 
        name: "Swaziland", 
        iso_code: "SZ", 
        cities: Cities.SZ_Cities
    },
    { 
        name: "Sweden", 
        iso_code: "SE", 
        cities: Cities.SE_Cities
    },
    { 
        name: "Switzerland", 
        iso_code: "CH", 
        cities: Cities.CH_Cities
    },
    { 
        name: "Syrian Arab Republic", 
        iso_code: "SY", 
        cities: Cities.SY_Cities
    },
    { 
        name: "Taiwan, Province of China", 
        iso_code: "TW", 
        cities: Cities.TW_Cities
    },
    { 
        name: "Tajikistan", 
        iso_code: "TJ", 
        cities: Cities.TJ_Cities
    },
    { 
        name: "Tanzania, United Republic of", 
        iso_code: "TZ", 
        cities: Cities.TZ_Cities
    },
    { 
        name: "Thailand", 
        iso_code: "TH", 
        cities: Cities.TH_Cities
    },
    { 
        name: "Timor-Leste", 
        iso_code: "TL", 
        cities: Cities.TL_Cities
    },
    { 
        name: "Togo", 
        iso_code: "TG", 
        cities: Cities.TG_Cities
    },
    { 
        name: "Tokelau", 
        iso_code: "TK", 
        cities: Cities.TK_Cities
    },
    { 
        name: "Tonga", 
        iso_code: "TO", 
        cities: Cities.TO_Cities
    },
    { 
        name: "Trinidad and Tobago", 
        iso_code: "TT", 
        cities: Cities.TT_Cities
    },
    { 
        name: "Tunisia", 
        iso_code: "TN", 
        cities: Cities.TN_Cities
    },
    { 
        name: "Turkey", 
        iso_code: "TR", 
        cities: Cities.TR_Cities
    },
    { 
        name: "Turkmenistan", 
        iso_code: "TM", 
        cities: Cities.TM_Cities
    },
    { 
        name: "Turks and Caicos Islands", 
        iso_code: "TC", 
        cities: Cities.TC_Cities
    },
    { 
        name: "Tuvalu", 
        iso_code: "TV", 
        cities: Cities.TV_Cities
    },
    { 
        name: "Uganda", 
        iso_code: "UG", 
        cities: Cities.UG_Cities
    },
    { 
        name: "Ukraine", 
        iso_code: "UA", 
        cities: Cities.UA_Cities
    },
    { 
        name: "United Arab Emirates", 
        iso_code: "AE", 
        cities: Cities.AE_Cities
    },
    { 
        name: "United Kingdom", 
        iso_code: "GB", 
        cities: Cities.GB_Cities
    },
    { 
        name: "United States", 
        iso_code: "US", 
        cities: Cities.US_Cities
    },
    { 
        name: "United States Minor Outlying Islands", 
        iso_code: "UM", 
        cities: Cities.UM_Cities
    },
    { 
        name: "Uruguay", 
        iso_code: "UY", 
        cities: Cities.UY_Cities
    },
    { 
        name: "Uzbekistan", 
        iso_code: "UZ", 
        cities: Cities.UZ_Cities
    },
    { 
        name: "Vanuatu", 
        iso_code: "VU", 
        cities: Cities.VU_Cities
    },
    { 
        name: "Venezuela", 
        iso_code: "VE", 
        cities: Cities.VE_Cities
    },
    { 
        name: "Viet Nam", 
        iso_code: "VN", 
        cities: Cities.VN_Cities
    },
    { 
        name: "Virgin Islands, British", 
        iso_code: "VG", 
        cities: Cities.VG_Cities
    },
    { 
        name: "Virgin Islands, U.S.", 
        iso_code: "VI", 
        cities: Cities.VI_Cities
    },
    { 
        name: "Wallis and Futuna", 
        iso_code: "WF", 
        cities: Cities.WF_Cities
    },
    { 
        name: "Western Sahara", 
        iso_code: "EH", 
        cities: Cities.EH_Cities
    },
    { 
        name: "Yemen", 
        iso_code: "YE", 
        cities: Cities.YE_Cities
    },
    { 
        name: "Zambia", 
        iso_code: "ZM", 
        cities: Cities.ZM_Cities
    },
    { 
        name: "Zimbabwe", 
        iso_code: "ZW",
        cities: Cities.ZW_Cities
    },
];

export const Countries = [
    {
        name: "Kosovo",
        iso_code: "XK",
        cities: Cities.XK_Cities,
    },
    {
        name: "Albania",
        iso_code: "AL",
        cities: Cities.AL_Cities,
    },
    {
        name: "Macedonia",
        iso_code: "MK",
        cities: Cities.MK_Cities,
    },
];