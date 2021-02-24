import { isValidPort } from './valid-port';
import { getArgValue } from '../args/process-args';

export function getPort(args: string[], defaultPort = 3001) {
    const portArg = getArgValue('-a', args);
    if (portArg === undefined || portArg === null) {
        return defaultPort;
    }
    const parsedPortArg = Number(portArg);
    return isValidPort(parsedPortArg)
        ? parsedPortArg
        : defaultPort;
}