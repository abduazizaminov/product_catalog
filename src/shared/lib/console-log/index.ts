enum MessageLogType {
    Info,
    Warning,
    Error,
    Success
}

function consoleLog(formattedText: string, messageLogType: MessageLogType = MessageLogType.Info) {
    console.log(`%c ${formattedText}`, `color: ${getColor(messageLogType)}`);
}

function getColor(messageLogType: MessageLogType): string {
    switch (messageLogType) {
        case MessageLogType.Info:
            return '#008b8b'
        case MessageLogType.Warning:
            return '#8B8000'
        case MessageLogType.Error:
            return '#EB001B'
        case MessageLogType.Success:
            return 'green'
        default:
            return '#000'
    }
}

export { MessageLogType, consoleLog }
