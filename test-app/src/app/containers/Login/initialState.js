
/**
const initialState = {
    theme: 'dark',
    grid: 5,
};
*/
const initialState = () => ({
    theme: localStorage.getItem('theme'),
    grid: localStorage.getItem('grid'),
});
