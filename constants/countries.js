export const selects = [
  {
    label: 'Pais',
    defaultValue: 'Selecciona tu pais',
    name: 'country',
    required: true,
    options: [
      { value: 'Mexico', code: 'MX' },
      { value: 'United States of America', code: 'US' },
      { value: 'Canada', code: 'CA' },
      { value: 'Argentina', code: 'AR' },
      { value: 'Brazil', code: 'BR' },
      { value: 'Colombia', code: 'CO' },
      { value: 'Chile', code: 'CL' },
      { value: 'Peru', code: 'PE' },
      { value: 'Ecuador', code: 'EC' },
      { value: 'Bolivia', code: 'BO' },
      { value: 'Paraguay', code: 'PY' },
      { value: 'Uruguay', code: 'UY' },
      { value: 'Venezuela', code: 'VE' },
      { value: 'Spain', code: 'ES' },
      { value: 'France', code: 'FR' },
      { value: 'Germany', code: 'DE' },
      { value: 'Italy', code: 'IT' },
      { value: 'United Kingdom', code: 'GB' },
      { value: 'Netherlands', code: 'NL' },
      { value: 'Switzerland', code: 'CH' },
      { value: 'Sweden', code: 'SE' },
      { value: 'Norway', code: 'NO' },
      { value: 'Denmark', code: 'DK' },
      { value: 'Finland', code: 'FI' },
      { value: 'Belgium', code: 'BE' },
      { value: 'Austria', code: 'AT' },
      { value: 'Greece', code: 'GR' },
      { value: 'Ireland', code: 'IE' },
      { value: 'Portugal', code: 'PT' },
      { value: 'Czech Republic', code: 'CZ' },
      { value: 'Poland', code: 'PL' },
      { value: 'Hungary', code: 'HU' },
      { value: 'Romania', code: 'RO' },
      { value: 'Bulgaria', code: 'BG' },
      { value: 'Croatia', code: 'HR' },
      { value: 'Serbia', code: 'RS' },
      { value: 'Slovakia', code: 'SK' },
      { value: 'Slovenia', code: 'SI' },
      { value: 'Ukraine', code: 'UA' },
      { value: 'Russia', code: 'RU' },
      { value: 'Turkey', code: 'TR' },
      { value: 'Israel', code: 'IL' }
    ]
  },
  {
    label: '¿Qué opción te describe mejor?',
    defaultValue: 'Elige una opción',
    name: 'userType',
    required: true,
    options: [
      { value: 'Senderista', code: 'SE' },
      { value: 'Guía independiente', code: 'GI' },
      { value: 'Agencia de viajes', code: 'AV' }
    ]
  },
  {
    label: '¿Cuál sería tu forma de pago ideal?',
    defaultValue: 'Elige una opción',
    name: 'paymentPlan',
    required: true,
    options: [
      { value: 'Subscripción', code: 'SUB' },
      { value: 'Comisión por viaje', code: 'CPV' }
    ]
  }
]
