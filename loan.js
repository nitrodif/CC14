const calculateLoanPayment = (principal, rate, years) => {
    const monthlyRate = rate / 12;
    const totalPayments = years * 12;
    return (
        (principal) * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
    );
};

module.exports = calculateLoanPayment;