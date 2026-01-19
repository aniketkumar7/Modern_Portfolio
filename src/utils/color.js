// Predefined colors for random selection with reduced brightness
const ACCENT_COLORS = [
    '#1d6252', // Darker Mint
    '#026472', // Darker Cyan
    '#322a6f', // Darker Purple
    '#3f6859', // Darker Soft Green
    '#75523e', // Darker Peach
    '#723c3f', // Darker Coral
    '#374068', // Darker Lavender
    '#03605d', // Darker Turquoise
    '#804e44', // Darker Salmon
    '#2f6161', // Darker Light Blue
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
