export function isValidPort(port: number): boolean {
    return !(isNaN(port) || port < 0 || port >= 65536);
}
