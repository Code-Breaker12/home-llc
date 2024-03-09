const todayDate = new Date();

const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
};

export const formattedDate = todayDate.toLocaleDateString('en-US', options);

