import { configData } from './interfaces';

export const get_api_url = (config: configData) : string => {

  let service_prefix_host = "";
  if (import.meta.env.service_prefix_host_name !== undefined) {
    service_prefix_host = import.meta.env.service_prefix_host_name
  }

  let service_prefix_port = 0
  if (import.meta.env.service_prefix_port_name !== undefined) {
    service_prefix_port = import.meta.env.service_prefix_port_name;
  }

  let vite_api_ip = "";
  if (import.meta.env.VITE_API_IP !== undefined) {
    vite_api_ip = import.meta.env.VITE_API_IP;
  }

  let vite_api_port = 0;
  if (import.meta.env.VITE_API_PORT !== undefined) {
    vite_api_port = import.meta.env.VITE_API_PORT;
  }

  let config_api_port = 0;
  if (config.APIPORT !== undefined) {
    config_api_port = config.APIPORT;
  }

  const api_ip = service_prefix_host || vite_api_ip || 'localhost';
  const api_port = service_prefix_port || vite_api_port || config_api_port || "80";

  const api_url = `https://${api_ip}:${api_port}/api/`;

  return api_url
}

export default get_api_url
