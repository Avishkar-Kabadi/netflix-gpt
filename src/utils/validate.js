export const checkValidData = (email, password, fullName) => {

    if (fullName !== null && fullName !== undefined) {
        const trimmedName = fullName.trim();

        if (trimmedName.length === 0) {
            return "Full Name is required";
        }

        if (trimmedName.length < 2) {
            return "Full Name should be at least 2 characters long";
        }
    }

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
    );

    if (!isEmailValid) {
        return "Email ID is not valid";
    }

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            password
        );

    if (!isPasswordValid) {
        return "Password must be 8+ chars with uppercase, number & special char.";
    }

    return null; 
};
