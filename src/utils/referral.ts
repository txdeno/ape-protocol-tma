export function calculateRefDepth(ancestorDepth?: number, childDepth?: number) {
    return (childDepth || 0) - (ancestorDepth || 0);
}
