export interface MascotaInterface {
  idm: number;
  nombrem: string;
  especiem: especieDTO;
  razam: string;
  fechanacimientom: Date;
  fechaentradam: Date;
  clientem: clienteDTO;
}

interface especieDTO {
  ide: number;
  nombree: string;
}

interface clienteDTO {
  idc: number;
  tipoidc: tipoidDTO;
  identificacionc: string;
  nombrec: string;
  ciudadc: string;
  direccionc: string;
  telefonoc: string;
}

interface tipoidDTO {
  idt: number;
  nombret: string;
}
