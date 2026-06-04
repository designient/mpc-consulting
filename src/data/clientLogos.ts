export type ClientLogo = {
  id: string;
  name: string;
  src: string;
};

function logo(id: string, name: string): ClientLogo {
  return {
    id,
    name,
    src: `/logos/clients/${id}.webp`
  };
}

export const HCM_CLIENT_LOGOS: ClientLogo[] = [
  logo('aegis', 'Aegis'),
  logo('novabank', 'NovaBank'),
  logo('helios', 'Helios'),
  logo('verdant', 'Verdant'),
  logo('atria', 'Atria'),
  logo('sterling', 'Sterling'),
  logo('quantum', 'Quantum'),
  logo('harbor', 'Harbor')
];

export const ERP_CLIENT_LOGOS: ClientLogo[] = [
  logo('northwind', 'Northwind'),
  logo('cyrus', 'Cyrus'),
  logo('pinnacle', 'Pinnacle'),
  logo('polaris', 'Polaris'),
  logo('eversource', 'Eversource'),
  logo('meridian', 'Meridian'),
  logo('summit', 'Summit'),
  logo('lumen', 'Lumen')
];

export const ALL_CLIENT_LOGOS: ClientLogo[] = [
  ...HCM_CLIENT_LOGOS,
  ...ERP_CLIENT_LOGOS
];
