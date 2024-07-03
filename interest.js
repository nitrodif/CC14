const calculateInterestRate = (principal, time, rate) => {
    return principal * rate * time;
};

module.exports = calculateInterestRate;