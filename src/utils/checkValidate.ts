export default function checkValidate(email: string, password: string) {
	let pass = true;
	if (!email.includes('@')) pass = false;
	if (password.length < 8) pass = false;

	return pass;
}
