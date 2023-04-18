export interface ClienteInterface {
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
