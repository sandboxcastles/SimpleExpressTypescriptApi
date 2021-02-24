export function getArgValue(argFlag: string, args: string[]) {
    const argFlags = args?.filter(value => value === argFlag || value.startsWith(`${argFlag}=`));
    if (!argFlags?.length) {
        return null;
    }
    const lastArgFlag = argFlags[argFlags.length - 1];
    const lastArgFlagSplit = lastArgFlag.split('=');

    let argValue: string;
    if (lastArgFlagSplit.length > 1) {
        argValue = lastArgFlagSplit[lastArgFlagSplit.length - 1];
    }

    if (!argValue) {
        argValue = args[args.lastIndexOf(lastArgFlag) + 1];
    }
    return argValue ?? args[args.lastIndexOf(lastArgFlag) + 1] ?? null;
}