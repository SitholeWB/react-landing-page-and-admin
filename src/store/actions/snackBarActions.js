export const SNACK_BAR_OPEN = 'SNACK_BAR_OPEN';

export const setSnackBarOpen = (open, message) => ({
    type: SNACK_BAR_OPEN,
    open,
    message
});
