export async function shouldRevert(func: () => void, errorMessage?: string) {
    try {
        await func()
    } catch {
        return
    }
    throw new Error(errorMessage)
}
