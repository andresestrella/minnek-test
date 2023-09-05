export function capitalize(str: string) {
	// return str[0].toUpperCase() + str.slice(1);
	return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
