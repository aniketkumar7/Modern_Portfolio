// Predefined colors for random selection with reduced brightness
const ACCENT_COLORS = [
    '#4cd9b7', // Darker Mint
    '#0095ab', // Darker Cyan
    '#5849c5', // Darker Purple
    '#8ac7b0', // Darker Soft Green
    '#e6b598', // Darker Peach
    '#e57177', // Darker Coral
    '#7589e6', // Darker Lavender
    '#00aba6', // Darker Turquoise
    '#e08e7d', // Darker Salmon
    '#66c7c7', // Darker Light Blue
];

// Memoized random color function
export const getRandomColor = (() => {
    let lastColor = '';

    return () => {
        let newColor;
        do {
            newColor = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
        } while (newColor === lastColor); // Ensure we don't get the same color twice

        lastColor = newColor;
        return newColor;
    };
})();
