const calculateInvestmentReturn = (principal, rate, years, compounding) => {
    const totalPeriods = years * compounding;
    return principal * Math.pow(1 + rate / compounding, totalPeriods);
};

module.exports = calculateInvestmentReturn;